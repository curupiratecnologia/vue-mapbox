/* eslint-disable eqeqeq */``
<template>
  <div class="vue-mapbox" :style="{ position:'relative', width: myWidth, height: myHeight }">
    <div ref="mapabaselayer" id="mapaBaseLayer" class="map-layer mapbox-map-container">
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
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import findVNodeChildren from '../utils/findVNodeChildren'
import get from 'lodash/get'
import has from 'lodash/has'
import orderBy from 'lodash/orderBy'

import uniqueId from 'lodash/uniqueId'

// inicia os webworks etc antes, para performance de mapax construidos e destruidos
mapboxgl.prewarm()

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
    } // {'name':url,'name2':url2}

  },

  provide: function () {
    return {
      getMap: () => this.map,
      mapLoaded: this.mapLoaded,
      mapboxgl: mapboxgl,
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

  static () {
    return {

    }
  },

  beforeCreate () {

  },

  created () {
    this.sources = new Map() // {id:{type,data,instance}}
    this.layers = new Map() //
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
      this.map.setMaxBounds(val)
    }
  },

  beforeUpdated () {
    console.log('beforeUpdated dom vueMapbox')
  },

  mounted () {
    console.log('Mounted - Mounted dom vueMapbox')

    // this.$nextTick(() => {
    //   this.updateLayerOrder()
    // })
  },

  updated () {
    console.log('Updated - updated dom vueMapbox')

    this.$nextTick(() => {
      this.updateLayerOrder()
    })
  },

  beforeDestroy () {
    if (this.map) {
      this.map.remove()
    }
  },

  methods: {

    createMap: function () {
      mapboxgl.prewarm()
      if (this.accessToken !== '') {
        mapboxgl.accessToken = this.accessToken
      } else if (process.env.VUE_APP_MAPBOX_ACCESS_TOKEN) {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      }
      this.map = new mapboxgl.Map({
        ...this.otherOptions,
        container: this.$refs.mapabaselayer,
        refreshExpiredTiles: false,
        antialias: true,
        style: this.mapStyle,
        center: this.center,
        zoom: this.zoom,
        hash: this.hash,
        bounds: this.bounds,
        maxBounds: this.maxBounds
        // maxBounds: [ -48.44732177294034, -16.638275455496753, -47.22472784587998, -14.904304916348181 ]
      })

      this.addPropsImages()

      this.setupEvents(this.$listeners, this.map, nativeEventsTypes)

      this.map.on('load', () => {
        const _this = this
        /**
         * Load Event - When Maps Load
         *  @property {object} _this the component instance
          * @property {object} map the mapbox instance
         */
        this.$emit('load', _this, this.map)
        this.mapLoaded = true
      })

      if (this.devMode) {
        this.map.on('moveend', () => {
          this.camera = this.map.getZoom()
        })
      }

      this.map.on('styledata', () => {
        console.log('A styledata event occurred.')
      //   this.updateLayerOrder()
      })
      this.map.on('sourcedata', () => {
        console.log('A sourcedata event occurred.')
      //   this.updateLayerOrder()
      })
      this.map.on('sourcedataloading', () => {
        console.log('A sourcedataloading event occurred.')
      //   this.updateLayerOrder()
      })

      this.map.on('styledata', function () {
        console.log('A styledata event occurred.')
      })
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
      // if source name exist, create a randow one
      if (this.map.getSource(id)) {
        id = uniqueId(id + type)
      }

      this.map.addSource(id, { type, ...options })
      const sourceObject = this.map.getSource(id)

      this.sources.set(id, { id, type, options, instance: sourceObject })
      return this.sources.get(id)
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
      debugger
      if (this.sources.has(sourceid)) {
        this.sources.delete(sourceid)
      }

      // apago todos os layers que tem esse source
      const layers = this.map.getStyle().layers
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

    /**
    * Create/Update Layer
    */
    addLayer: function (id, type, options, createdAt, zIndex) {
      // // if layer name exist, create a randow one
      if (this.layers.get(id)) {
        id = uniqueId(id + type)
      }

      this.map.addLayer({ id: id, type: type, ...options })
      const sourceObject = this.map.getLayer(id)

      this.layers.set(id, { id, type, options, instance: sourceObject, createdAt, zIndex })

      this.$nextTick(() =>
        this.updateLayerOrder()
      )

      // when idle because some time the layer get time to be added
      this.map.once('idle', () => {
        console.log('A styledata event occurred.')
        this.$nextTick(() =>
          this.updateLayerOrder()
        )
      })

      return id
    },

    /**
    * Update All Layers Order
    */
    updateLayerOrder: function () {
      console.log('UPDATE LAYER ORDER ==============================================================================')
      const findLayers = (VNode, bag) => {
        bag = bag || []

        if (Array.isArray(VNode)) {
          VNode.forEach(node => {
            findLayers(node, bag)
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
          console.log(get(VNodeInstance, '$props.name'))
        }
        // let children = get(VNode, 'children') || get(VNode, 'componentOptions.children')
        // if (!children) children = get(VNode, 'componentInstance.$children')
        // if (!children)
        const children = get(VNodeInstance, '$children')
        if (Array.isArray(children)) {
          children.forEach(node => {
            findLayers(node, bag)
          })
        }
        // if (has(VNodeInstance, '$slots')) {
        //   const mySlots = Object.keys(VNodeInstance.$slots)
        //   mySlots.forEach(slotName => {
        //     findLayers(VNodeInstance.$slots[slotName], bag)
        //   })
        // }
        // if (has(VNodeInstance, '$scopedSlots')) {
        //   const mySlots = Object.keys(VNodeInstance.$scopedSlots)
        //   mySlots.forEach(slotName => {
        //     findLayers(VNodeInstance.$scopedSlots[slotName](), bag)
        //   })
        // }
        return bag
      }

      const layerInstances = findLayers(this.$slots.default)

      if (!layerInstances || layerInstances.length === 1) {
        return
      }

      // make layers with order
      let layersId = layerInstances.map((layer, i) => {
        const component = layer.componentInstance || layer
        const id = get(component, '$data.layerId')
        const zIndex = get(component, '$props.zIndex')
        let index = i
        if (zIndex) {
          index = parseInt(zIndex) + (index / 10)
        }
        return { id, index }
      })

      layersId = orderBy(layersId, ['index'], ['asc'])
      for (let i = layersId.length; i > 1; i--) {
        const currentLayer = layersId[i - 1].id

        if (!this.map.getLayer(currentLayer)) {
          continue
          // this.$nextTick(() =>
          //   this.updateLayerOrder()
          // )
        //  return false
        }

        if (i === layersId.length) {
          this.map.moveLayer(currentLayer)
          console.log('move ' + currentLayer + ' to topmost')
        } else {
          const topLayer = layersId[i].id
          console.log('move ' + currentLayer + ' bo beneth ' + topLayer)
          this.map.moveLayer(currentLayer, topLayer)
        }
      }
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

    addImage: function (key, url) {
      if (!this.map) return
      // TODO - chek when is a htmlimage or other type
      this.map.loadImage(url, (error, image) => {
        if (error) {
          console.error(error)
        }
        if (!this.map.hasImage(key)) this.map.addImage(key, image)
      })
    },

    /**
    * Remove Source
    */
    removeLayer: function (id) {
      if (this.layers.has(id)) {
        this.layers.delete(id)
      }
      if (this.map.getLayer(id)) {
        this.map.removeLayer(id)
      }
      this.$nextTick(() =>
        this.updateLayerOrder()
      )
    },

    //   setMapEvents: function () {
    //     var _map = this.$options.map
    //     // var { MapboxLayer, HexagonLayer } = window.deck;
    //     var _t = this

    //     this.$options.map.on('style.load', function () {
    //       setTimeout(() => {
    //         _t.$store.commit('mapLoaded', true)
    //       }, 100)

    //       window.mapboxmap.flyTo({ pitch: 0, zoom: _t.zoom + 0.5, duration: 2000 })
    //     })

    //     this.$options.map.on('click', (e) => {
    //       // allox coords copy when click on shift.
    //       // need to disable on env
    //       // if(event.shiftKey){
    //       var coordnates = `[${e.lngLat.lng},${e.lngLat.lat}]`
    //       $('body').append('<input id="clipboard" style="position:absolute;z-index:0;opacity:0"/>')
    //       var copyText = document.getElementById('clipboard')
    //       copyText.value = coordnates
    //       /* Select the text field */
    //       copyText.select()
    //       /* Copy the text inside the text field */
    //       document.execCommand('Copy')
    //       /* Alert the copied text */
    //       // alert("Copied the text: " + copyText.value);
    //       $(copyText).remove()
    //       // }
    //     })

    //     this.$options.map.on('zoomend', (e) => {
    //       var map = e.target
    //       var zoomStore = this.$store.getters.zoom
    //       var zoomMap = map.getZoom()
    //       if (zoomStore != zoomMap) { this.$store.commit('zoom', zoomMap) }
    //     })
    //   },

    //   flyToPage: function (to, duration = 2000, force = false) {
    //     to = to || this.$route
    //     var camera = _.get(to, 'meta.camera', false)
    //     var id = _.get(to, 'params.id', false)

    //     var cameraSet = _.get(camera, id, camera)

    //     if (this.$store.state.initialAnimationFinish === false) { cameraSet = { center: [-47.85927131478161, -15.799714225713075], pitch: 55.00000000000001, zoom: 6.30769269135277, bearing: 0 } }

    //     if (!cameraSet) {
    //       return
    //     }

    //     setTimeout(() => { // make sure we have a delay to finish any initial setup
    //       if (this.map) {
    //         this.map.resize() // resize because the first time container may be change and the map note
    //         // just change if it is not moving
    //         if (this.map.isMoving() && force == false) {
    //           //   console.log("Map Moving, will not go to ");
    //           return
    //         } else {
    //           // console.log("Map will fly");
    //           this.map.flyTo({ ...cameraSet, duration: duration })
    //         }

    //         // tell the map has finish it first animation
    //         setTimeout(() => {
    //           if (this.$store.state.initialAnimationFinish == false) { this.$store.commit('initialAnimationFinish', true) }
    //         }, duration)
    //       }
    //     }, 100)
    //   }

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

<style lang="stylus">

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
        z-index:3

        .mapboxgl-canvas{
            left:0;
        }
    }

</style>
