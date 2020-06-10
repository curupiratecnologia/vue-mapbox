
<script>

/**
 * @typedef {Object} layerClasses
 * @property {string | number} value - value to compare
 * @property {{}} property - property name do lookup
 * @property {string} fill-color - fill color of object with this propertie
 */

import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
import findVNodeChildren from '../utils/findVNodeChildren'
import findIndex from 'lodash/findIndex'
import VmPopup from './VmPopup'

import has from 'lodash/has'
import get from 'lodash/get'
import set from 'lodash/set'
import filter from 'lodash/filter'
import kebabCase from 'lodash/kebabCase'

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

  inject: { getMap: 'getMap', mapboxgl: 'mapboxgl', MapboxVueInstance: 'MapboxVueInstance', getSource: { from: 'getSource', default: null } },

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
      default: () => ({}),
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
       (Dynamic) If Number, is order of the layer. Can set the Name of the layer to put after
    */
    zIndex: {
      type: [Number, String]
    },

    /**
      * (Dynamic) Classes are short path to set paint and properties colors
      * @values click, hover
    */
    classes: {
      type: [Array]
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
    },

    'background-color': { paint: true, layerType: 'background' },

    'background-opacity': { paint: true, layerType: 'background' },

    'background-pattern': { paint: true, layerType: 'background' },

    'fill-antialias': { paint: true, layerType: 'fill' },

    'fill-color': { paint: true, layerType: 'fill' },

    'fill-opacity': { paint: true, layerType: 'fill' },

    'fill-outline-color': { paint: true, layerType: 'fill' },

    'fill-pattern': { paint: true, layerType: 'fill' },

    'fill-sort-key': { layout: true, layerType: 'fill' },

    'fill-translate': { paint: true, layerType: 'fill' },

    'fill-translate-anchor': { paint: true, layerType: 'fill' },

    'line-blur': { paint: true, layerType: 'line' },

    'line-cap': { layout: true, layerType: 'line' },

    'line-color': { paint: true, layerType: 'line' },

    'line-dasharray': { paint: true, layerType: 'line' },

    'line-gap-width': { paint: true, layerType: 'line' },

    'line-gradient': { paint: true, layerType: 'line' },

    'line-join': { layout: true, layerType: 'line' },

    'line-miter-limit': { layout: true, layerType: 'line' },

    'line-offset': { paint: true, layerType: 'line' },

    'line-opacity': { paint: true, layerType: 'line' },

    'line-pattern': { paint: true, layerType: 'line' },

    'line-round-limit': { layout: true, layerType: 'line' },

    'line-sort-key': { layout: true, layerType: 'line' },

    'line-translate': { paint: true, layerType: 'line' },

    'line-translate-anchor': { paint: true, layerType: 'line' },

    'line-width': { paint: true, layerType: 'line' },

    'icon-allow-overlap': { layout: true, layerType: 'symbol' },

    'icon-anchor': { layout: true, layerType: 'symbol' },

    'icon-color': { paint: true, layerType: 'symbol' },

    'icon-halo-blur': { paint: true, layerType: 'symbol' },

    'icon-halo-color': { paint: true, layerType: 'symbol' },

    'icon-halo-width': { paint: true, layerType: 'symbol' },

    'icon-ignore-placement': { layout: true, layerType: 'symbol' },

    'icon-image': { layout: true, layerType: 'symbol' },

    'icon-keep-upright': { layout: true, layerType: 'symbol' },

    'icon-offset': { layout: true, layerType: 'symbol' },

    'icon-opacity': { paint: true, layerType: 'symbol' },

    'icon-optional': { layout: true, layerType: 'symbol' },

    'icon-padding': { layout: true, layerType: 'symbol' },

    'icon-pitch-alignment': { layout: true, layerType: 'symbol' },

    'icon-rotate': { layout: true, layerType: 'symbol' },

    'icon-rotation-alignment': { layout: true, layerType: 'symbol' },

    'icon-size': { layout: true, layerType: 'symbol' },

    'icon-text-fit': { layout: true, layerType: 'symbol' },

    'icon-text-fit-padding': { layout: true, layerType: 'symbol' },

    'icon-translate': { paint: true, layerType: 'symbol' },

    'icon-translate-anchor': { paint: true, layerType: 'symbol' },

    'symbol-avoid-edges': { layout: true, layerType: 'symbol' },

    'symbol-placement': { layout: true, layerType: 'symbol' },

    'symbol-sort-key': { layout: true, layerType: 'symbol' },

    'symbol-spacing': { layout: true, layerType: 'symbol' },

    'symbol-z-order': { layout: true, layerType: 'symbol' },

    'text-allow-overlap': { layout: true, layerType: 'symbol' },

    'text-anchor': { layout: true, layerType: 'symbol' },

    'text-color': { paint: true, layerType: 'symbol' },

    'text-field': { layout: true, layerType: 'symbol' },

    'text-font': { layout: true, layerType: 'symbol' },

    'text-halo-blur': { paint: true, layerType: 'symbol' },

    'text-halo-color': { paint: true, layerType: 'symbol' },

    'text-halo-width': { paint: true, layerType: 'symbol' },

    'text-ignore-placement': { layout: true, layerType: 'symbol' },

    'text-justify': { layout: true, layerType: 'symbol' },

    'text-keep-upright': { layout: true, layerType: 'symbol' },

    'text-letter-spacing': { layout: true, layerType: 'symbol' },

    'text-line-height': { layout: true, layerType: 'symbol' },

    'text-max-angle': { layout: true, layerType: 'symbol' },

    'text-max-width': { layout: true, layerType: 'symbol' },

    'text-offset': { layout: true, layerType: 'symbol' },

    'text-opacity': { paint: true, layerType: 'symbol' },

    'text-optional': { layout: true, layerType: 'symbol' },

    'text-padding': { layout: true, layerType: 'symbol' },

    'text-pitch-alignment': { layout: true, layerType: 'symbol' },

    'text-radial-offset': { layout: true, layerType: 'symbol' },

    'text-rotate': { layout: true, layerType: 'symbol' },

    'text-rotation-alignment': { layout: true, layerType: 'symbol' },

    'text-size': { layout: true, layerType: 'symbol' },

    'text-transform': { layout: true, layerType: 'symbol' },

    'text-translate': { paint: true, layerType: 'symbol' },

    'text-translate-anchor': { paint: true, layerType: 'symbol' },

    'text-variable-anchor': { layout: true, layerType: 'symbol' },

    'text-writing-mode': { layout: true, layerType: 'symbol' },

    'raster-brightness-max': { paint: true, layerType: 'raster' },

    'raster-brightness-min': { paint: true, layerType: 'raster' },

    'raster-contrast': { paint: true, layerType: 'raster' },

    'raster-fade-duration': { paint: true, layerType: 'raster' },

    'raster-hue-rotate': { paint: true, layerType: 'raster' },

    'raster-opacity': { paint: true, layerType: 'raster' },

    'raster-resampling': { paint: true, layerType: 'raster' },

    'raster-saturation': { paint: true, layerType: 'raster' },

    'circle-blur': { paint: true, layerType: 'circle' },

    'circle-color': { paint: true, layerType: 'circle' },

    'circle-opacity': { paint: true, layerType: 'circle' },

    'circle-pitch-alignment': { paint: true, layerType: 'circle' },

    'circle-pitch-scale': { paint: true, layerType: 'circle' },

    'circle-radius': { paint: true, layerType: 'circle' },

    'circle-sort-key': { layout: true, layerType: 'circle' },

    'circle-stroke-color': { paint: true, layerType: 'circle' },

    'circle-stroke-opacity': { paint: true, layerType: 'circle' },

    'circle-stroke-width': { paint: true, layerType: 'circle' },

    'circle-translate': { paint: true, layerType: 'circle' },

    'circle-translate-anchor': { paint: true, layerType: 'circle' },

    'fill-extrusion-base': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-color': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-height': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-opacity': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-pattern': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-translate': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-translate-anchor': { paint: true, layerType: 'fill-extrusion' },

    'fill-extrusion-vertical-gradient': { paint: true, layerType: 'fill-extrusion' },

    'heatmap-color': { paint: true, layerType: 'heatmap' },

    'heatmap-intensity': { paint: true, layerType: 'heatmap' },

    'heatmap-opacity': { paint: true, layerType: 'heatmap' },

    'heatmap-radius': { paint: true, layerType: 'heatmap' },

    'heatmap-weight': { paint: true, layerType: 'heatmap' },

    'hillshade-accent-color': { paint: true, layerType: 'hillshade' },

    'hillshade-exaggeration': { paint: true, layerType: 'hillshade' },

    'hillshade-highlight-color': { paint: true, layerType: 'hillshade' },

    'hillshade-illumination-anchor': { paint: true, layerType: 'hillshade' },

    'hillshade-illumination-direction': { paint: true, layerType: 'hillshade' },

    'hillshade-shadow-color': { paint: true, layerType: 'hillshade' },

    visibility: { layout: true, layerType: 'all' }

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

  computed: {

    myPaint: function () {
      const paint = this.mountPaintLayoutObject('paint')
      // const paintHover = this.mountPaintLayoutObject('paint-hover')
      // const paintClick = this.mountPaintLayoutObject('paint-click')
      if (this.hasFeatureHover || this.hasFeatureClick) {
        return this.getFinalFeatureStateForPaintOrLayout(paint, this.paintHover, this.paintClick)
      }
      return paint
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

  watch: {

    minzoom: function (val) {
      this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
    },

    maxzom: function (val) {
      this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
    },
    zIndex: function (val) {
      console.log(val)
      this.$nextTick(() => this.MapboxVueInstance.updateLayerOrder())
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

    myLayout: function (newLayout, oldLayout) {
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
    this.options = options

    // check if source exist,
    if (typeof this.options.source === 'string') {
      if (this.getMap().getSource(this.options.source)) {
        this.addLayer()
      } else {
        // add layer when a source with name is added
        const func = (e) => {
          console.log(e)
          if (e.dataType == 'source' && e.sourceId === this.options.source) {
            this.addLayer()
            this.getMap().off('sourcedata', func)
          }
        }
        this.getMap().on('sourcedata', func)
      }
    } else {
      this.addLayer()
    }

    // if not, wait it to loaded an show it
  },

  mounted: async function () {
    await this.$nextTick()

    this.setupLayerFeaturesEvents()
  },

  destroyed () {
    if (this.layerId) {
      console.log('destroying ' + this.layerId)
      this.MapboxVueInstance.removeLayer(this.layerId)
      // check if the source of layer is a Object/ownSource,and remove it too
      if (typeof this.source === 'object') {
        this.getMap().removeSource(this.layerId)
      }
    }
  },

  methods: {

    addLayer: function () {
      const mylayer = this.MapboxVueInstance.addLayer(this.name, this.type, { ...this.options, paint: this.myPaint, layout: this.myLayout })
      this.layerId = mylayer
      // get source add after add layer, because of case where the source especification is set in props as option, withou an id
      this.sourceId = this.getMap().getLayer(mylayer).source

      // this.MapboxVueInstance.updateLayerOrder()
      // bind listners set in component to mapbox events
      this.MapboxVueInstance.setupEvents(this.$listeners, this.getMap(), nativeEventsTypes, this.layerId, this.created_at, this.zIndex)
    },

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
      if (this.hasFeatureHover || this.hasFeatureClick) {
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

        if (this.hasFeatureHover) {
          this.hoverFeatures = e.features
        }
      }
    },

    featureMouseLeaveEvent: function (e) {
      if (this.hasFeatureClick) { // if have click events, change cursor
        this.getMap().getCanvas().style.removeProperty('cursor')
      }
      if (this.popupOpen) return false
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

    /**
    Mount the fina paint/layout object utilizing the paint/layout properties,
    classes etc

    //TODO - number betweww
           -  test fill-opacity
    @params {string} kind - one of paint, // TODO paint-hover, paint-click, layout, layout-hover, layout-click
    */
    mountPaintLayoutObject: function (kind) {
      const finalPaintLayout = this.$props[kind]

      const propertiesForKind = []
      // get all the props for the paint/layout
      // properties for this type of layer
      Object.entries(this.$options.props).forEach((prop) => {
        const key = prop[0]
        const value = prop[1]
        if (get(value, kind) && get(value, 'layerType') === this.type) {
          propertiesForKind.push(key)
        }
      })

      propertiesForKind.forEach((prop) => {
        const paintKey = prop
        const paintKeyKebab = kebabCase(paintKey)
        let paintValue

        if (get(this, `$props[${paintKey}]`)) {
          paintValue = this.$props[paintKey]
        } else if (get(this, `$attrs[${paintKey}]`)) {
          paintValue = this.$attrs[paintKey]
        }

        // check if we have this propertie set in classes props
        const propertiesInClasses = filter(this.classes, elm => has(elm, paintKeyKebab))
        if (propertiesInClasses.length > 0) {
          const expression = []
          /// check type. string we will use mach, number we will use betweem
          // if (typeof get(propertiesInClasses[0], 'value') === 'string') {
            const property = propertiesInClasses[0].property
            expression.push('match')
            expression.push(['get', property])
            propertiesInClasses.forEach(prop => {
              expression.push(prop.value)
              expression.push(get(prop, paintKeyKebab))
            })
            expression.push(paintValue)
            paintValue = expression
          }
        // }
        if (paintValue) {
          finalPaintLayout[paintKeyKebab] = paintValue
        }
      })

      console.log(finalPaintLayout)
      return finalPaintLayout
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

  },

  render (h) {
    const emptyElm = null // h('div')
    if (
      (this.hoverFeatures.length === 0 && this.selectedFeatures.length === 0) ||
      (!has(this.$scopedSlots, 'popupHover') &&
        !has(this.$scopedSlots, 'popupClick') &&
        !has(this.$slots, 'popupHover') &&
        !has(this.$slots, 'popupClick'))
    ) {
      return emptyElm
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
      return emptyElm
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
      return emptyElm
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
  }

}

</script>
