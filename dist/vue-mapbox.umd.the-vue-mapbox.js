((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox"] || []).push([[1],{

/***/ "4b19":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b19");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueMapbox_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ccd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49875d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueMapbox.vue?vue&type=template&id=727de603&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-mapbox",style:({ position:'relative', width: _vm.myWidth, height: _vm.myHeight })},[_c('div',{ref:"mapabaselayer",staticClass:"map-layer mapbox-map-container",attrs:{"id":"mapaBaseLayer"}},[(_vm.mapLoaded)?_c('div',[_vm._t("default")],2):_vm._e(),(_vm.showLoader && !_vm.mapLoaded)?_c('div',{staticClass:"loader"},[_vm._t("loader")],2):_vm._e(),(_vm.devMode)?_c('div',{staticStyle:{"position":"absolute","bottom":"0","font-size":"9px","padding":"0.4em","z-index":"10","background":"#00000066","color":"white"}},[_vm._v(_vm._s(_vm.camera))]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueMapbox.vue?vue&type=template&id=727de603&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("4ec9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.css
var mapbox_gl = __webpack_require__("ac6d");

// EXTERNAL MODULE: ./src/utils/findVNodeChildren.js
var findVNodeChildren = __webpack_require__("9f3c");

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__("9b02");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__("93c6");
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__("b047c");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__("98dc");
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueMapbox.vue?vue&type=script&lang=js&

















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // inicia os webworks etc antes, para performance de mapax construidos e destruidos
// import { ScatterplotLayer, ArcLayer, HexagonLayer } from '@deck.gl/layers'
// import { MapboxLayer } from '@deck.gl/mapbox'
// import mapBaseStyle from './styles/cgeestyle'

var nativeEventsTypes = ['click', 'dblclick', 'mouseenter', 'mouseleave', 'mouseout', 'mousedown', 'mouseup', 'contextmenu', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoom', 'zoomend', 'rotatestart', 'rotate', 'rotateend', 'pitchstart', 'pitch', 'pitchend', 'boxzoomstart', 'boxzoomend', 'boxzoomcancel', 'webglcontextlost', 'webglcontextrestored', 'load', 'render', 'idle', 'error', 'data', 'styledata', 'sourcedata', 'dataloading', 'styledataloading', 'sourcedataloading', 'styleimagemissing'];
/* harmony default export */ var VueMapboxvue_type_script_lang_js_ = ({
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
      default: function _default() {
        return [-53.048889, -14.951209500045001];
      }
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
      default: function _default() {
        return {};
      }
    },

    /**
       *  Object with images to load in format {'imagename':url,'image2name':url2}
    */
    images: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // {'name':url,'name2':url2}

    /**
       *  show cameras attributes
    */
    devMode: {
      type: Boolean,
      default: false
    } // {'name':url,'name2':url2}

  },
  provide: function provide() {
    var _this2 = this;

    return {
      getMap: function getMap() {
        return _this2.map;
      },
      mapLoaded: this.mapLoaded,
      mapboxgl: function mapboxgl() {
        return _this2.mapboxgl;
      },
      MapboxVueInstance: this
    };
  },
  data: function data() {
    return {
      /**
       *  Set When Map Style is Loaded
      */
      mapLoaded: false,
      map: null,
      sources: null,
      layers: null,
      camera: ''
    };
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    var _this3 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var mapboxgl;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (window.mapboxgl) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return __webpack_require__.e(/* import() | mapboxgl-core */ 2).then(__webpack_require__.t.bind(null, "e192", 7));

            case 3:
              mapboxgl = _context.sent;
              window.mapboxgl = mapboxgl.default || mapboxgl;

            case 5:
              _this3.mapboxgl = window.mapboxgl;
              window.mapboxgl.prewarm();
              _this3.sources = new Map(); // {id:{type,data,instance}}

              _this3.layers = new Map(); //
              // this.images = new Map() //

              _this3.layersGroups = new Map(); //

              _this3.eventsOnMap = new Map(); //
              // make sure the html div to use in mapbox is loaded

              _this3.$nextTick(function () {
                _this3.createMap();
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    myHeight: function myHeight() {
      var h = this.height;

      if (typeof h === 'number') {
        h += 'px';
      }

      return h;
    },
    myWidth: function myWidth() {
      var w = this.width;

      if (typeof w === 'number') {
        w += 'px';
      }

      return w;
    }
  },
  watch: {
    bounds: function bounds(val) {
      // var newCameraTransform = this.map.cameraForBounds(val, {
      //   padding: { top: 10, bottom: 25, left: 15, right: 5 }
      // })
      this.map.fitBounds(val, {
        padding: this.padding
      });
    },
    maxBounds: function maxBounds(val) {
      if (this.map) {
        this.map.setMaxBounds(val);
      }
    }
  },
  beforeUpdated: function beforeUpdated() {
    console.log('beforeUpdated dom vueMapbox');
  },
  mounted: function mounted() {
    console.log('Mounted - Mounted dom vueMapbox'); // this.$nextTick(() => {
    //   this.updateLayerOrder()
    // })
  },
  updated: function updated() {
    var _this4 = this;

    console.log('Updated - updated dom vueMapbox');
    this.$nextTick(function () {
      _this4.updateLayerOrder();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    createMap: function createMap() {
      var _this5 = this;

      window.mapboxgl.prewarm();

      if (this.accessToken !== '') {
        window.mapboxgl.accessToken = this.accessToken;
      } else if (true) {
        window.mapboxgl.accessToken = "pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA";
      }

      this.map = new window.mapboxgl.Map(Object(objectSpread2["a" /* default */])({}, this.otherOptions, {
        container: this.$refs.mapabaselayer,
        refreshExpiredTiles: false,
        antialias: true,
        style: this.mapStyle,
        center: this.center,
        zoom: this.zoom,
        hash: this.hash,
        bounds: this.bounds,
        maxBounds: this.maxBounds // maxBounds: [ -48.44732177294034, -16.638275455496753, -47.22472784587998, -14.904304916348181 ]

      }));
      this.addPropsImages();
      this.setupEvents(this.$listeners, this.map, nativeEventsTypes);
      this.map.on('load', function () {
        var _this = _this5;
        /**
         * Load Event - When Maps Load
         *  @property {object} _this the component instance
          * @property {object} map the mapbox instance
         */

        _this5.$emit('load', _this, _this5.map);

        _this5.mapLoaded = true;
      });

      if (this.devMode) {
        this.map.on('moveend', function () {
          _this5.camera = _this5.map.getZoom();
        });
      }
    },
    getMap: function getMap() {
      return this.map;
    },

    /**
    * Automatic Setup Events from Mapbox Classes in Vue Instances
    */
    setupEvents: function setupEvents(listners, MapboxElement, theEventsOfElement, layerId) {
      var _this6 = this;

      if (listners) {
        Object.entries(listners).forEach(function (item) {
          var eventName = item[0];
          var eventFunction = item[1];

          var eventFinal = function eventFinal(e) {
            eventFunction(e, _this6.map, _this6);
          };

          var once = false;

          if (eventName.indexOf('~') === 0) {
            once = true;
            eventName = eventName.substring(1);
          }

          if (theEventsOfElement.includes(eventName)) {
            if (once) {
              if (layerId) {
                MapboxElement.once(eventName, layerId, eventFinal);
              } else {
                MapboxElement.once(eventName, eventFinal);
              }
            } else {
              if (layerId) {
                MapboxElement.on(eventName, layerId, eventFinal);
              } else {
                MapboxElement.on(eventName, eventFinal);
              }
            }
          }
        });
      }
    },

    /**
    * Create/Update Source
    */
    addSource: function addSource(id, type, options) {
      // if source name exist, create a randow one
      if (this.map.getSource(id)) {
        id = uniqueId_default()(id + type);
      }

      this.map.addSource(id, Object(objectSpread2["a" /* default */])({
        type: type
      }, options));
      var sourceObject = this.map.getSource(id);
      this.sources.set(id, {
        id: id,
        type: type,
        options: options,
        instance: sourceObject
      });
      return this.sources.get(id);
    },

    /**
    * Remove Source
    */
    removeSource: function removeSource(id) {// if (this.sources.has(id)) {
      //   this.sources.delete(id)
      // }
      // if (this.map && this.map.getSource(id)) {
      //   this.map.removeSource(id)
      // }
    },

    /**
    * Update Source
    */
    updateSource: function updateSource(sourceid, type, options) {
      var _this7 = this;

      debugger;

      if (this.sources.has(sourceid)) {
        this.sources.delete(sourceid);
      } // apago todos os layers que tem esse source


      var layers = this.map.getStyle().layers;
      layers.forEach(function (layer) {
        if (layer.source === sourceid) {
          _this7.map.removeLayer(layer.id);
        }
      }); // apago o source

      this.map.removeSource(sourceid); // adiciono o novo source no com mesmo is

      var source = this.addSource(sourceid, type, options); // adiciono os layer novamente

      layers.forEach(function (layer, i) {
        if (layer.source === sourceid) {
          var beforeLayer = layers === null || layers === void 0 ? void 0 : layers[i - 1];

          if (beforeLayer) {
            _this7.map.addLayer(layer, beforeLayer.id);
          } else {
            _this7.map.addLayer(layer);
          }
        }
      });
      return source;
    },
    getNewIdForLayer: function getNewIdForLayer(name) {
      var id = name;

      if (!this.map.getLayer(name)) {
        id = uniqueId_default()('layer' + name);
      }

      return id;
    },

    /**
    * Create/Update Layer
    */
    addLayerTemp: function addLayerTemp(options) {
      this.map.addLayer(options);
    },

    /**
    * Create/Update Layer
    */
    addLayer: function addLayer(options, zIndex) {
      var _this8 = this;

      // // if layer name exist, create a randow one
      var id = options.id;
      this.map.addLayer(options);
      var sourceObject = this.map.getLayer(options.id);
      this.layers.set(id, {
        id: id
      });
      this.$nextTick(function () {
        return _this8.updateLayerOrder();
      }); // when idle because some time the layer get time to be added

      this.map.once('idle', function () {
        console.log('A styledata event occurred.');

        _this8.$nextTick(function () {
          return _this8.updateLayerOrder();
        });
      });
      return id;
    },

    /**
    * Update All Layers Order
    */
    updateLayerOrder: debounce_default()(function () {
      console.log('UPDATE LAYER ORDER ==============================================================================');

      var findLayers = function findLayers(VNode, bag) {
        bag = bag || [];

        if (Array.isArray(VNode)) {
          VNode.forEach(function (node) {
            findLayers(node, bag);
          });
          return bag;
        } // I will allways get the component instance


        var VNodeInstance;

        if (get_default()(VNode, 'componentInstance')) {
          VNodeInstance = get_default()(VNode, 'componentInstance');
        } else {
          VNodeInstance = VNode;
        }

        if (get_default()(VNodeInstance, '$options.name', get_default()(VNodeInstance, 'componentOptions.Ctor.options.name')) === 'VmLayer') {
          bag.push(VNodeInstance);
        }

        var children = get_default()(VNodeInstance, '$children');

        if (Array.isArray(children)) {
          children.forEach(function (node) {
            findLayers(node, bag);
          });
        }

        return bag;
      };

      var layerInstances = findLayers(this.$slots.default);

      if (!layerInstances || layerInstances.length === 1) {
        return;
      } // make layers with order


      var layersId = layerInstances.map(function (layer, i) {
        var component = layer.componentInstance || layer;
        var id = get_default()(component, '$data.layerId');
        var zIndex = get_default()(component, '$props.zIndex');
        var index = i;

        if (zIndex) {
          index = parseInt(zIndex) + index / 10;
        }

        return {
          id: id,
          index: index
        };
      });
      layersId = orderBy_default()(layersId, ['index'], ['asc']);
      var currentLayers = this.map.getStyle().layers; // get index of first layer in

      for (var i = layersId.length; i > 1; i--) {
        var currentLayer = layersId[i - 1].id;

        if (!this.map.getLayer(currentLayer)) {
          continue;
        }

        if (i === layersId.length) {
          // if (currentLayers[currentLayers.length - 1].id !== currentLayer) {
          this.map.moveLayer(currentLayer); // }
        } else {
          // get index of layer
          // const index = currentLayers.findIndex(l => l.id === currentLayer)
          // const beforeLayerId = currentLayers[index - 1].id
          var topLayer = layersId[i].id;

          if (!this.map.getLayer(topLayer)) {
            continue;
          }

          this.map.moveLayer(currentLayer, topLayer);
        }
      }
    }, 400),

    /**
    * Update Layers Index
    */
    moveLayer: function moveLayer(id, zIndex) {// // if layer name exist, create a randow one
    },

    /**
    Adde images in map
    * @params {object} images.
    */
    addPropsImages: function addPropsImages(images) {
      var _this9 = this;

      if (!this.map) return;
      images = images || this.images;
      Object.entries(images).forEach(function (item) {
        var key = item[0];
        var value = item[1];

        _this9.addImage(key, value);
      });
    },

    /**
    Add images in map
    * @params {object} images.
    */
    addImage: function addImage(key, url) {
      var _this10 = this;

      if (!this.map) return; // TODO - chek when is a htmlimage or other type

      this.map.loadImage(url, function (error, image) {
        if (error) {
          console.error(error);
        }

        if (!_this10.map.hasImage(key)) _this10.map.addImage(key, image);
      });
    },

    /**
    * Remove Source
    */
    removeLayer: function removeLayer(id) {
      var _this11 = this;

      if (!this.map) return;

      if (this.layers.has(id)) {
        this.layers.delete(id);
      }

      if (this.map.getLayer(id)) {
        this.map.removeLayer(id);
      }

      this.$nextTick(function () {
        return _this11.updateLayerOrder();
      });
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
    docEvents: function docEvents() {
      this.$emit('click');
      this.$emit('dblclick');
      this.$emit('mouseenter');
      this.$emit('mouseleave');
      this.$emit('mouseout');
      this.$emit('contextmenu');
      this.$emit('wheel');
      this.$emit('touchstart');
      this.$emit('touchend');
      this.$emit('touchmove');
      this.$emit('touchcancel');
      this.$emit('movestart');
      this.$emit('move');
      this.$emit('moveend');
      this.$emit('dragstart');
      this.$emit('drag');
      this.$emit('dragend');
      this.$emit('zoomstart');
      this.$emit('zoom');
      this.$emit('zoomend');
      this.$emit('rotatestart');
      this.$emit('rotate');
      this.$emit('rotateend');
      this.$emit('pitchstart');
      this.$emit('pitch');
      this.$emit('pitchend');
      this.$emit('boxzoomstart');
      this.$emit('boxzoomend');
      this.$emit('boxzoomcancel');
      this.$emit('webglcontextlost');
      this.$emit('webglcontextrestored');
      this.$emit('load');
      this.$emit('render');
      this.$emit('idle');
      this.$emit('error');
      this.$emit('data');
      this.$emit('styledata');
      this.$emit('sourcedata');
      this.$emit('dataloading');
      this.$emit('styledataloading');
      this.$emit('sourcedataloading');
      this.$emit('styleimagemissing');
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueMapbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueMapboxvue_type_script_lang_js_ = (VueMapboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueMapbox.vue?vue&type=style&index=0&lang=stylus&
var VueMapboxvue_type_style_index_0_lang_stylus_ = __webpack_require__("bc10");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/VueMapbox.vue






/* normalize component */

var VueMapbox_component = Object(componentNormalizer["a" /* default */])(
  components_VueMapboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueMapbox = __webpack_exports__["default"] = (VueMapbox_component.exports);

/***/ })

}]);
//# sourceMappingURL=vue-mapbox.umd.the-vue-mapbox.js.map