
<script>

// TODO - refatorar logica. confuso demais em casos onde adiciono ou removo v-slots/chilcher no marker
// Exemplo
//     <vm-marker :center="[-45,-15]">
//                    <template v-if="show" v-slot:popupClick>
//                        <VmPopup
//                        color="red"
//                        >
//                        <ul>
//                            <li v-for='tema in [1,2,3,4]'>
//                               o tema é o tema - {{tema}}
//                            </li>
//                        </ul>
//                        </VmPopup>
//                    </template>
//              </vm-marker>
//

import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
import findVNodeChildren from '../utils/findVNodeChildren'
import VmPopup from './VmPopup'
import has from 'lodash/has'
import get from 'lodash/get'
import set from 'lodash/set'

const nativeEventsTypes = ['dragstart', 'drag', 'dragend']

export default {

  /**
   * The only true button.
   * @description o Marker do asd fasd fuasd fausdf sdai
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
      },
      mapbox: true
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
      popupOpen: null,
      visible: false
    }
  },

  computed: {

  },

  created: function () {
    console.log('marker created')
    this.popup = null
    this.markerElement = null
    this.eventsFunction = {}
    this.hasPopHover = false
    this.hasPopClick = false
    this.closeTimeout = null

    if (this.minZoom || this.maxZoom) {
      this.getMap().on('zoom', this.markerVisibility)
    }
  },

  mounted () {
    console.log('marker mounted')
    this.$nextTick(() => this.createMarker())
  },

  async updated () {
    // console.log('marker updated')
    // await this.$nextTick()
    // this.setupMarker()
    // this.$nextTick(() => this.setupMarker())
  },

  watch: {

    visible: function (val, oldval) {
      if (val === false && oldval === true && this.popupOpen === 'hover') {
        this.popupOpen = false
      }
    },
    center: function (val) {
      if (this.marker) { this.marker.setLngLat(val) }
    },
    draggable: function (val) {
      if (this.marker) { this.marker.setDraggable(val) }
    },
    color: function (val) {
      if (this.marker) { this.setupMarker() }
    },
    anchor: function (val) {
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

    createMarker: function () {
      console.log('setupMarker')
      const options = getOnlyMapboxProps(this)
      if (this.marker) this.marker.remove()

      if (this.$slots.marker) {
        options.element = this.$refs.marker
      }
      this.marker = new this.mapboxgl.Marker(options).setLngLat(this.center)

      this.MapboxVueInstance.setupEvents(this.$listeners, this.marker, nativeEventsTypes)
      this.setupMarkerEvents()

      this.$nextTick(() => this.setupMarker())
    },

    setupMarker: function () {
      this.markerElement = this.marker.getElement()

      this.markerVisibility()

      this.setupPopupEvents()

      // if have a instance of popup, check iff is props is open, so we set
      if (get(this.getPopupClick(), 'componentOptions.propsData.open') === true) {
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
      if (this.hasPopupHover()) {
        this.markerElement.addEventListener('mousemove', this.markerEventHover, { capture: true })
        this.markerElement.addEventListener('mouseleave', this.markerEventLeave, { capture: false })
      }
      if (this.hasPopupClick()) {
        this.markerElement.addEventListener('click', this.markerEventClick, { capture: true })
      }
    },

    markerEventHover: function (e) {
      e.stopPropagation()

      clearTimeout(this.closeTimeout)
      this.closeTimeout = null

      if (!this.popupOpen) {
        this.popupOpen = 'hover'
      }
    },
    markerEventLeave: function (e) {
      if (this.popupOpen === 'hover') {
        this.closeTimeout = setTimeout(() => { this.popupOpen = false }, 100)
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
    },

    hasPopupHover: function () {
      if (has(this.$scopedSlots, 'popupHover') || has(this.$slots, 'popupHover')) {
        return true
      }
      return false
    },

    hasPopupClick: function () {
      const popupFind = findVNodeChildren(this.$slots.default, 'VmPopup')
      if (has(this.$scopedSlots, 'popupClick') || has(this.$slots, 'popupClick') || popupFind) {
        return true
      }
      return false
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
    console.log('marker render')
    const childrens = []
    let popup
    let popupKey
    let popupProps = {}
    let popupInstance

    if (this.marker) {
      if (this.hasPopupClick()) {
        this.marker.getElement().style.cursor = 'pointer'
      } else {
        this.marker.getElement().style.cursor = 'hand'
      }
    }

    if (this.popupOpen === 'click') {
      popupProps = {
        center: this.center,
        trackPointer: false,
        closeOnClick: true,
        closeButton: true,
        open: true
      }
      popup = this.getPopupClick()
      popupKey = 'markerPopupClick'
    } else if (this.popupOpen === 'hover') {
      popupProps = {
        center: this.center,
        trackPointer: false,
        closeButton: false,
        closeOnClick: false,
        open: true
      }
      popup = this.getPopupHover()
      popupKey = 'markerPopupHover'
    }

    if (popup) {
      // check if popup is the content type of popup, if not create one
      const popupFind = findVNodeChildren(popup, 'VmPopup')
      popupInstance = (popupFind) ? popupFind[0] : h(VmPopup, [popup])

      // TODO - verificar pq quando recebe o vnode e quando recebe a instancia.
      // as vezes consigo reutilizar a instancia
      if (popupInstance && popupInstance.$vnode) {
        popupInstance = popupInstance.$vnode
      }
      popupInstance.key = popupKey

      // set default offset of popup
      const markerHeight = this.markerElement.getBoundingClientRect().height
      let popupYOffset
      if (this.anchor.indexOf('bottom') > -1) {
        popupYOffset = markerHeight + 15
      } else if (this.anchor === 'center') {
        popupYOffset = (markerHeight / 2)
      } else if (this.anchor.indexOf('top') > -1) {
        popupYOffset = 4
      }
      popupProps.offset = [0, -(popupYOffset)]

      popupInstance.componentOptions.propsData = {
        ...popupProps,
        ...popupInstance.componentOptions.propsData
      }

      // if close popup, updade opemn props
      if (this.popupOpen === 'click') {
        const closeFunc = get(popupInstance, 'componentOptions.listeners.close')
        set(popupInstance.componentOptions, 'listeners.close', (e) => {
          // just call close function if popup is close by user, not by min or max zoom removing it
          if (this.visible === true) {
            this.popupOpen = false
            if (closeFunc) {
              closeFunc(e)
            }
          }
        })
      }
    }

    if (this.$slots.marker) {
      childrens.push(h('div', { slot: 'marker', ref: 'marker' }, [this.$slots.marker]))
    }
    if (popupInstance && this.visible) {
      childrens.push(popupInstance)
    }

    // return null

    return h('div',
      {},
      [...childrens]
    )

    // just for documentatio
    /**
    @slot use to define a custom marker
    */
    const m = this.$slots.marker
    /**
    @slot popup to show when hover a marker. Can be used with popupClick too.
      with Scoped slot receives a metadata properties
    */
    const y = this.$slots.popupHover
    /**
    @slot popup to show when click a marker. Can be used with popupClick too.
      with Scoped slot receives a metadata properties
    */
    const z = this.$slots.popupClick
  }

}
</script>
