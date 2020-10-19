
<script>

/**
 * @typedef {Object} layerClasses
 * @property {string | number} value - value to compare
 * @property {{}} property - property name do lookup
 * @property {string} fill-color - fill color of object with this propertie
 */

import getOnlyMapboxProps from '../utils/getOnlyMapboxProps'
import findVNodeChildren from '../utils/findVNodeChildren'
import pickBy from 'lodash/pickBy'
import VmPopup from './VmPopup'

import has from 'lodash/has'
import get from 'lodash/get'
import set from 'lodash/set'
import filter from 'lodash/filter'
import findIndex from 'lodash/findIndex'
import kebabCase from 'lodash/kebabCase'
import camelCase from 'lodash/camelCase'
import startCase from 'lodash/startCase'

import axios from 'axios'

import LAYER_PROPS from './LayerMapboxProps.js'

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

  inject: { getMap: 'getMap', mapboxgl: 'mapboxgl', MapboxVueInstance: 'MapboxVueInstance', getSource: { from: 'getSource', default: undefined } },

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
        return ['fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', 'background', 'custom'].indexOf(value) !== -1
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
       The data source for the layer. If blank will find a parent Source component.  Reference a source that has already been defined using the source's unique id. Reference a new source using a source object (as defined in the Mapbox Style Specification ) directly.
      */
    customLayer: {
      type: Object,
      mapbox: false
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
       *  Object with images to load in format {'imagename':url,'image2name':url2}
    */
    images: {
      type: Object,
      default: () => ({})
    }, // {'name':url,'name2':url2}
    /**
     *  A abstract scale to opacity.
     *  if opacity is 1, it will use the layer opacity definition, if 0.5, it will reduce the current opacity in 50%.
     * it is greate to control all opacity in one time
     */
    opacity: {
      type: Number
    },
    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    color: {
      type: String
    },
    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    colorHover: {
      type: String
    },
    /**
     *  A shorthand to set color, in any type.
     * example, for layer type fill, will set fill-color, in circle, will set
     */
    colorClick: {
      type: String
    },
    /**
     *  With hideOnOpacity, when opacity is 0, the visibilit of layer will be hidden, else, will be show
     */
    hideOnOpacity: {
      type: Boolean,
      default: true
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
      * Classes are array that defines paint and layout properties on value.
      * it is a short hand for expresion
      * @values  [{'fill-color':'#fe0000', 'fill-opacity':0.3, value:1, property:"vlr_classe", 'label':"Área Artificial", },
                 {'fill-color':'#ebe628', 'fill-opacity':'0.3',value:2, property:"vlr_classe", 'label':"Área Agrícola",}]
    */
    classes: {
      type: [Array]
    },
    /**
      * How to interpolate the values in classes
    */
    classesValueInterpolation: {
      type: String,
      default: 'match',
      validator: function (value) {
        return ['match', 'step', 'interpolate'].indexOf(value) !== -1
      }
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

    /**
    * array of values to join the features using setState
    * so we can easy use it on expression or show in popup id
    */
    dataJoin: {
      type: [Array, String]
    },

    /**
    If dataJoin is a url, and the items is not in root, here we define the path of the itens, like this "items" os "items.result"
    (lodash get like)
    */
    dataJoinDataPath: {
      type: String
    },
    dataJoinKey: {
      type: String,
      default: 'id'
    },

    ...LAYER_PROPS

  },

  data () {
    return {
      featureState: {},
      layerId: null,
      sourceId: null,
      selectedFeatures: [],
      hoverFeatures: [],
      hasChildPopup: null,
      lastClick: null,
      lastHover: null,
      hasFeatureHover: false,
      hasFeatureClick: false,
      myData: false,
      /**
      KeysExistInData allow to transform some the expressions from ['get','properties'] to ['feature-state','featurestate']
      */
      keysExistInData: []

    }
  },

  computed: {

    myPaintNormal: function () {
      return this.getPaintLayoutForState('paint', '')
    },
    myPaintHover: function () {
      return this.getPaintLayoutForState('paint', 'hover')
    },
    myPaintClick: function () {
      return this.getPaintLayoutForState('paint', 'click')
    },
    myLayoutNormal: function () {
      return this.getPaintLayoutForState('layout', '')
    },
    myLayoutHover: function () {
      return this.getPaintLayoutForState('layout', 'hover')
    },
    myLayoutClick: function () {
      return this.getPaintLayoutForState('layout', 'click')
    },

    myPaint: function () {
      let paint = this.myPaintNormal
      const paintHover = this.myPaintHover
      const paintClick = this.myPaintClick
      if (this.hasFeatureHover || this.hasFeatureClick) {
        paint = this.getFinalFeatureStateForPaintOrLayout(paint, paintHover, paintClick)
      }
      return paint
    },

    myLayout: function () {
      let layout = this.myLayoutNormal
      const layoutHover = this.myPaintHover
      const layoutClick = this.myPaintClick
      if (this.hasFeatureHover || this.hasFeatureClick) {
        layout = this.getFinalFeatureStateForPaintOrLayout(layout, layoutHover, layoutClick)
      }
      // check hideOnOpacitu
      const opacity = this.opacity
      if (this.hideOnOpacity === false || opacity === undefined || opacity === null) return layout
      if (opacity === 0 && this.hideOnOpacity) {
        layout.visibility = 'none'
      } else if (!layout.visibility) { // just set visible if i dont have, so respect the input
        layout.visibility = 'visible'
      }
      return layout
    },

    layerInstance: function () {
      return this.getMap().getLayer(this.id)
    }

  },

  watch: {

    source: function (val, oldval) {
      if (typeof val === 'object') {
        if (JSON.stringify(val) !== JSON.stringify(oldval)) {
          const source = this.getMap().getLayer(this.layerId).source
          this.MapboxVueInstance.updateSource(source, val.type, { ...val })
        }
      }
    },

    minzoom: function (val) {
      if (this.layerExist()) {
        this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
      }
    },

    maxzoom: function (val) {
      if (this.layerExist()) {
        this.getMap().setLayerZoomRange(this.layerId, this.minzoom, this.maxzoom)
      }
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
          if (this.layerExist()) {
            this.getMap().setPaintProperty(this.layerId, key, value)
          }
        }
      })
    },

    myLayout: function (newLayout, oldLayout) {
      Object.entries(newLayout).forEach((item) => {
        const key = item[0]
        const value = item[1]
        if (JSON.stringify(value) !== JSON.stringify(oldLayout[key])) {
          if (this.layerExist()) {
            this.getMap().setLayoutProperty(this.layerId, key, value)
          }
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
    },

    // DATA JOIN WATCHERS
    myData: function (val, oldval) {
      // debugger;
      // if (Array.isArray(val) && Array.isArray(oldval)) {
      //   if (JSON.stringify(val) === JSON.stringify(oldval)) {
      //     return
      //   }
      // }
      debugger

      this.keysExistInData = Object.keys(val?.[0])
      if(oldval){
        this.removeDataJoin(oldval)
      }
      this.addDataJoin()
    },

    dataJoin: function (val, oldval) {
      // debugger
      // if (Array.isArray(val) && Array.isArray(oldval)) {
      //   if (JSON.stringify(val) === JSON.stringify(oldval)) {
      //     return
      //   }
      // }
      this.loadData()
    },

    // dataJoinKey: function () {
    //   this.addDataJoin()
    // },

    // dataJoinDataPath: function () {
    //   this.addDataJoin()
    // }

  },

  created: function () {
    this.popupOpen = false
    const options = getOnlyMapboxProps(this)
    if (!options.source) {
      const source = this.getSource && this.getSource()
      if (source && source.id) {
        options.source = source.id
      }
    }

    // if source is object, we create create the source apart,
    // because if layers have the source id set for layer, we will use a unique one
    // TODO - verify all source options are equal to make sure of it
    if (options?.source?.constructor?.name === 'Object') {
      const sourceid = options.source?.id || options.source?.name
      if (sourceid) {
        if (this.MapboxVueInstance.getSource(sourceid) === false) {
          this.MapboxVueInstance.addSource(sourceid, options.source.type, { ...options.source })
        } else { // update source
          this.MapboxVueInstance.updateSource(sourceid, options.source.type, { ...options.source })
        }
        options.source = sourceid
      }
    }

    this.options = options

    if (this.type === 'custom') {
      this.addLayer()
    } else {
      // check if source exist,
      if (typeof this.options.source === 'string') {
        if (this.getMap().getSource(this.options.source)) {
          this.addLayer()
        } else {
          // add layer when a source with name is added in future
          const func = (e) => {
            console.log(e)
            if (e.dataType === 'source' && e.sourceId === this.options.source) {
              this.addLayer()
              this.getMap().off('sourcedata', func)
            }
          }
          this.getMap().on('sourcedata', func)
        }
      } else {
        // TODO - pretty sure not used, remove in future
        this.addLayer()
      }
    }
    // if not, wait it to loaded an show it

    if (this.images) {
      this.MapboxVueInstance.addPropsImages(this.images)
    }
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
        // TODO - not removing sourve because others can be using it, but make this logic better
        // this.getMap().removeSource(this.sourceId)
      }
    }
  },

  methods: {

    layerExist: function () {
      const layer = this.getMap().getLayer(this.layerId)
      if (!layer) return false
      return true
    },

    addLayer: function () {
      try {
        if (this.customLayer) {
          const mylayer = this.MapboxVueInstance.addLayer(this.customLayer)
          this.layerId = mylayer
        } else {
          const id = this.MapboxVueInstance.getNewIdForLayer(this.name)
          const mylayer = this.MapboxVueInstance.addLayer({ ...this.options, id: id, type: this.type, paint: this.myPaint, layout: this.myLayout })
          this.layerId = mylayer
          // get source add after add layer, because of case where the source especification is set in props as option, withou an id
          this.sourceId = this.getMap().getLayer(mylayer).source
          // bind listners set in component to mapbox events
          this.MapboxVueInstance.setupEvents(this.$listeners, this.getMap(), nativeEventsTypes, this.layerId, this.created_at, this.zIndex)
          this.loadData()
        }
      } catch (e) {
        console.error('========================== Error adding Layer ' + this.name)
        console.error('Error adding Layer ' + this.name)
        console.log(this.myPaint)
        console.error(e)
        // this.$destroy()
      }
    },

     removeDataJoin: function (vals) {
      if (Array.isArray(vals)) {
        const map = this.getMap()
        vals.forEach(feature => {
          // check object and if we have an id
          if (feature?.constructor?.name !== 'Object') return
          const id = feature?.[this.dataJoinKey]
          if (id === undefined) return
          map.removeFeatureState(
            { source: this.sourceId, sourceLayer: this.sourceLayer, id }
          )
        })
      }
    },

    addDataJoin: function () {
      if (Array.isArray(this.myData)) {
        const map = this.getMap()
        this.myData.forEach(feature => {
          // check object and if we have an id
          if (feature?.constructor?.name !== 'Object') return
          const id = feature?.[this.dataJoinKey]
          if (id === undefined) return
          map.setFeatureState(
            { source: this.sourceId, sourceLayer: this.sourceLayer, id },
            { ...feature }
          )
        })
      }
    },

    loadData: async function () {
      let res = false
      if (Array.isArray(this.dataJoin)) {
        res = [...this.dataJoin]
      } else if (this.dataJoin?.constructor?.name === 'String') {
        try {
          const url = new URL(this.dataJoin)
          const res = await axios.get(url)
          const path = this.dataJoinDataPath ? 'data' + this.dataJoinDataPath : 'data'
          const data = get(res, path)
          if (Array.isArray(data)) {
            return [...data]
          } else {
            console.error('dataJoin url dont return an Array in path:' + path)
          }
        } catch (e) {
          console.error(e)
        }
      }
      this.myData = res
      return res
    },

    //* * EVENTS SETUP */

    setupLayerFeaturesEvents: function () {
    
      if ( this.$listeners.featurehover || this.paintHover || this.layoutHover || has(this.$scopedSlots, 'popupHover') || has(this.$slots, 'popupHover')) {
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

      // CUSTON EVENTS
      // featureHover
      // featureClick
      // featureLeave
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

      this.lastHover = e
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

    //* * PAINT AND LAYOUT SETUPS */

    getFinalFeatureStateForPaintOrLayout: function (normal, hover, click) {
      const result = { ...normal }

      if (this.hasFeatureHover || this.hasFeatureClick || this.hasChildPopup) {
        Object.entries(result).forEach((item) => {
          const key = item[0]
          const value = item[1]
          let pp = value
          // Check if we use zoom level, because it can be used only as tope level
          // treat interpolate and step diferent because the usually use zoom as input, and zoom input only work in toplevel
          if ((value?.[0] === 'interpolate' && value?.[2]?.[0] === 'zoom') || (value?.[0] === 'step' && value?.[1]?.[0] === 'zoom')) {
            const exprType = value?.[0]
            const exprStart = (exprType === 'interpolate') ? value.splice(0, 4) : value.splice(0, 2)

            const opacity = this.opacity ?? 1
            for (let i = 0; i < value.length; i += 2) {
              value[i] *= opacity
              if (hover && hover[key]) {
                value[i] = ['case', ['boolean', ['feature-state', 'hover'], false], hover[key] * opacity, value[i]]
              }
              if (click && click[key]) {
                value[i] = ['case', ['boolean', ['feature-state', 'click'], false], click[key] * opacity, value[i]]
              }
            }
            pp = exprStart.concat(value)
          } else {
            if (hover && hover[key]) {
              pp = ['case', ['boolean', ['feature-state', 'hover'], false], hover[key], value]
            }
            if (click && click[key]) {
              pp = ['case', ['boolean', ['feature-state', 'click'], false], click[key], pp]
            }
          }

          result[key] = pp
        })
      }
      return result
    },

    /**
    Return all layout or paint set for this layer type, in a determinate state
    /* @params kind | layout or paint
    /* @params state | '', click or hover
    */
    getPaintLayoutForState: function (kind = 'paint', state = '') {
      const allPaintLayout = this.getAllPaintLayoutForKind(kind)
      const removeStateRegex = new RegExp('-' + state + '$', 'g')

      // GET WHAT IS DEFINED VIA NORMAL PROP (paint, layout, paintHove...)
      const paintLayoutObject = get(this.$props, kind + startCase(state), {})
      let paintLayoutFinal = {}
      Object.keys(paintLayoutObject).forEach((k) => {
        const kConvert = this.innerPaintPropConvert(k)
        paintLayoutFinal[kConvert] = this.innerExpressionConverter(paintLayoutObject[k])
      })

      // GET WHAT IS DEFINE LOOSELY IN PROPS (fill-color, fill-color-click .....)
      Object.entries(this.$options.propsData).forEach(item => {
        const key = this.innerPaintPropConvert(kebabCase(item[0]))
        const value = item[1]
        var keyNormalName = key.replace(removeStateRegex, '')
        if ((state !== '' && key.indexOf('-' + state) > -1) && allPaintLayout.includes(keyNormalName)) {
          paintLayoutFinal[keyNormalName] = this.innerExpressionConverter(value)
        } else if (state === '' && allPaintLayout.includes(keyNormalName)) {
          paintLayoutFinal[keyNormalName] = this.innerExpressionConverter(value)
        }
      })

      // GET WHAT IS DEFINE VIA CLASSES ([fill-color: red, property:vl_name, value:'df',...])
      // for each paint/layout props,
      // check if we find it in the classe and mount a expression for it
      allPaintLayout.forEach((plKey) => {
        const plKeyState = state !== '' ? plKey + '-' + state : plKey

        const classesElementsWithPL = filter(this.classes, elm => has(elm, plKeyState))

        if (classesElementsWithPL.length > 0) {
          let expression = []
          const featureProperty = classesElementsWithPL[0]?.property // TODO maybe put state here too

          // MATCH VALUES
          if (this.classesValueInterpolation === 'match') {
            debugger
            const featureId = featureProperty === '_id'
            expression = featureId ? ['match', ['id']] : ['match', ['get', featureProperty]]

            classesElementsWithPL.forEach((classeElm, i) => {
              expression.push(this.innerExpressionConverter(classeElm.value))
              expression.push(get(classeElm, plKeyState))
            })
            expression.push(paintLayoutFinal[plKey] || expression[expression.length - 1])

          // STEP VALUES
          } else if (this.classesValueInterpolation === 'step') {
            expression = ['step', ['to-number', ['get', featureProperty]]]
            classesElementsWithPL.forEach((classeElm, i) => {
              // TODO - i think need to test default value when is steped
              expression.push(get(classeElm, plKeyState))
              if (classeElm.value) expression.push(this.innerExpressionConverter(classeElm.value))
            })

          // INTERPOLATE VALUES
          } else if (this.classesValueInterpolation === 'interpolate') {
            if (featureProperty.match(/color/g)) { // check if is color
              expression = ['interpolate-hcl', ['linear'], ['to-number', ['get', featureProperty]]]
            } else {
              expression = ['interpolate', ['linear'], ['to-number', ['get', featureProperty]]]
            }
            classesElementsWithPL.forEach((classeElm, i) => {
              expression.push(this.innerExpressionConverter(classeElm.value))
              expression.push(get(classeElm, plKeyState))
            })
          }
          paintLayoutFinal[this.innerPaintPropConvert(plKey)] = expression
        }
      })

      // Zoom expression not work in hover or click states
      // it is a limitation of mapbox zoom only work as top level exp,
      // and if we set ir in phover or click, it will be uset in secundary moments
      if (state !== '') {
        Object.entries(paintLayoutFinal).forEach((item) => {
          const key = item[0]
          const value = item[1]
          if (this.checkForZoomExp(value)) {
            console.error('ZOOM expression can not be user in hover or click state due mapbox limitations. Default will be the last value')
            paintLayoutFinal[key] = value[value.length - 1] // (value?.[0] === 'interpolate') ? value[value.length-1] : value?.[2] // default value if interpolate, or step
          }
        })
      }

      // OPACITY CHECK STEP
      if (kind === 'paint') {
        paintLayoutFinal = this.processPaintOpacity(paintLayoutFinal)
      }

      return { ...paintLayoutFinal }
    },

    /** Treat opacity scale
    * opacity is a especial case, wher we scale all opacity set witth this value
    * opacity not set will be set to so we can fase a layout
    */
    processPaintOpacity: function (paint) {
      const opacity = this.opacity
      if (opacity === undefined || opacity === null) {
        return paint
      }

      // get all the opacity props for the paint/layout
      // properties for this type of layer
      const allPaintProperties = this.getAllPaintLayoutForKind('paint')
      const opacityProps = allPaintProperties.filter(key => key.indexOf('opacity') !== -1)

      opacityProps.forEach((key) => {
        if (!paint[key]) {
          paint[key] = opacity
          return
        }
        const value = paint[key]
        if (value?.constructor?.name === 'Number') {
          paint[key] = value * opacity
        } else if (Array.isArray(value)) { // an expression
          //
          if (this.checkForZoomExp(value)) {
            const exprStart = (value[0] === 'interpolate') ? value.splice(0, 4) : value.splice(0, 2)
            for (let i = 0; i < value.length; i += 2) {
              value[i] *= opacity
            }
            paint[key] = exprStart.concat(value)
          } else {
            paint[key] = ['*', [...value], opacity]
          }
        }
      })

      return paint
    },

    /**
    * Return all layout or paint that exist for this layer type
    /* @params kind | layout or paint
    */
    getAllPaintLayoutForKind: function (kind) {
      const propertiesForKind = ['color'] // user shorhand for color for all layer types
      Object.entries(this.$options.props).forEach((prop) => {
        const key = kebabCase(prop[0])
        const value = prop[1]
        if (get(value, kind) && get(value, 'layerType') === this.type) {
          if (key.indexOf('-hover') === -1 && key.indexOf('-click') === -1) {
            propertiesForKind.push(key)
            // propertiesForKind.push(key + '-transition') //disable transition for now
          }
        }
      })
      return propertiesForKind
    },

    /**
    * convert raw properties values with custom express,
    like using ['z',4,6,2,5] -> ['interpolate', ['linear'], ['zoom'], 4,6,2,5]
    */
    innerExpressionConverter: function (value) {
      if (Array.isArray(value)) {
        if (value?.[0] === 'z') {
          let valueFinal = [...value]
          valueFinal.shift()
          valueFinal = ['interpolate', ['linear'], ['zoom'], ...valueFinal]
          return valueFinal
        }
      }
      /**
       Implementes joinData expression converter so we can use allow to transform some the expressions from ['get','properties'] to ['feature-state','featurestate']
      // TODO IMPLEMENT - use the  ['coalesce', [get,property], ['feature-state','color'], '#ff4400'  ]
      // but maybe it is too much of outside word mapbox, maybe not implement it
      */
      return value
    },
    /**
    * convert generic key layouts props to the layer type,
    like using color:#fffff -> fill-color: #fffff  if type fill
    */
    innerPaintPropConvert: function (prop) {
      if (['color', 'color-hover', 'color-click'].includes(prop)) {
        return this.type + '-' + prop
      }
      return prop
    },

    checkForZoomExp: function (exp) {
      if ((exp?.[2]?.[0] === 'zoom') || (exp?.[1]?.[0] === 'zoom')) {
        return true
      }
      return false
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
        center: [this.lastHover.lngLat.lng, this.lastHover.lngLat.lat],
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
