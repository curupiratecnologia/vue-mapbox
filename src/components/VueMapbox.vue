
<template>
  <div class="vue-mapbox" :style="{ position:'relative', width: myWidth, height: myHeight }">
    <div ref="mapabaselayer" id="mapaBaseLayer" class="map-layer mapbox-map-container"
    style=" position: absolute; left: 0px; top: 0; bottom: 0; right: 0; width:100%;" >
      <div v-if="mapLoaded">
        <slot></slot>
      </div>
      <div v-if="showLoader && !mapLoaded" class="loader">
        <!-- @slot Slot to show a custom loader it props showLoadder is set true  -->
        <slot name="loader">
          <!-- <div> <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i> <br /> {{'Loading'}}... </div> -->
        </slot>
      </div>
      <div v-if='devMode' style='position:absolute;bottom:0;font-size:9px;padding:0.4em;z-index:10;background:#00000066;color:white;'>{{ camera }}</div>
    </div>
  </div>
</template>

<script>
import findVNodeChildren from '../utils/findVNodeChildren' // TODO - check why not work, and using this.findLayers works
import get from 'lodash/get'
import orderBy from 'lodash/orderBy'
import uniqueId from 'lodash/uniqueId'
import loadScriptsCss from '../utils/loadScriptsCss'

// inicia os webworks etc antes, para performance de mapax construidos e destruidos

// import { ScatterplotLayer, ArcLayer, HexagonLayer } from '@deck.gl/layers'
// import { MapboxLayer } from '@deck.gl/mapbox'
// import mapBaseStyle from './styles/cgeestyle'
const nativeEventsTypes = [
  'click',
  'dblclick',
  'mouseenter',
  'mouseleave',
  'mouseout',
  'mousedown',
  'mouseup',
  'contextmenu',
  'wheel',
  'touchstart',
  'touchend',
  'touchmove',
  'touchcancel',
  'movestart',
  'move',
  'moveend',
  'dragstart',
  'drag',
  'dragend',
  'zoomstart',
  'zoom',
  'zoomend',
  'rotatestart',
  'rotate',
  'rotateend',
  'pitchstart',
  'pitch',
  'pitchend',
  'boxzoomstart',
  'boxzoomend',
  'boxzoomcancel',
  'webglcontextlost',
  'webglcontextrestored',
  'load',
  'render',
  'idle',
  'error',
  'data',
  'styledata',
  'sourcedata',
  'dataloading',
  'styledataloading',
  'sourcedataloading',
  'styleimagemissing'
]

