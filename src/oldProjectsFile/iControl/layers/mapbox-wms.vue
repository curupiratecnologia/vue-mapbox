
<template>
    <mapbox-layer :name="name"
    :layerStyle="layerStyleComputed"
    :source="source" :zoomMin="Number(zoomMin)" :zoomMax="Number(zoomMax)"
    :legends="legends"
    :zIndex="zIndex" />
</template>

<script>

export default {
  props: {
    url: {
      default: 'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
    },
    name: {
      default: ''
    },
    zoomMin: {
      default: 0
    },
    zoomMax: {
      default: 20
    },
    legends: {
      default: false
    },
    zIndex: {
      default: 1
    },
    opacity: {
      default: 1
    },
    opacityKey: {
      default: '_zoom'
    },
    'raster-hue-rotate': {
      default: 0
    },
    'raster-hue-rotate-key': {
      default: '_zoom'
    },
    'raster-saturation': {
      default: 0
    },
    'raster-saturation-key': {
      default: '_zoom'
    },
    'raster-contrast': {
      default: 0
    },
    'raster-contrast-key': {
      default: '_zoom'
    }
  },

  computed: {
    layerStyleComputed: function () {
      let finalStyle = { type: 'raster', paint: {}, layout: {} }
      finalStyle.paint['raster-opacity'] = this.expressionGenerator(this.$props.opacity, this.$props.opacityKey)
      finalStyle.paint['raster-hue-rotate'] = this.expressionGenerator(this.$props.rasterHueRotate, this.$props.rasterHueRotateKey)
      finalStyle.paint['raster-saturation'] = this.expressionGenerator(this.$props.rasterSaturation, this.$props.rasterSaturationKey)
      finalStyle.paint['raster-contrast'] = this.expressionGenerator(this.$props.rasterContrast, this.$props.rasterContrastKey)
      if (this.layerStyle) {
        finalStyle = { ...finalStyle, ...this.layerStyle }
      }

      return finalStyle
    },
    source: function () {
      return {
        type: 'raster',
        tiles: [this.url],
        tileSize: 256
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
        return ['interpolate', ['linear'], ['to-number', ['get', 'value']],
						    ...value
        ]
      }
    }
  }
}

</script>
