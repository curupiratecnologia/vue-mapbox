/* eslint-disable eqeqeq */
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
      <!-- <div v-if='$dev' style='position:fixed;bottom:0;left:0;font-size:9px;padding:0.4em;z-index:10;background:#00000066;color:white;'>zoom:{{$store.getters.zoom}}</div> -->
    </div>
  </div>
</template>

<script>

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

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
      default: 3.8
    },
    /**
       *  Define center array.
    */
    center: {
      type: Array,
      default: () => [-53.048889, -14.951209500045001]
    },
    /**
       *  The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
    */
    bounds: {
      type: Array,
      default: () => []
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
    icons: {
      type: Object,
      default: () => ({})
    } // {'name':url,'name2':url2}

  },

  provide: function () {
    return {
      getMap: this.getMap,
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
      images: null
    }
  },

  created () {
    this.sources = new Map() // {id:{type,data,instance}}
    this.layers = new Map()
    this.images = new Map()

    // make sure the html div to use in mapbox is loaded
    this.$nextTick(() => {
      this.createMap()
    })
  },

  computed: {
    myMap: function () {
      return this.map
    },
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

  beforeUpdated () {
    console.log('beforeUpdated dom vueMapbox')
  },
  updated () {
    console.log('renderizaneo dom vueMapbox')
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
        zoom: this.zoom
        // maxBounds: [ -48.44732177294034, -16.638275455496753, -47.22472784587998, -14.904304916348181 ]
      })

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
    },

    getMap: function () {
      return this.map
    },

    /**
    * Automatic Setup Events from Mapbox Classes to Vue Instances
    */
    setupEvents: function (listners, MapboxElement, theEventsOfElement, VueInstance) {
      if (listners) {
        Object.entries(listners).forEach((item) => {
          let eventName = item[0]
          const eventFunction = item[1]
          let once = false

          if (eventName.indexOf('~') === 0) {
            once = true
            eventName = eventName.substring(1)
          }
          if (theEventsOfElement.includes(eventName)) {
            if (once) {
              MapboxElement.once(eventName, eventFunction)
            } else {
              MapboxElement.on(eventName, eventFunction)
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
      if (this.sources.get(id)) {
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
    * Create/Update Layer
    */
    addLayer: function (id, type, options) {
      // // if layer name exist, create a randow one
      if (this.layers.get(id)) {
        id = uniqueId(id + type)
      }

      this.map.addLayer({ id: id, type: type, ...options })
      const sourceObject = this.map.getLayer(id)

      this.layers.set(id, { id, type, options, instance: sourceObject })
      return id //{ id, type, options, instance: sourceObject }
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
