<template>

    <div style="display:none;">

      <div v-if="$slots.marker" ref="marker" @click="$emit('click',this)">
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
// TODO - change mouse cursor to pointer if marker have popup

import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
const nativeEventsTypes = ['click', 'dragstart', 'drag', 'dragend']

export default {

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
      * (Dynamic) Center of Marker
      * @tags mapbox true
      */
    center: {
      type: Array,
      default: () => [0, 0],
      required: true

    },
    /**
      * (Dynamic) Anchor of the marker
      * @values center , top , bottom , left , right , top-left , top-right , bottom-left , and bottom-right
     */
    anchor: {
      type: String,
      default: 'bottom',
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
       (Dynamic) Color of the default marker, if default slot is not set (Dynamic)
    */
    color: {
      type: String,
      default: '#3FB1CE',
      mapbox: true
    },
    /**
      (Dynamic) Offset of market in pixels
    */
    offset: {
      type: Array,
      mapbox: true
    },
    /**
      (Dynamic) Offset of market in pixels
    */
    draggable: {
      type: Boolean,
      mapbox: true
    },
    /**
      (Dynamic) The rotation angle of the marker in degrees, relative to its respective rotationAlignment setting. A positive value will rotate the marker clockwise.
    */
    rotation: {
      type: Number,
      mapbox: true
    },
    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    minZoom: {
      type: Number
    },
    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    maxZoom: {
      type: Number
    },
    /**
      (Dynamic) map aligns the Marker to the plane of the map. viewport aligns the Marker to the plane of the viewport. auto automatically matches the value of rotationAlignment
      @values map, viewport, auto
    */
    pitchAlignment: {
      type: String,
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['map', 'viewport', 'auto'].indexOf(value) !== -1
      },
      mapbox: true
    },

    /**
      (Dynamic) map aligns the Marker 's rotation relative to the map, maintaining a bearing as the map rotates. viewport aligns the Marker 's rotation relative to the viewport, agnostic to map rotations. auto is equivalent to viewport .
      @values map, viewport, auto
    */
    rotationAlignment: {
      type: String,
      validator: function (value) {
        // O valor precisa corresponder a alguma dessas Strings
        return ['map', 'viewport', 'auto'].indexOf(value) !== -1
      },
      mapbox: true
    },
    /**
       * (Dynamic) The PopUp Content - If set via slot, this will be ignored
    */
    popUpContent: {
      type: String
    }
  },

  data () {
    return {
      marker: null,
      popup: null,
      ownPopup: false
    }
  },

  created: function () {
    this.visible = false
    if (this.minZoom || this.maxZoom) {
      this.getMap().on('zoom', this.markerVisible)
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
      if (this.marker) { this.setupMarker() }
    },
    offset: function (val) {
      if (this.marker) { this.marker.setOffset(val) }
    },
    rotation: function (val) {
      if (this.marker) { this.marker.setRotation(val) }
    },
    rotationAlignment: function (val) {
      if (this.marker) { this.marker.setRotationAlignment(val) }
    },
    pitchAlignment: function (val) {
      if (this.marker) { this.marker.setPitchAlignment(val) }
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
      const options = getOnlyMapboxProps(this)

      if (this.marker) this.marker.remove()

      if (this.$slots.marker) {
        options.element = this.$refs.marker
      }

      this.marker = new this.mapboxgl.Marker(options)
        .setLngLat(this.center)

      this.markerVisible()

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

    markerVisible: function () {
      // if (!this.minZoom && !this.maxZoom) return
      const minZoom = this.minZoom ? this.minZoom : 0
      const maxZoom = this.maxZoom ? this.maxZoom : 24
      const zoom = this.getMap().getZoom()

      if (zoom >= minZoom && zoom <= maxZoom && this.visible === false) {
        this.marker.addTo(this.getMap())
        this.visible = true
      } else if (this.visible === true && (zoom < minZoom || zoom > maxZoom) ) {
        this.marker.remove()
        this.visible = false
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
      *  @property {object} map the mapbox instance
      */
      this.$emit('dragstart')
      this.$emit('drag')
      this.$emit('dragend')
    }

  }

}
</script>
