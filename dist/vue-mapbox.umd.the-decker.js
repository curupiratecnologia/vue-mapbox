((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_mapbox"] || []).push([[0],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "ed81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49875d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmLayerArc.vue?vue&type=template&id=21bff847&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.layerCreated)?_c('vm-layer',{attrs:{"name":'arc'+this.name,"customLayer":_vm.layer,"zIndex":_vm.zIndex,"type":"custom"}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VmLayerArc.vue?vue&type=template&id=21bff847&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer.js + 3 modules
var arc_layer = __webpack_require__("60a4");

// EXTERNAL MODULE: ./node_modules/@deck.gl/mapbox/dist/esm/mapbox-layer.js + 61 modules
var mapbox_layer = __webpack_require__("4278");

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__("9b02");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__("3852");
var has_default = /*#__PURE__*/__webpack_require__.n(has);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VmLayerArc.vue?vue&type=script&lang=js&




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





/* harmony default export */ var VmLayerArcvue_type_script_lang_js_ = ({
  name: 'VmLayerArc',
  inject: {
    getMap: 'getMap',
    mapboxgl: 'mapboxgl',
    MapboxVueInstance: 'MapboxVueInstance'
  },
  props: {
    /** Unique Name of the layers */
    name: {
      type: String,
      required: true
    },

    /**
       (Dynamic) If Number, is order of the layer. Can set the Name of the layer to put after
    */
    zIndex: {
      type: [Number, String]
    },

    /** Data Item
     * @values Array of object item that have key for from point and to point, as weel as colors, with
    */
    data: {
      type: Array,
      required: true
    },

    /** With Arcs
     * @values number or function thad will get item from data
    */
    witdh: {
      type: [Number, Function],
      default: 10
    },

    /** color
     * @values color to use. If sourceColor os destinationColor defined, this will be ignore
    */
    color: {
      type: String,
      default: 'blue'
    },

    /** sourceColor
     * @values number or function thad will get item from data
    */
    sourceColor: {
      type: [String, Function]
    },

    /** sourceColor
     * @values number or function thad will get item from data
    */
    targetColor: {
      type: [String, Function]
    },

    /** getSourcePosition
     * @values function or path thad will get item from data
    */
    sourcePosition: {
      type: [String, Function],
      default: 'from'
    },

    /** getSourcePosition
     * @values function or path thad will get item from data
    */
    targetPosition: {
      type: [String, Function],
      default: 'to'
    }
  },
  data: function data() {
    return {
      layerCreated: false,
      id: false
    };
  },
  destroyed: function destroyed() {
    // if (this.getMap()) {
    //   if (this.getMap().getLayer(this.name)) {
    //     console.log('destroying Arc Layer')
    //     this.MapboxVueInstance.removeLayer(this.name)
    //   }
    // }
    this.layer = null;
  },
  created: function created() {
    this.layer = null;
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.addLayer();
    });
  },
  watch: {
    '$props.data': function $propsData(val, oldval) {
      if (this.layer) this.layer.setProps({
        data: this.data
      }); // if (this.decklayer) this.decklayer.setProps({ layers: this.createLayer() })
    },
    '$props.width': function $propsWidth(val, oldval) {
      var _this2 = this;

      if (this.layer) this.layer.setProps({
        getWidth: function getWidth(d) {
          return _this2.getWidth(d);
        }
      }); // if (this.decklayer) this.decklayer.setProps({ layers: this.createLayer() })
    }
  },
  methods: {
    addLayer: function addLayer() {
      var _this3 = this;

      this.id = this.MapboxVueInstance.getNewIdForLayer(this.name); // this.decklayer = new Deck({
      //   gl: this.MapboxVueInstance.getMap().painter.context.gl,
      //   layers: this.createLayer()
      // })

      this.layer = new mapbox_layer["a" /* default */]({
        id: this.id,
        type: arc_layer["a" /* default */],
        data: this.data,
        autoHighlight: true,
        pickable: true,
        // TODO
        getWidth: function getWidth(d) {
          return _this3.getWidth(d);
        },
        getSourcePosition: function getSourcePosition(d) {
          return _this3.getSourcePositionFunc(d);
        },
        getTargetPosition: function getTargetPosition(d) {
          return _this3.getTargetPositionFunc(d);
        },
        getSourceColor: function getSourceColor(d) {
          return _this3.getSourceColorFunc(d);
        },
        getTargetColor: function getTargetColor(d) {
          return _this3.getTargetColorFunc(d);
        }
      });
      this.layerCreated = true; // debugger
      // this.MapboxVueInstance.addLayer(this.layer)
      // this.getMap().addLayer(this.layer)
    },
    getWidth: function getWidth(item) {
      if (typeof this.witdh === 'function') {
        return this.witdh(item);
      } else if (isNaN(this.witdh)) {
        // if not number, get a path
        return get_default()(item, this.witdh, 5);
      }

      return this.witdh;
    },
    getSourcePositionFunc: function getSourcePositionFunc(item) {
      var pos;

      if (typeof this.sourcePosition === 'function') {
        pos = this.sourcePosition(item);
      } else {
        pos = get_default()(item, this.sourcePosition, [-45, -15]);
      }

      console.log(pos);
      return pos;
    },
    getTargetPositionFunc: function getTargetPositionFunc(item) {
      var pos;

      if (typeof this.targetPosition === 'function') {
        pos = this.targetPosition(item);
      } else {
        pos = get_default()(item, this.targetPosition, [-45, -15]);
      }

      console.log(pos);
      return pos;
    },
    getSourceColorFunc: function getSourceColorFunc(item) {
      var color;

      if (!this.sourceColor) {
        color = this.color;
      }

      if (typeof this.sourceColor === 'function') {
        color = this.sourceColor(item);
      } else if (has_default()(item, this.sourceColor)) {
        color = get_default()(item, this.sourceColor);
      } else {
        color = this.sourceColor;
      }

      return this.convertToArray(color);
    },
    getTargetColorFunc: function getTargetColorFunc(item) {
      var color;

      if (!this.targetColor) {
        color = this.color;
      }

      if (typeof this.targetColor === 'function') {
        color = this.targetColor(item);
      } else if (has_default()(item, this.targetColor)) {
        color = get_default()(item, this.targetColor);
      } else {
        color = this.targetColor;
      }

      return this.convertToArray(color);
    },
    convertToArray: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
    }
  },
  createLayer: function createLayer() {
    var _this4 = this;

    return [new arc_layer["a" /* default */]({
      id: this.id,
      data: this.data,
      autoHighlight: true,
      pickable: true,
      // TODO
      getWidth: function getWidth(d) {
        return _this4.getWidth(d);
      },
      getSourcePosition: function getSourcePosition(d) {
        return _this4.getSourcePositionFunc(d);
      },
      getTargetPosition: function getTargetPosition(d) {
        return _this4.getTargetPositionFunc(d);
      },
      getSourceColor: function getSourceColor(d) {
        return _this4.getSourceColorFunc(d);
      },
      getTargetColor: function getTargetColor(d) {
        return _this4.getTargetColorFunc(d);
      }
    })];
  }
});
// CONCATENATED MODULE: ./src/components/VmLayerArc.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VmLayerArcvue_type_script_lang_js_ = (VmLayerArcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/VmLayerArc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VmLayerArcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VmLayerArc = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=vue-mapbox.umd.the-decker.js.map