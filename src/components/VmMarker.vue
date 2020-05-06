<template>
    <div style="display:none;">
      <div v-if="$slots.default"
          ref="marker">
         <!-- @slot html of marker -->
        <slot></slot>
      </div>
      <div v-if="$slots.popup" ref="popup">
        <!-- @slot html to show in popup -->
        <slot name="popup"></slot>
      </div>
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
      popup: null
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

  updated () {
    this.$nextTick(() => this.updateHtmlContent())
  },

  methods: {
    setupMarker: function () {
      const options = {
        offset: this.offset,
        color: this.color,
        draggable: this.draggable
      }
      if (this.$slots.default) {
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
      const htmlcontent = this.getHtmlForPopup()
      if (htmlcontent) {
        this.popup = new this.mapboxgl.Popup().setHTML(htmlcontent)
        this.marker.setPopup(this.popup)
      }
    },

    updateHtmlContent: function () {
      if (this.popup) {
        const htmlcontent = this.getHtmlForPopup()
        this.popup.setHTML(htmlcontent)
      }
    },

    getHtmlForPopup: function () {
      let htmlcontent
      if (this.popUpContent) {
        htmlcontent = this.popUpContent
      }
      if (this.$slots.popup) {
        htmlcontent = this.$refs.popup.outerHTML
      }
      return htmlcontent
    },

    docEvents: function () {
      this.$emit('dragstart')
      this.$emit('drag')
      this.$emit('dragend')
    }

  }

}
</script>
