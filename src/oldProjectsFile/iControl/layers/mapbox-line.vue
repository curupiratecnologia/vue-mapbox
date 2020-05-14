
<template>
    <mapbox-layer
        :layerStyle="layerStyleComputed"
        :source="false"
        :name="name"
        :zoomMin="zoomMin"
        :zoomMax="zoomMax"
        :zIndex="zIndex"
        :geoJSON="geoJSON"
        :mvt="calculateMvt"
        :sourceLayer="calculateLayer"
        />
</template>

<script>

export default {
  props: {
    name: {},
    pangea: {
      default: false // a mvt url or set a geojson url
    },
    mvt: {
      default: false // a mvt url or set a geojson url
    },
    layer: {
      default: false
    },
    geoJSON: {
      default: false // geoJSOn or geoJSON url
    },
    zoomMin: {
      default: 0
    },
    zoomMax: {
      default: 22
    },
    zIndex: {
      default: 1
    },
    layerStyle: {
      default: false // Set a manual layer style that will be merged
    },
    lineColorKey: {
      default: '_zoom' // if set will get the value from here, if false will ignore any expression generator  at all
    },
    lineColor: {
      default: '#666666' // [[zoom | valuekey, value],[zoom,value]]
    },
    lineWidthKey: {
      default: '_zoom'
    },
    'line-width': {
      default: 2
    },
    fillAntialias: {
      default: false
    },
    opacityKey: {
      default: '_zoom'
    },
    opacity: {
      default: 1 // [[zoom | valuekey, value],[zoom,value]]
    }

  },

  computed: {
    layerStyleComputed: function () {
      let finalStyle = { type: 'line', paint: {}, layout: {} }

      finalStyle.paint['line-color'] = this.expressionGenerator(this.$props.lineColor, this.$props.lineColorKey)
      finalStyle.paint['line-width'] = this.expressionGenerator(this.$props.lineWidth, this.$props.lineWidthKey)
      finalStyle.paint['line-opacity'] = this.expressionGenerator(this.$props.opacity, this.$props.opacityKey)

      if (this.layerStyle) {
        finalStyle = { ...finalStyle, ...this.layerStyle }
      }

      return finalStyle
    },

    calculateMvt: function () {
      if (this.pangea) {
        return `${this.$PANGEA}tile/${this.pangea}/{z}/{x}/{y}.mvt`
      } else {
        return this.mvt
      }
    },

    calculateLayer: function () {
      if (this.pangea) {
        return this.pangea
      } else {
        return this.layer
      }
    }

  },

  methods: {
    expressionGenerator: function (value, key) {
      if (key == false || value == false || (value && value.constructor !== Array)) {
        return value
      }

      if (key === '_zoom') {
        return [
          'interpolate', ['linear'], ['zoom'],
          ...value
        ]
      } else {
        return ['interpolate', ['linear'], ['to-number', ['get', key]],
						    ...value
        ]
      }
    }
  }

}

</script>
