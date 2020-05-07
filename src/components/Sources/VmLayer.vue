<template>
    <div style="display:none">
        <slot></slot>
    </div>
</template>

<script>

export default {

  name: 'VmLayer',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance', 'getSource'],

  props: {
    /**
       ID/Name of the Layer. If blank or not unique, will auto generate one for you
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
        return ['fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', 'background'].indexOf(value) !== -1
      }
    },
    /**
       The data source for the layer. Reference a source that has already been defined using the source's unique id. Reference a new source using a source object (as defined in the Mapbox Style Specification ) directly.
      */
    source: {
      type: [String, Object],
      required: true,
      default: ''
    },
    /**
       The name of the source layer within the specified layer.source to use for this style layer. This is only applicable for vector tile sources and is required when layer.source is of the type vector .
    */
    sourceLayer: {
      type: String,
      default: ''
    },
    /**
       Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance.
      */
    filter: {
      type: Array,
      default: () => ([])
    },
    /**
      Paint properties for the layer. Available paint properties vary by layer.type . A full list of paint properties for each layer type is available in the Mapbox Style Specification . If no paint properties are specified, default values will be used.
      */
    paint: {
      type: Object,
      default: () => ({})
    },
    /**
      Layout properties for the layer. Available layout properties vary by layer.type . A full list of layout properties for each layer type is available in the Mapbox Style Specification . If no layout properties are specified, default values will be used.
      */
    layout: {
      type: Object,
      default: () => ({})
    },
    /**
      Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered).
    */
    maxzoom: {
      type: Number,
      default: 24
    },
    /**
      The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. The value can be any number between 0 and 24 (inclusive). If no minzoom is provided, the layer will be visible at all zoom levels for which there are tiles available.
    */
    minzoom: {
      type: Number,
      default: 0
    },
    /**
      Arbitrary properties useful to track with the layer, but do not influence rendering.
    */
    metadata: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      layerId: null // cant save instance becauce it give error
    }
  },

  watch: {
    // geoJsonData: function (val) {
    //   this.source.instance.setData(val)
    // }
  },

  created: function () {
    const options = { ...this.$props }
    delete options.name
    delete options.type
    if (options.filter.length === 0) { delete options.filter }
    if (options.sourceLayer === '') { delete options.sourceLayer }

    if (options.source === '') {
      const source = this.getSource()
      if (source && source.id) {
        options.source = source.id
      }
    }
    const mylayer = this.MapboxVueInstance.addLayer(this.name, this.type, { ...options })
    this.layerId = mylayer

    const map = this.getMap()
    var hoveredStateId = null
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', this.name, function (e) {
      if (e.features.length > 0) {
        if (hoveredStateId) {
          map.setFeatureState(
            { source: options.source, id: hoveredStateId },
            { hover: false }
          )
        }
        hoveredStateId = e.features[0].id
        map.setFeatureState(
          { source: options.source, id: hoveredStateId },
          { hover: true }
        )
      }
    })

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', this.name, function () {
      if (hoveredStateId) {
        map.setFeatureState(
          { source: 'states', id: hoveredStateId },
          { hover: false }
        )
      }
      hoveredStateId = null
    })
  },

  beforeDestroy () {
    // if (this.source) {
    //   this.MapboxVueInstance.removeSource(this.source.id)
    //   this.source = null
    // }
  }

}

</script>
