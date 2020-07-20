<template>
    <div>
     <vm-layer
      v-if="layerCreated"
      :name="'arc'+this.name"
      :customLayer="layer"
      :zIndex="zIndex"
      type="custom"
    /> 
    </div>

</template>

<script>

import { ArcLayer } from '@deck.gl/layers'
import { MapboxLayer } from '@deck.gl/mapbox'
import get from 'lodash/get'
import has from 'lodash/has'

export default {

  name: 'VmLayerArc',
  inject: { getMap: 'getMap', mapboxgl: 'mapboxgl', MapboxVueInstance: 'MapboxVueInstance' },

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

  data () {
    return {
      layerCreated: false
    }
  },

  destroyed () {
    // if (this.getMap()) {
    //   if (this.getMap().getLayer(this.name)) {
    //     console.log('destroying Arc Layer')
    //     this.MapboxVueInstance.removeLayer(this.name)
    //   }
    // }
    this.layer = null
  },

  created: function () {
    this.layer = null
  },

  mounted: function () {
    this.$nextTick(() => {
      this.addLayer()
    })
  },

  watch: {
    '$props.data': function (val, oldval) {
      if (this.layer) this.layer.setProps({ data: val })
    },
    '$props.width': function (val, oldval) {
      if (this.layer) this.layer.setProps({ getWidth: d => this.getWidth(d) })
    }
  },

  methods: {

    addLayer: function () {
      const id = this.MapboxVueInstance.getNewIdForLayer(this.name)
      this.layer = new MapboxLayer({
        id: id,
        type: ArcLayer,
        data: this.data,
        autoHighlight: true,
        pickable: false, // TODO
        getWidth: d => this.getWidth(d),
        getSourcePosition: d => this.getSourcePositionFunc(d),
        getTargetPosition: d => this.getTargetPositionFunc(d),
        getSourceColor: d => this.getSourceColorFunc(d),
        getTargetColor: d => this.getTargetColorFunc(d)
      })

      this.layerCreated = true
      // debugger
      // this.MapboxVueInstance.addLayer(this.layer)
      // this.getMap().addLayer(this.layer)
    },

    getWidth: function (item) {
      if (typeof this.witdh === 'function') {
        return this.witdh(item)
      } else if (isNaN(this.witdh)) {
        // if not number, get a path
        return get(item, this.witdh, 5)
      }
      return this.witdh
    },

    getSourcePositionFunc: function (item) {
      let pos
      if (typeof this.sourcePosition === 'function') {
        pos = this.sourcePosition(item)
      } else {
        pos = get(item, this.sourcePosition, [-45, -15])
      }
      console.log(pos)
      return pos
    },

    getTargetPositionFunc: function (item) {
      let pos
      if (typeof this.targetPosition === 'function') {
        pos = this.targetPosition(item)
      } else {
        pos = get(item, this.targetPosition, [-45, -15])
      }
      console.log(pos)
      return pos
    },

    getSourceColorFunc: function (item) {
      let color

      if (!this.sourceColor) {
        color = this.color
      }
      if (typeof this.sourceColor === 'function') {
        color = this.sourceColor(item)
      } else if (has(item, this.sourceColor)) {
        color = get(item, this.sourceColor)
      } else {
        color = this.sourceColor
      }
      return this.convertToArray(color)
    },

    getTargetColorFunc: function (item) {
      let color
      if (!this.targetColor) {
        color = this.color
      }
      if (typeof this.targetColor === 'function') {
        color = this.targetColor(item)
      } else if (has(item, this.targetColor)) {
        color = get(item, this.targetColor)
      } else {
        color = this.targetColor
      }
      return this.convertToArray(color)
    },

    convertToArray: function hexToRgb (hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b
      })

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ] : [0, 0, 0]
    }

  }

}
</script>

<style>

</style>
