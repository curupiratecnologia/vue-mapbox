
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
        :legends="legends"
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
    legends: {
      default: false // [ {color,value},{color,value} ]
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
    fillColorKey: {
      default: 'value' // if set will get the value from here, if false will ignore any expression generator  at all
    },
    fillColor: {
      default: '#337734' // [[zoom | valuekey, value],[zoom,value]]
    },
    fillOutlineColorKey: {
      default: '_zoom'
    },
    fillOutlineColor: {
      default: '#448823'
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
      let finalStyle = { type: 'fill', paint: {}, layout: {} }

      finalStyle.paint['fill-antialias'] = this.$props.fillAntialias
      finalStyle.paint['fill-color'] = this.expressionGenerator(this.$props.fillColor, this.$props.fillColorKey)
      finalStyle.paint['fill-opacity'] = this.expressionGenerator(this.$props.opacity, this.$props.opacityKey)
      finalStyle.paint['fill-outline-color'] = this.expressionGenerator(this.$props.fillOutlineColor, this.$props.fillOutlineColorKey)

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
