<template>

    <div style="display:none;">

      <div v-if="$slots.marker"
          ref="marker">
         <!-- @slot html of marker -->
        <slot name="marker"></slot>
      </div>
      <div v-if="$slots.popup" ref="popup">
        <!-- @slot html to show in popup -->
        <slot name="popup"></slot>
      </div>
      <slot></slot>
    </div>

</template>

<script>

const nativeEventsTypes = ['click', 'dragstart', 'drag', 'dragend']

export default {

  /**
   * The only true button.
   * @displayName Marker
   */

  /**
   * The only true button.
   * @description o MArker do asd fasd fuasd fausdf sdai
   */
  /**
   * The only true button.
   * @event Hover
   */

  name: 'VmMarker',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],

  props: {
    /**
       Center of Marker (Dynamic)
      */
    center: {
      type: Array,
      default: () => [0, 0]
    },
    /**
      * Anchor of the marker - (Dynamic)
      * @values center , top , bottom , left , right , top-left , top-right , bottom-left , and bottom-right
     */
    anchor: {
      type: String,
      default: 'center',
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
       Color of the default marker, if default slot is not set (Dynamic)
    */
    color: {
      type: String,
      default: '#3FB1CE'
    },
    /**
       Offset of market in pixels
    */
    offset: {
      type: Array,
      default: () => [0, 0]
    },
    /**
       Offset of market in pixels
    */
    draggable: {
      type: Boolean,
      default: false
    },
    /**
       *  The  PopUp Content - If set via slot, this will be ignored (Dynamic)
    */
    popUpContent: {
      type: String,
      default: undefined
    }
  },

  data () {
    return {
      marker: null,
      popup: null,
      ownPopup: false
    }
  },

  async mounted () {
    await this.$nextTick()
    this.setupMarker()
  },

  watch: {
    center: function (val) {
      if (this.marker) { this.marker.setLngLat(val) }
    },
    draggable: function (val) {
      if (this.marker) { this.marker.setDraggable(val) }
    },
    color: function (val) {
      if (this.marker) { this.marker.setDraggable(val) }
    },
    popUpContent: function (val) {
      if (this.marker) { this.updateHtmlContent() }
    }
  },

  beforeDestroy () {
    if (this.marker) {
      this.marker.remove()
    }
  },

  // updated () {
  //   this.$nextTick(() => this.updateHtmlContent())
  // },

  methods: {
    setupMarker: function () {
      const options = {
        offset: this.offset,
        color: this.color,
        draggable: this.draggable
      }
      if (this.$slots.marker) {
        options.element = this.$refs.marker
      }

      this.marker = new this.mapboxgl.Marker(options)
        .setLngLat(this.center)
        .addTo(this.getMap())

      this.MapboxVueInstance.setupEvents(this.$listeners, this.marker, nativeEventsTypes)
      this.setupPopup()
    },

    setupPopup: function () {
      if (!this.marker) return

      // check if have an popup as child component
      this.$children.forEach(vnode => {
        if (vnode.$options.name === 'VmPopup') {
          this.popup = vnode.$data.popup
        }
      })

      const htmlcontent = this.getHtmlForPopup()
      if (!this.popup && htmlcontent) {
        this.popup = new this.mapboxgl.Popup()
        this.ownPopup = true
      }

      if (this.popup) {
        this.marker.setPopup(this.popup)
        this.updateHtmlContent()
      }
    },

    updateHtmlContent: function () {
      if (this.popup && this.ownPopup) {
        const htmlcontent = this.getHtmlForPopup()
        if (this.$slots.popup) {
          this.popup.setDOMContent(htmlcontent)
        } else {
          this.popup.setHTML(htmlcontent)
        }
      }
    },

    getHtmlForPopup: function () {
      let htmlcontent
      if (this.popUpContent) {
        htmlcontent = this.popUpContent
      }
      if (this.$slots.popup) {
        htmlcontent = this.$refs.popup
      }
      return htmlcontent
    },

    docEvents: function () {
      /**
        *  @property {object} _this the component instance
        * @property {object} map the mapbox instance
      */
      this.$emit('dragstart')
      this.$emit('drag')
      this.$emit('dragend')
    }

  }

}
</script>
