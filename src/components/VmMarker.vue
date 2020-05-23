
<script>

import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
import findVNodeChildren from '../utils/findVNodeChildren'
import findIndex from 'lodash/findIndex'
import VmPopup from './VmPopup'

import has from 'lodash/has'
import get from 'lodash/get'
import set from 'lodash/set'

const nativeEventsTypes = ['dragstart', 'drag', 'dragend']

// TODO - change mouse cursor to pointer if marker have popup
var template = `<template>

    <div style="display:none;">

      <div v-if="$slots.marker" ref="marker" @click="$emit('click',this)">
         <!-- @slot html of marker -->
        <slot name="marker"></slot>
      </div>
      
      <div v-if="$slots.popup" ref="popup">
        <!-- @slot html to show in popup -->
        <slot name="popup"></slot>
      </div>
      <div v-if="$slots.popupHover" ref="popup">
        <!-- @slot html to show in popup -->
        <slot name="popupHover"></slot>
      </div>
      <div v-if="$slots.popupClick" ref="popup">
        <!-- @slot html to show in popup -->
        <slot name="popupClick"></slot>
      </div>

      <slot></slot>
    </div>

</template>`

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
      type: [String, Number]
    },
    /**
      (Dynamic) min zoom of map tha will show the marker
    */
    maxZoom: {
      type: [String, Number]
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
    },

    /**
       * Metadata, that can be used in popup scoped slots
    */
    metadata: {
      type: Object
    }
  },

  data () {
    return {
      marker: null,
      popupOpen: null
    }
  },

  computed: {
    getPopupHover: function () {
      if (has(this.$scopedSlots, 'popupHover')) {
        return this.$scopedSlots.popupHover({ metadata: this.metadata }) // [0]
      } else if (has(this.$slots, 'popupHover')) {
        return this.$slots.popupHover
      }
      return false
    },
    getPopupClick: function () {
      const popupFind = findVNodeChildren(this.$slots.default, 'VmPopup')
      if (has(this.$scopedSlots, 'popupClick')) {
        return this.$scopedSlots.popupClick({ metadata: this.metadata }) // [0]
      } else if (has(this.$slots, 'popupClick')) {
        return this.$slots.popupClick
      } else if (popupFind) {
        return popupFind[0]
      } else if (this.popUpContent) {
        return this.popUpContent
      }

      return false
    }
  },

  created: function () {
    this.visible = false
    this.popup = null
    this.markerElement = null
    this.eventsFunction = {}
    this.hasPopHover = false
    this.hasPopClick = false

    if (this.minZoom || this.maxZoom) {
      this.getMap().on('zoom', this.markerVisibility)
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

      if (this.getPopupClick) {
           options.element.style.cursor='pointer'
      }

      this.marker = new this.mapboxgl.Marker(options).setLngLat(this.center)
      this.markerElement = this.marker.getElement()

      this.markerVisibility()
      this.MapboxVueInstance.setupEvents(this.$listeners, this.marker, nativeEventsTypes)
      this.setupPopupEvents()
      this.setupMarkerEvents()

      // if have a instance of popup, check iff is props is open, so we set
      if (get(this.getPopupClick, 'componentOptions.propsData.open') === true) {
        this.popupOpen = 'click'
      }
    },

    setupMarkerEvents: function () {
      if (!this.marker) return
      this.markerElement = this.marker.getElement()
      Object.entries(this.$listeners).forEach((item) => {
        let eventName = item[0]
        const func = item[1]
        let once = false
        let capture = false
        let passive = false
        const modifier = eventName.substr(0, 2).replace(/[^a-z]/, '')
        if (modifier === '~') {
          once = true
        }
        if (modifier === '!') {
          capture = true
        }
        if (modifier === '&') {
          passive = true
        }
        if (modifier === '~!') {
          once = true
          capture = true
        }
        eventName = eventName.replace(/^[^a-z]/, '')
        const eventFunc = func
        this.markerElement.addEventListener(eventName, (e) => eventFunc(e), { capture, once, passive })
      })
    },

    setupPopupEvents: function () {
      this.markerElement = this.marker.getElement()
      if (this.getPopupHover) {
        this.markerElement.addEventListener('mousemove', this.markerEventHover, { capture: true })
        this.markerElement.addEventListener('mouseleave', this.markerEventLeave, { capture: true })
      }
      if (this.getPopupClick) {
        this.markerElement.addEventListener('click', this.markerEventClick, { capture: true })
      }
    },

    markerEventHover: function (e) {
      e.stopPropagation()
      if (!this.popupOpen) {
        this.popupOpen = 'hover'
      }
    },
    markerEventLeave: function (e) {
      if (this.popupOpen === 'hover') {
        this.popupOpen = false
      }
    },
    markerEventClick: function (e) {
      e.stopPropagation()
      if (this.popupOpen === 'click') {
        this.popupOpen = false
      } else {
        this.popupOpen = 'click'
      }
    },

    markerVisibility: function () {
      // if (!this.minZoom && !this.maxZoom) return
      const minZoom = this.minZoom ? this.minZoom : 0
      const maxZoom = this.maxZoom ? this.maxZoom : 24
      const zoom = this.getMap().getZoom()

      if (zoom >= minZoom && zoom <= maxZoom && this.visible === false) {
        this.marker.addTo(this.getMap())
        this.visible = true
      } else if (this.visible === true && (zoom < minZoom || zoom > maxZoom)) {
        this.marker.remove()
        this.visible = false
      }
    },

    docEvents: function () {
      /**
      *  @property {object} _this the component instance
      *  @property {object} map the mapbox instance
      */
      this.$emit('dragstart')
      this.$emit('drag')
      this.$emit('dragend')
      this.$emit('click')
      this.$emit('mouseleave')
      this.$emit('mousemove')
      this.$emit('mouseover')
      this.$emit('**alldivmouseevents**')
    }

  },

  render (h) {
    const childrens = []
    let popup
    let popupKey
    let popupProps = {}
    let popupInstance

    if (this.popupOpen === 'click') {
      popupProps = {
        center: this.center,
        trackPointer: false,
        closeOnClick: true,
        closeButton: true,
        open: true
      }
      popup = this.getPopupClick
      popupKey = 'markerPopupClick'
    } else if (this.popupOpen === 'hover') {
      popupProps = {
        center: this.center,
        trackPointer: true,
        closeButton: false,
        closeOnClick: false,
        open: true
      }
      popup = this.getPopupHover
      popupKey = 'markerPopupHover'
    }

    if (popup) {
      // check if popup is the content type of popup, if not create one
      const popupFind = findVNodeChildren(popup, 'VmPopup')
      popupInstance = (popupFind) ? popupFind[0] : h(VmPopup, [popup])
      popupInstance.key = popupKey
      popupInstance.componentOptions.propsData = {
        ...popupProps,
        ...popupInstance.componentOptions.propsData
      }

      // if close popup, updade opemn props
      if (this.popupOpen === 'click') {
        const closeFunc = get(popupInstance, 'componentOptions.listeners.close')
        set(popupInstance.componentOptions, 'listeners.close', (e) => {
          this.popupOpen = false
          if (closeFunc) {
            closeFunc(e)
          }
        })
      }
    }

    if (this.$slots.marker) {
      childrens.push(h('div', { slot: 'marker', ref: 'marker' }, [this.$slots.marker]))
    }
    if (popupInstance) {
      childrens.push(popupInstance)
    }

    return h('div',
      {},
      [...childrens,
        ...this.$slots.default]
    )
  }

}
</script>