export default {
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
  name: 'VueMapbox',
  /**
       * Access current mapbox instance using componentInstance.map
    */
  props: {
    /**
       * Mapa Width. In px or percent
    */
    width: {
      type: [Number, String],
      default: '100%'
    },
    /**
       * Mapa Height. In px or percent
    */
    height: {
      type: [Number, String],
      default: '100%'
    },
    /**
       * Show a Loader
    */
    showLoader: {
      type: Boolean,
      default: true
    },

    /**
       * AcceToken for your account for mapbox, if you are uing it for server tiles. Can be blank if you use anothers sources.
       * If you set to the vue client an process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, it will be used too
    */
    accessToken: {
      type: String,
      default: ''
    },
    /**
       * Allow layer nome to be rewrite, so layer with same name don't show error, and you can get than with ref in vm-layer
       * Bur if your application need the exatc name of layer, so yo can get the exatc name, set it to false
    */
    layersCanRaname: {
      type: Boolean,
      default: true
    },
    /**
       * The map's Mapbox style. Can be a URL or the STYLE OBJECT itself . example mapbox://styles/mapbox/streets-v11.  more info at https://mapbox.com/mapbox-gl-style-spec/
    */
    mapStyle: {
      type: [String, Object],
      default: 'mapbox://styles/mapbox/outdoors-v11'
    },
    /**
       * The minimum zoom level of the map (0-24).
    */
    minZoom: {
      type: Number,
      default: 0
    },
    /**
       * The maximun zoom level of the map (0-24).
    */
    maxZoom: {
      type: Number,
      default: 24
    },
    /**
       * Define Zoom level (0-24).
    */
    zoom: {
      type: Number,
      default: 4
    },
    /**
       *  Define center array.
    */
    center: {
      type: Array,
      default: () => [-53.048889, -14.951209500045001]
    },
    /**
       * If true , the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60 . An additional string may optionally be provided to indicate a parameter-styled hash, e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar , where foo is a custom parameter and bar is an arbitrary hash distinct from the map hash.
    */
    hash: {
      type: [Boolean, String],
      default: false
    },
    /**
       *  The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
    */
    bounds: {
      type: Array,
      default: undefined
    },
    /**
       *  The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
    */
    maxBounds: {
      type: Array,
      default: undefined
    },
    /**
       * camera padding. will be user for all bounds, fly etc
       * @values number or {top,left,right,bottom}
    */
    padding: {
      type: [Object, Number],
      default: 0
    },
    /**
       *  Other options to pass to mapbox. Will be merged here. See https://docs.mapbox.com/mapbox-gl-js/api/#map for all options.
    */
    otherOptions: {
      type: Object,
      default: () => ({})
    },
    /**
       *  Object with images to load in format {'imagename':url,'image2name':url2}
    */
    images: {
      type: Object,
      default: () => ({})
    }, // {'name':url,'name2':url2}
    /**
       *  show cameras attributes
    */
    devMode: {
      type: Boolean,
      default: false
    }, // {'name':url,'name2':url2}
    /**
       *  show cameras attributes
    */
    interactive: {
      type: Boolean,
      default: true
    } // {'name':url,'name2':url2}

  },

  provide: function () {
    return {
      getMap: () => this.map,
      mapLoaded: this.mapLoaded,
      mapboxgl: () => this.mapboxgl,
      MapboxVueInstance: this
    }
  },

  data () {
    return {
      /**
       *  Set When Map Style is Loaded
     */
      mapLoaded: false,
      map: null,
      sources: null,
      layers: null,
      camera: ''
    }
  },

  beforeCreate () {

  },

  async created () {
    // //console.log('created - vueMapbox')
    if (!window.mapboxgl) {
      const sources = [
        'https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js',
        'https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css'
      ]
      try {
        await loadScriptsCss(sources)
      } catch (e) {
        // console.error(e)
        throw new Error('Erro loading mapbox from its CDN. Please, make sure your internet is ok, insert mapbox manually in your html ')
      }
    }

    if (!window.mapboxgl) {
      throw new Error('Erro loading mapbox from its CDN. Please, make sure your internet is ok, insert mapbox manually in your html ')
    }

    this.mapboxgl = window.mapboxgl
    window.mapboxgl.prewarm()
    this.sources = new Map() // {id:{type,data,instance}}
    this.layers = new Map() //
    this.imagesMap = new Map() //
    // this.images = new Map() //
    this.layersGroups = new Map() //
    this.eventsOnMap = new Map() //

    // make sure the html div to use in mapbox is loaded
    this.$nextTick(() => {
      this.createMap()
    })
  },

  computed: {

    myHeight: function () {
      let h = this.height
      if (typeof h === 'number') {
        h += 'px'
      }
      return h
    },
    myWidth: function () {
      let w = this.width
      if (typeof w === 'number') {
        w += 'px'
      }
      return w
    }
  },

  watch: {
    bounds: function (val) {
      // var newCameraTransform = this.map.cameraForBounds(val, {
      //   padding: { top: 10, bottom: 25, left: 15, right: 5 }
      // })
      this.map.fitBounds(val, { padding: this.padding })
    },
    maxBounds: function (val) {
      if (this.map) { this.map.setMaxBounds(val) }
    }
  },

  beforeUpdated () {
    // //console.log('beforeUpdated dom vueMapbox')
  },

  mounted () {
    // //console.log('Mounted - Mounted dom vueMapbox')

    // this.$nextTick(() => {
    //   this.updateLayerOrder()
    // })
  },

  updated () {
    // update mapbox
    console.log('🚀 ~ file: VueMapbox.vue ~ line 329 ~ updated ~ update mapbox')
    // this.$nextTick(() => {
    if (this.updateLayerTimeout) clearTimeout(this.updateLayerTimeout)
    this.updateLayerTimeout = setTimeout(this.updateLayerOrder, 400)
    // })
  },

  beforeDestroy () {
    if (this.map) {
      this.map.remove()
    }
  },

  methods: {

    createMap: function () {
      // //console.log('createding map - vueMapbox')
      window.mapboxgl.prewarm()
      if (this.accessToken !== '') {
        window.mapboxgl.accessToken = this.accessToken
      } else if (process.env.VUE_APP_MAPBOX_ACCESS_TOKEN) {
        window.mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      }
      this.map = new window.mapboxgl.Map({
        ...this.otherOptions,
        container: this.$refs.mapabaselayer,
        refreshExpiredTiles: false,
        antialias: true,
        style: this.mapStyle,
        center: this.center,
        zoom: this.zoom,
        hash: this.hash,
        bounds: this.bounds,
        maxBounds: this.maxBounds,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        interactive: this.interactive
        // maxBounds: [ -48.44732177294034, -16.638275455496753, -47.22472784587998, -14.904304916348181 ]
      })

      this.addPropsImages()

      this.setupEvents(this.$listeners, this.map, nativeEventsTypes)
      // //console.log('setting mapa loaded')
      this.map.on('load', () => {
        const _this = this
        // //console.log('mapa loaded fired')
        this.mapLoaded = true
        /**
         * Load Event - When Maps Load
         *  @property {object} _this the component instance
          * @property {object} map the mapbox instance
         */
        this.$emit('load', _this, this.map)
      })

      // if (this.devMode) {
      //   this.map.on('moveend', () => {
      //     this.camera = this.map.getZoom()
      //   })
      // }
    },

    getMap: function () {
      return this.map
    },

    /**
    * Automatic Setup Events from Mapbox Classes in Vue Instances
    */
    setupEvents: function (listners, MapboxElement, theEventsOfElement, layerId) {
      if (listners) {
        Object.entries(listners).forEach((item) => {
          let eventName = item[0]
          const eventFunction = item[1]

          const eventFinal = (e) => {
            eventFunction(e, this.map, this)
          }
          let once = false

          if (eventName.indexOf('~') === 0) {
            once = true
            eventName = eventName.substring(1)
          }
          if (theEventsOfElement.includes(eventName)) {
            if (once) {
              if (layerId) {
                MapboxElement.once(eventName, layerId, eventFinal)
              } else {
                MapboxElement.once(eventName, eventFinal)
              }
            } else {
              if (layerId) {
                MapboxElement.on(eventName, layerId, eventFinal)
              } else {
                MapboxElement.on(eventName, eventFinal)
              }
            }
          }
        })
      }
    },

    /**
    * Create/Update Source
    */
    addSource: function (id, type, options) {
      debugger
      // if source name exist, create a randow one
      if (this.map.getSource(id) && this.layersCanRaname) {
        id = uniqueId(id + type)
      }

      this.map.addSource(id, { type, ...options })
      const sourceObject = this.map.getSource(id)

      this.sources.set(id, { id, type, options, instance: sourceObject })
      return this.sources.get(id)
    },

    getSource: function (id) {
      // if source name exist, create a randow one
      if (this.sources.has(id)) {
        return this.sources.get(id)
      }
      return false
    },

    /**
    * Remove Source
    */
    removeSource: function (id) {
      // if (this.sources.has(id)) {
      //   this.sources.delete(id)
      // }
      // if (this.map && this.map.getSource(id)) {
      //   this.map.removeSource(id)
      // }
    },

    /**
    * Update Source
    */
    updateSource: function (sourceid, type, options) {
      if (this.sources.has(sourceid)) {
        this.sources.delete(sourceid)
      }

      // apago todos os layers que tem esse source
      const layers = this.map.getStyle()?.layers
      if (!layers) return

      layers.forEach(layer => {
        if (layer.source === sourceid) {
          this.map.removeLayer(layer.id)
        }
      })
      // apago o source
      this.map.removeSource(sourceid)
      // adiciono o novo source no com mesmo is
      const source = this.addSource(sourceid, type, options)
      // adiciono os layer novamente
      layers.forEach((layer, i) => {
        if (layer.source === sourceid) {
          const beforeLayer = layers?.[i - 1]
          if (beforeLayer) {
            this.map.addLayer(layer, beforeLayer.id)
          } else {
            this.map.addLayer(layer)
          }
        }
      })
      return source
    },

    getNewIdForLayer: function (name) {
      let id = name
      if (this.map.getLayer(name) && this.layersCanRaname) {
        id = uniqueId('autoNamelayer_' + name)
      }
      // TODO IMPORTANTISSIMO - refazer logica de nome de layer e source, pq layers com source objetos da meio que ruim
      id = uniqueId('autoNamelayer_' + name)
      return id
    },

    /**
    * Create/Update Layer
    */
    addLayerTemp: function (options) {
      this.map.addLayer(options)
    },
    /**
    * Create/Update Layer
    */
    addLayer: function (options, zIndex) {
      // // if layer name exist, create a randow one
      let id = options.id

      if (this.map.getLayer(id)) {
        this.removeLayer(id)
      }
      // TODO - get the before layer
      let beforeId = this.updateLayerOrder(id)

      if (options?.source?.constructor?.name === 'Object') {
        // check if we have a id
        const sourceId = options?.source?.id ?? id
        if (this.map.getSource(sourceId)) {
          options.id = uniqueId('new' + sourceId)
          id = options.id
          // options.source.name = options.source.id
        }
      }

      if (this.map.getLayer(id)) {
        this.removeLayer(id)
      }

      if (!this.map.getLayer(beforeId)) { beforeId = undefined }
      this.map.addLayer(options, beforeId)

      // const sourceObject = this.map.getLayer(options.id)

      this.layers.set(id, { id })

      this.updateLayerOrder()

      return options.id
    },

    findLayers: function (VNode, bag) {
      // TODO - put in a utility. See why the current util dont work
      bag = bag || []
      if (Array.isArray(VNode)) {
        VNode.forEach(node => {
          this.findLayers(node, bag)
        })
        return bag
      }
      // I will allways get the component instance
      let VNodeInstance
      if (get(VNode, 'componentInstance')) {
        VNodeInstance = get(VNode, 'componentInstance')
      } else {
        VNodeInstance = VNode
      }
      if ((get(VNodeInstance, '$options.name', get(VNodeInstance, 'componentOptions.Ctor.options.name')) === 'VmLayer')) {
        bag.push(VNodeInstance)
      }
      const children = get(VNodeInstance, '$children')
      if (Array.isArray(children)) {
        children.forEach(node => {
          this.findLayers(node, bag)
        })
      }
      return bag
    },

    /**
    * Update All Layers Order
    */
    // TODO IPORTANTE - complete refactory layer order
    updateLayerOrder: function (setLayerNameToReturnItBeforeLayerID) {
      console.count('===============================updateLayerOrder')
      console.count(setLayerNameToReturnItBeforeLayerID)
      console.time('updateLayerOrder')

      const currentLayers = this.map?.getStyle()?.layers ?? undefined

      const layerInstances = this.findLayers(this.$slots.default)
      console.log('find layer vNode tree')
      console.timeLog('updateLayerOrder')

      // check if i have layers in map or in vNodTree
      if (!currentLayers || !layerInstances) {
        console.warn('Map or layer in vNode not exist')
        console.timeEnd('updateLayerOrder')
        return
      }

      console.log('======= All LAYERS IN MAPBOX')
      console.table(currentLayers)

      // make layers with order
      let layersId = layerInstances.map((layer, i) => {
        const component = layer.componentInstance || layer
        const id = get(component, '$data.layerId')
        if (!id) {
          debugger
        }
        let zIndex = get(component, '$props.zIndex')
        const index = i
        if (zIndex) {
          zIndex = Number(zIndex) // + (index / 10)
        }
        return { id, index, zIndex }
      })
      layersId = orderBy(layersId, ['index'], ['asc'])
      console.log('======= ORDER  INDEX')
      console.table(layersId)

      for (let to = 0; to < layersId.length; to++) {
        if (!layersId[to].zIndex) {
          layersId[to].zIndex = to
        }
      }
      layersId = orderBy(layersId, ['zIndex'], ['asc'])
      console.log('======= ORDER Z INDEX')
      console.table(layersId)
      console.log('order vnode layers')
      console.timeLog('updateLayerOrder')

      // create a object with layer id and topLayer id
      const currentLayersByID = {}
      currentLayers.forEach((layer, index, array) => {
        const obj = { id: layer.id, topLayerId: undefined }
        obj.topLayerId = currentLayers?.[index + 1]?.id
        currentLayersByID[layer.id] = obj
      })

      console.log('======= ORDER IN MAPBOX')
      console.table(Object.values(currentLayersByID).filter(item => item.id.indexOf('layer-') > -1))
      console.log('generate all layers topLayerId')
      console.timeLog('updateLayerOrder')

      // return before layer name
      if (setLayerNameToReturnItBeforeLayerID) {
        console.timeEnd('updateLayerOrder')
        console.warn('return before layer name')
        return currentLayersByID?.[setLayerNameToReturnItBeforeLayerID]
      }

      // Invert loop layers to set they order
      for (let i = layersId.length; i != -1; i--) {
        const topLayer = layersId?.[i]?.id
        const currentLayer = layersId?.[i - 1]?.id
        // if we dont have layer im map, go to next one
        if (!currentLayersByID?.[currentLayer]) continue
        console.log(`check currentLayer:${currentLayer} topLayer:${topLayer}`)
        if (currentLayersByID?.[currentLayer]?.topLayerId !== topLayer) {
          console.log(`moving layers ${currentLayer} to before layer ${topLayer}`)
          this.map.moveLayer(currentLayer, topLayer)
        }
      }
      console.log('loop and move layers')
      console.timeLog('updateLayerOrder')
      console.timeEnd('updateLayerOrder')
    },

    /**
    * Update Layers Index
    */
    moveLayer: function (id, zIndex) {
      // // if layer name exist, create a randow one
    },

    /**
    Adde images in map
    * @params {object} images.
    */

    addPropsImages: function (images) {
      if (!this.map) return
      images = images || this.images
      Object.entries(images).forEach((item) => {
        const key = item[0]
        const value = item[1]
        this.addImage(key, value)
      })
    },

    /**
    Add images in map
    * @params {object} images.
    */

    addImage: async function (key, url, forceUpdate = false) {
      if (!this.map) return
      // if already have the image on map, and not force update, return
      if (forceUpdate === false && this.imagesMap.has(key)) {
        return
      }

      // create empety image to be avaliable to styles before loading the actual image
      var width = 24 // The image will be 64 pixels square
      var bytesPerPixel = 4 // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
      var data = new Uint8Array(width * width * bytesPerPixel)
      if (!this.map.hasImage(key)) this.map.addImage(key, { width: width, height: width, data: data })

      // set image before it is loading, because if a have another node after
      this.imagesMap.set(key, true)
      // now load the real image
      let imgElement
      try {
        imgElement = await this.processImage(url)
      } catch (e) {
        // console.error(`image ${key}:${url} loading error`)
        // console.error(e)
      }

      if (this.map.hasImage(key) && imgElement) {
        this.map.removeImage(key)
        this.map.addImage(key, imgElement)
      }
    },

    /**
    Remove an image of map
    * @params {object} images.
    */

    removeImage: async function (key) {
      if (!this.map) return

      if (this.map.hasImage(key)) {
        this.map.removeImage(key)
        this.imagesMap.delete(key)
      }
    },

    /**
    Creat a html image element from a url or a svg
    * @params {object} images.
    */
    processImage: async function (imgSource) {
      return new Promise((resolve, reject) => {
        if (!imgSource) {
          reject(new Error('img empty'))
        } else if (imgSource?.constructor?.name === 'HTMLImageElement') {
          resolve(imgSource)
        } else if (imgSource?.constructor?.name === 'String' || imgSource?.constructor?.name === 'SVGSVGElement') {
          const newimg = new Image()
          newimg.onload = () => {
            resolve(newimg)
          }
          newimg.onerror = (e) => {
            reject(e)
          }
          // check if is a svg as string o html element
          if ((imgSource?.constructor?.name === 'String' && imgSource.match(/<\s*svg/g)) || (imgSource?.constructor?.name === 'SVGSVGElement')) {
            imgSource = 'data:image/svg+xml;base64,' + window.btoa(imgSource?.outerHTML ?? imgSource)
          }
          newimg.src = imgSource
        } else {
          reject(new Error('Not compatibility image. Please set source as an url, a svg string, a svg element or img element'))
        }
      })
    },

    /**
    * Remove Layer
    */
    removeLayer: function (id) {
      if (!this.map) return
      const map = this.getMap()

      if (this.layers.has(id)) {
        this.layers.delete(id)
      }

      // because when we try to remove a layer the mapbox itself has been destroied
      try {
        if (map && map.getLayer(id)) {
          map.removeLayer(id)
        }
      } catch (e) {
        /// /console.warn(e)
      }
      this.$nextTick(() =>
        this.updateLayerOrder()
      )
    },

    docEvents: function () {
      this.$emit('click')
      this.$emit('dblclick')
      this.$emit('mouseenter')
      this.$emit('mouseleave')
      this.$emit('mouseout')
      this.$emit('contextmenu')
      this.$emit('wheel')
      this.$emit('touchstart')
      this.$emit('touchend')
      this.$emit('touchmove')
      this.$emit('touchcancel')
      this.$emit('movestart')
      this.$emit('move')
      this.$emit('moveend')
      this.$emit('dragstart')
      this.$emit('drag')
      this.$emit('dragend')
      this.$emit('zoomstart')
      this.$emit('zoom')
      this.$emit('zoomend')
      this.$emit('rotatestart')
      this.$emit('rotate')
      this.$emit('rotateend')
      this.$emit('pitchstart')
      this.$emit('pitch')
      this.$emit('pitchend')
      this.$emit('boxzoomstart')
      this.$emit('boxzoomend')
      this.$emit('boxzoomcancel')
      this.$emit('webglcontextlost')
      this.$emit('webglcontextrestored')
      this.$emit('load')
      this.$emit('render')
      this.$emit('idle')
      this.$emit('error')
      this.$emit('data')
      this.$emit('styledata')
      this.$emit('sourcedata')
      this.$emit('dataloading')
      this.$emit('styledataloading')
      this.$emit('sourcedataloading')
      this.$emit('styleimagemissing')
    }
  }

}

</script>

<style lang="stylus" scoped>

    .loader{
        position:fixed;
        top:50%;
        left:50%;
        text-align:center;
    }

    .map-layer {
        position: absolute !important;
        left: 0px;
        top: 0;
        bottom: 0;
        right: 0;
        width:100%;
        // background:red;
        // z-index:3

        .mapboxgl-canvas{
            left:0;
        }
    }

</style>
