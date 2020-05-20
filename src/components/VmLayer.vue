
<script>
import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
import findVNodeChildren from '../utils/findVNodeChildren'
import findIndex from 'lodash/findIndex'
import VmPopup from './VmPopup'

import has from 'lodash/has'
import get from 'lodash/get'
import set from 'lodash/set'

const nativeEventsTypes = [
  'mousedown',
  'mouseup',
  'mouseover',
  'mouseout',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'click',
  'dblclick',
  'contextmenu',
  'touchstart',
  'touchend',
  'touchcancel'
]

export default {

  name: 'VmLayer',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance', 'getSource'],

  props: {
    /**
       **ID/Name of the Layer.** If blank or not unique, will auto generate one for you
      */
    name: {
      type: String,
      default: ''
    },
    /**
       Type of the Layer.
       @values "fill", "line", "symbol", "circle", "heatmap", "fill-extrusion", "raster", "hillshade", "background".
      */
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return ['fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', 'background'].indexOf(value) !== -1
      }
    },
    /**
       The data source for the layer. If blank will find a parent Source component.  Reference a source that has already been defined using the source's unique id. Reference a new source using a source object (as defined in the Mapbox Style Specification ) directly.
      */
    source: {
      type: [String, Object],
      mapbox: true
    },
    /**
       The name of the source layer within the specified layer.source to use for this style layer. This is only applicable for vector tile sources and is required when layer.source is of the type vector .
    */
    sourceLayer: {
      type: String,
      mapbox: true,
      name: 'source-layer'
    },
    /**
       (Dynamic) Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance.
      */
    filter: {
      type: Array,
      mapbox: true
    },
    /**
       (Dynamic) Paint properties for the layer. Available paint properties vary by layer.type . A full list of paint properties for each layer type is available in the Mapbox Style Specification . If no paint properties are specified, default values will be used.
      */
    paint: {
      type: Object,
      mapbox: true
    },
    /**
       (Dynamic) Layout properties for the layer. Available layout properties vary by layer.type . A full list of layout properties for each layer type is available in the Mapbox Style Specification . If no layout properties are specified, default values will be used.
      */
    layout: {
      type: Object,
      mapbox: true
    },
    /**
       (Dynamic)  Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered).
    */
    maxzoom: {
      type: Number,
      default: 24,
      mapbox: true
    },
    /**
       (Dynamic) The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. The value can be any number between 0 and 24 (inclusive). If no minzoom is provided, the layer will be visible at all zoom levels for which there are tiles available.
    */
    minzoom: {
      type: Number,
      default: 0,
      mapbox: true
    },
    /**
      Arbitrary properties useful to track with the layer, but do not influence rendering.
    */
    metadata: {
      type: Object,
      mapbox: true
    },
    /**
       (Dynamic) Paint of the feature in witch the mouse are over
    */
    paintHover: {
      type: Object
    },
    /**
       (Dynamic) Paint of the feature in witch we click
    */
    paintClick: {
      type: Object
    },
    /**
       (Dynamic) Layout of the feature in witch we hover
    */
    layoutHover: {
      type: Object
    },
    /**
       (Dynamic) Layout of the feature in witch we click
    */
    layoutClick: {
      type: Object
    },
    /**
      * (Dynamic) Any child popup will be show on feature click or hover
      * @values click, hover
    */

    /**
    * Set with multiple feature selection is possible, if pressing any control keys or automatic with set to true
    *  If click outside the layer, or click over a selected feature, it will desselected

    // TODO Dinamic
    @values 'shift', 'control', 'alt', true, false
    */
    multipleFeatureSelectionOn: {
      type: [String, Boolean],
      default: false,
      validator: function (value) {
        return ['shift', 'control', 'alt', true, false].indexOf(value) !== -1
      }
    }

  },

  data () {
    return {
      layerId: null,
      sourceId: null,
      selectedFeatures: [],
      hoverFeatures: [],
      hasChildPopup: null,
      lastClick: null,
      hasFeatureHover: false,
      hasFeatureClick: false
    }
  },

  watch: {

    minzoom: function (val) {
      this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
    },

    maxzom: function (val) {
      this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
    },

    filter: function (val) {
      this.getMap().setFilter(this.layerId, val)
    },

    myPaint: function (newPaint, oldPaint) {
      Object.entries(newPaint).forEach((item) => {
        const key = item[0]
        const value = item[1]
        if (JSON.stringify(value) !== JSON.stringify(oldPaint[key])) {
          this.getMap().setPaintProperty(this.layerId, key, value)
        }
      })
    },

    layout: function (newLayout, oldLayout) {
      Object.entries(newLayout).forEach((item) => {
        const key = item[0]
        const value = item[1]
        if (JSON.stringify(value) !== JSON.stringify(oldLayout[key])) {
          this.getMap().setLayoutProperty(this.layerId, key, value)
        }
      })
    },

    selectedFeatures: function (val, oldVal) {
      const map = this.getMap()
      oldVal.forEach(feature => {
        map.setFeatureState(
          { source: this.sourceId, sourceLayer: this.sourceLayer, id: feature.id },
          { click: false }
        )
      })

      val.forEach(feature => {
        map.setFeatureState(
          { source: this.sourceId, sourceLayer: this.sourceLayer, id: feature.id },
          { click: true }
        )
      })
      /**
       * Triggers when features selectes clicking on it
       *
       * @property {array} features array with all features selected
       */
      this.$emit('featureselect', val)
    },

    hoverFeatures: function (val, oldVal) {
      const map = this.getMap()
      if (oldVal.length > 0) {
        oldVal.forEach(feature => {
          map.setFeatureState(
            { source: this.sourceId, sourceLayer: this.sourceLayer, id: feature.id },
            { hover: false }
          )
        })
      }

      val.forEach(feature => {
        map.setFeatureState(
          { source: this.sourceId, sourceLayer: this.sourceLayer, id: feature.id },
          { hover: true }
        )
      })
      /**
       * Triggers when features ar hover
       *
       * @property {array} features array with all features selected
       */
      this.$emit('featurehover', val)
    }

  },

  created: function () {
    this.popupOpen = false
    const options = getOnlyMapboxProps(this)
    if (!options.source) {
      const source = this.getSource()
      if (source && source.id) {
        options.source = source.id
      }
    }
    const mylayer = this.MapboxVueInstance.addLayer(this.name, this.type, { ...options, paint: this.myPaint })
    // get source add after add layer, because of case where the source especification is set in props as option, withou an id
    this.sourceId = this.getMap().getLayer(mylayer).source
    this.layerId = mylayer
    // bind listners set in component to mapbox events
    this.MapboxVueInstance.setupEvents(this.$listeners, this.getMap(), nativeEventsTypes, this.layerId)
  },

  mounted: async function () {
    await this.$nextTick()
    this.setupLayerFeaturesEvents()
  },

  computed: {
    myPaint: function () {
      if (this.hasFeatureHover || this.hasFeatureClick) {
        return this.getFinalFeatureStateForPaintOrLayout(this.paint, this.paintHover, this.paintClick)
      }
      return this.paint
    },

    myLayout: function () {
      if (this.hasFeatureHover || this.hasFeatureClick) {
        return this.getFinalFeatureStateForPaintOrLayout(this.layout, this.layoutHover, this.layoutClick)
      }
      return this.layout
    },

    layerInstance: function () {
      return this.getMap().getLayer(this.id)
    }

  },

  beforeDestroy () {
    if (this.layerId) {
      this.MapboxVueInstance.removeLayer(this.layerId)
      this.layerId = null
    }
  },

  render (h) {
    if (
      (this.hoverFeatures.length === 0 && this.selectedFeatures.length === 0) ||
      (!has(this.$scopedSlots, 'popupHover') &&
        !has(this.$scopedSlots, 'popupClick') &&
        !has(this.$slots, 'popupHover') &&
        !has(this.$slots, 'popupClick'))
    ) {
      return null
    }
    // create the popupElement
    let popupOver
    let popupClick
    let popup
    let props = {}
    let popupKey
    // check for popupHover Slot
    if (has(this.$scopedSlots, 'popupHover')) {
      popupOver = this.$scopedSlots.popupHover({ features: this.hoverFeatures }) // [0]
    } else if (has(this.$slots, 'popupHover')) {
      popupOver = this.$slots.popupHover
    }
    // check for popupClick Slot
    if (has(this.$scopedSlots, 'popupClick')) {
      popupClick = this.$scopedSlots.popupClick({ features: this.selectedFeatures }) // [0]
    } else if (has(this.$slots, 'popupClick')) {
      popupClick = this.$slots.popupClick
    }

    if (!popupOver && !popupClick) {
      return null
    }

    if (this.lastClick && this.selectedFeatures.length > 0 && popupClick) {
      popup = popupClick
      popupKey = 'layerPopupClick'
      props = {
        center: [this.lastClick.lngLat.lng, this.lastClick.lngLat.lat],
        trackPointer: false,
        closeOnClick: true,
        closeButton: true,
        open: true
      }
    } else if (this.hoverFeatures.length > 0 && popupOver) {
      popup = popupOver
      popupKey = 'layerPopupOver'
      props = {
        trackPointer: true,
        closeButton: false,
        closeOnClick: false,
        open: true
      }
    } else {
      return null
    }

    let popupInstance
    // check if popup is the content type of popup, if not create one
    const popupFind = findVNodeChildren(popup, 'VmPopup')
    if (popupFind) {
      popupInstance = popupFind[0]
    } else {
      popupInstance = h(VmPopup, [popup])
    }

    // setup popupinstance data
    popupInstance.componentOptions.propsData = {
      ...popupInstance.componentOptions.propsData,
      ...props
    }
    if (popupKey === 'layerPopupClick') {
      this.popupOpen = true
      // when click in close of popup, deselect any selected layers
      const closeFunc = get(popupInstance, 'componentOptions.listeners.close')
      set(popupInstance.componentOptions, 'listeners.close', (e) => {
        this.popupOpen = false
        this.selectedFeatures = []
        this.hoverFeatures = []
        if (closeFunc) {
          closeFunc(e)
        }
      })
    }
    popupInstance.key = popupKey + this.layerId

    return h(
      'div',
      [popupInstance]
    )
  },

  methods: {

    setupLayerFeaturesEvents: function () {
      if (this.paintHover || this.layoutHover || has(this.$scopedSlots, 'popupHover') || has(this.$slots, 'popupHover')) {
        this.hasFeatureHover = true
      } else {
        this.hasFeatureHover = false
      }
      if (this.paintClick || this.layoutClick || has(this.$scopedSlots, 'popupClick') || has(this.$slots, 'popupClick')) {
        this.hasFeatureClick = true
      } else {
        this.hasFeatureClick = false
      }
      const map = this.getMap()
      if (this.hasFeatureHover) {
        map.off('mousemove', this.layerId, this.featureMouseMoveEvent)
        map.off('mouseleave', this.layerId, this.featureMouseLeaveEvent)
        map.on('mousemove', this.layerId, this.featureMouseMoveEvent)
        map.on('mouseleave', this.layerId, this.featureMouseLeaveEvent)
      }
      if (this.hasFeatureClick) {
        map.off('click', this.layerId, this.featureMouseClickEvent)
        map.on('click', this.layerId, this.featureMouseClickEvent)
        // when click out of layer, deslecet all
        map.off('click', this.layerMouseClickOutEvent)
        map.on('click', this.layerMouseClickOutEvent)
      }
    },

    featureMouseMoveEvent: function (e) {
      // if click popup is open, i stop hover events
      if (this.popupOpen) return false

      // check if im the top most layer
      // TODO - create event in mapbox instance to detect .capture.stop propagations etc, and implement this logic in the events
      const features = this.getMap().queryRenderedFeatures(e.point)
      if (get(features, '[0].layer.id') !== this.layerId) {
        this.featureMouseLeaveEvent(e)
        return false
      }

      if (e.features.length > 0) {
        // if hovering the same feature, just return
        if (this.hoverFeatures.map(f => f.id).join('') === e.features.map(f => f.id).join('')) {
          return false
        }
        if (this.hasFeatureClick) { // if have click events, change cursor
          this.getMap().getCanvas().style.cursor = 'pointer'
        }
        this.hoverFeatures = e.features
      }
    },

    featureMouseLeaveEvent: function (e) {
      if (this.popupOpen) return false
      if (this.hasFeatureClick) { // if have click events, change cursor
        this.getMap().getCanvas().style.cursor = 'initial'
      }
      this.hoverFeatures = []
    },

    featureMouseClickEvent: function (e) {
      const features = this.getMap().queryRenderedFeatures(e.point)

      // if clicked in another top most layer, is like clicking outside this
      if (get(features, '[0].layer.id') !== this.layerId) {
        this.selectedFeatures = []
        return
      }
      this.lastClick = e
      var featuresSelected = [...this.selectedFeatures]
      let featuresToAdd = [] // [...this.selectedFeatures]
      if (e.features.length > 0) {
        e.features.forEach(feature => {
          const selectedFeatureIndex = findIndex(this.selectedFeatures, { id: feature.id })
          if (selectedFeatureIndex > -1) { // if clicking in a alread selected feature
            featuresSelected.splice(selectedFeatureIndex, 1)
          } else {
            featuresToAdd.push(feature)
          }
        })
      }
      // check if multiple selection
      let multiple = false
      if (this.multipleFeatureSelectionOn === true) {
        multiple = true
      } else if (typeof this.multipleFeatureSelectionOn === 'string') {
        if (e.originalEvent[this.multipleFeatureSelectionOn + 'Key'] === true) {
          multiple = true
        }
        // for mac
        if (this.multipleFeatureSelectionOn === 'alt' && e.originalEvent.metaKey === true) {
          multiple = true
        }
      }
      if (multiple) {
        featuresToAdd = featuresToAdd.concat(featuresSelected)
      }
      this.selectedFeatures = featuresToAdd
    },

    layerMouseClickOutEvent: function (e) {
      const map = this.getMap()
      if (this.layerId === null) return
      const features = map.queryRenderedFeatures(e.point, { layers: [this.layerId] })
      if (features.length === 0) {
        this.selectedFeatures = []
      }
    },

    /**
    * calculate the final paint o layout properties utiliing creating feature state 'hover' and 'click'
    */
    getFinalFeatureStateForPaintOrLayout: function (normal, hover, click) {
      const result = { ...normal }
      if (this.hasFeatureHover || this.hasFeatureClick || this.hasChildPopup) {
        Object.entries(result).forEach((item) => {
          const key = item[0]
          const value = item[1]
          let pp = value
          if (hover && hover[key]) {
            pp = ['case', ['boolean', ['feature-state', 'hover'], false], hover[key], value]
          }
          if (click && click[key]) {
            pp = ['case', ['boolean', ['feature-state', 'click'], false], click[key], pp]
          }
          result[key] = pp
        })
      }
      return result
    },

    docEvents: function () {
      this.$emit('mousedown')
      this.$emit('mouseup')
      this.$emit('mouseover')
      this.$emit('mouseout')
      this.$emit('mousemove')
      this.$emit('mouseenter')
      this.$emit('mouseleave')
      this.$emit('click')
      this.$emit('dblclick')
      this.$emit('contextmenu')
      this.$emit('touchstart')
      this.$emit('touchend')
      this.$emit('touchcancel')
    }

  }

}

</script>
