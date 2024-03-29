<template>
    <div :style="{ maxHeight:myMaxHeight, overflow:'auto'}">
      <slot></slot>
    </div>
</template>

<script>

const nativeEventsTypes = ['open', 'close']

export default {

  name: 'VmPopup',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],

  props: {
    /**
       *A string indicating the part of the Popup that should be positioned closest to the coordinate set via Popup#setLngLat
       *@values 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' .
      */
    anchor: {
      type: String,
      default: undefined,
      validator: function (value) {
        return [
          'center',
          'top',
          'bottom',
          'left', 'right',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'].indexOf(value) !== -1
      }
    },
    /**
      If true , show or open popup. use with .sync Modifier to change parent (Dynamic)
    */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * TODO
      If we use the global popup of the map. if true, any new VmPopup instance will use the same popup, so a new poup will remove any previues.
      If false, will create a new Popup.
      */
    global: {
      type: Boolean,
      default: false
    },
    /**
     Center of Popup (Dynamic)
    */
    center: {
      type: Array,
      default: () => [0, 0]
    },
    /**
      If true , a close button will appear in the top right corner of the popup.
    */
    closeButton: {
      type: Boolean,
      default: true
    },
    /**
       If true , the popup will closed when the map is clicked.
    */
    closeOnClick: {
      type: Boolean,
      default: true
    },
    /**
      If true , the popup will closed when the map moves.
    */
    closeOnMove: {
      type: Boolean,
      default: false
    },
    /**
        pixel offset applied to the popup's location specified as:
    */
    offset: {
      type: [Number, Array],
      default: 20
    },
    /**
        Space-separated CSS class names to add to popup container
    */
    className: {
      type: String,
      default: ''
    },
    /**
       * A string that sets the CSS property of the popup's maximum width, eg '300px' . To ensure the popup resizes to fit its content, set this property to 'none' .
    */
    maxWidth: {
      type: [Number, String],
      default: '240px'
    },
    /**
       * A string that sets the CSS property of the popup's maximum width, eg '300px' . To ensure the popup resizes to fit its content, set this property to 'none' .
    */
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    /**
       * Tracks the popup anchor to the cursor position on screens with a pointer device (it will be hidden on touchscreens). Replaces the setLngLat behavior. For most use cases, set closeOnClick and closeButton to false.
    */
    trackPointer: {
      type: Boolean,
      default: false
    },
    /**
       * The color or background of the popup
    */
    color: {
      type: String,
      default: 'white'
    },
    /**
       * The color of the popup
    */
    textColor: {
      type: String,
      default: 'black'
    },
    /**
       * In cases you want to set  a diferente color for the arrow. if null, will use the color propr
    */
    arrowColor: {
      type: String
    }
  },

  data () {
    return {
      popup: null
    }
  },

  computed: {
    myMaxHeight: function () {
      let h = this.maxHeight
      if (typeof h === 'number') {
        h += 'px'
      }
      return h
    },
    myMaxWidth: function () {
      let w = this.maxWidth
      if (typeof w === 'number') {
        w += 'px'
      }
      return w
    }
  },

  async mounted () {
    await this.$nextTick()
    this.createPopup()
  },

  watch: {
    center: function (val) {
      this.setupPopup()
    },
    open: function (val) {
      this.setupPopup()
    },
    trackPointer: function (val) {
      this.setupPopup()
    },
    maxWidth: function (val) {
      this.setupPopup()
    },
    color: function (val) {
      this.setupPopup()
    }
  },

  beforeDestroy () {
    if (this.popup) {
      this.popup.remove()
    }
  },

  methods: {

    createPopup: function () {
      //console.log('popup created!')
      const options = {
        closeButton: this.closeButton,
        closeOnMove: this.closeOnMove,
        closeOnClick: this.closeOnClick,
        anchor: this.anchor,
        offset: this.offset,
        className: this.className,
        trackPointer: this.trackPointer,
        maxWidth: this.maxWidth
      }
      const mapboxgl = this.mapboxgl()
      this.popup = new mapboxgl.Popup(options)
        .setLngLat(this.center)
        .setDOMContent(this.$el)

      this.popup.on('open', () => {
        /**
         * Update event. Can use .sync modifier to make 2 way data bind easer for the open props
         *  @property {boolean} open true or false
         */
        this.$emit('update:open', true)
      })
      this.popup.on('close', () => {
        this.$emit('update:open', false)
      })
      this.popup.on('close', () => {
        //console.log('chamou fechou do popup')
      })
      this.setupPopup()
      this.MapboxVueInstance.setupEvents(this.$listeners, this.popup, nativeEventsTypes)
    },

    setupPopup: function () {
      if(! this.popup) return
      if (this.open) {
        if (this.popup.isOpen() === false) { this.popup.addTo(this.getMap()) }
      } else {
        if (this.popup.isOpen() === true) { this.popup.remove() }
      }

      this.popup.setLngLat(this.center)

      if (this.trackPointer) {
        this.popup.trackPointer()
      }

      if (this.popup.getMaxWidth() !== this.myMaxWidth) {
        this.popup.setMaxWidth(this.myMaxWidth)
      }

      const popupElement = this.popup.getElement()
      if (popupElement) {
        const content = popupElement.querySelector('.mapboxgl-popup-content')
        const arrow = popupElement.querySelector('.mapboxgl-popup-tip')
        content.style.backgroundColor = this.color
        content.style.color = this.textColor
        arrow.style.borderTopColor = this.arrowColor || this.color
      }
    },

    docEvents: function () {
      this.$emit('open')
      this.$emit('close')
    }

  }

}

</script>

<style lang="stylus">
      .mapboxgl-popup-close-button{
        color: currentColor !important;
      }
</style>
