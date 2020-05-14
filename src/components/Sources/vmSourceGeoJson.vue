<template>
    <div style="display:none">
        <slot></slot>
    </div>
</template>

<script>

import getOnlyMapboxProps from '@/utils/getOnlyMapboxProps'

export default {

  name: 'VmSourceGeoJson',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],

  provide: function () {
    return {
      getSource: this.getSource
    }
  },

  props: {
    /**
       **Id/Name of the Source. If blank or not unique, will auto generate one for you**
      */
    name: {
      type: String,
      default: ''
    },
    /**
       Url or GeoJsonObject (Dynamic)
      */
    geoJsonData: {
      default: ''
    },
    /**
       Contains an attribution to be displayed when the map is shown to a user.
      */
    attribution: {
      type: String,
      mapbox: true
    },
    /**
       Size of the tile buffer on each side. A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself. Larger values produce fewer rendering artifacts near tile edges and slower performance.
      */
    buffer: {
      type: Number,
      default: 128,
      mapbox: true
    },
    /**
      If the data is a collection of point features, setting this to true clusters the points by radius into groups. Cluster groups become new Point features in the source with additional properties. [more info](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)
      */
    cluster: {
      type: Boolean,
      default: false,
      mapbox: true
    },
    /**
      Max zoom on which to cluster points if clustering is enabled. Defaults to one zoom less than maxzoom (so that last zoom features are not clustered).
    */
    clusterMaxZoom: {
      type: Number,
      mapbox: true
    },
    /**
      Radius of each cluster if clustering is enabled. A value of 512 indicates a radius equal to the width of a tile. Default 50
    */
    clusterRadius: {
      type: Number,
      mapbox: true
    },
    /**
      Whether to generate ids for the geojson features. When enabled, the feature.id property will be auto assigned based on its index in the features array, over-writing any previous values.
    */
    generateId: {
      type: Boolean,
      mapbox: true
    },
    /**
     A property to use as a feature id (for feature state). Either a property name, or an object of the form {<sourceLayer>: <propertyName>}.
    */
    promoteId: {
      type: [String, Object],
      mapbox: true
    },
    /**
     Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels).
    */
    maxzoom: {
      type: Number,
      default: 24
    },
    /**
     Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance).
    */
    tolerance: {
      type: Number,
      default: 0.375
    }

  },

  data () {
    return {
      source: null // {id, type, options, instance}
    }
  },

  watch: {
    geoJsonData: function (val) {
      this.source.instance.setData(val)
    }
  },

  created: function () {
    const options = getOnlyMapboxProps(this)
    this.source = this.MapboxVueInstance.addSource(this.name, 'geojson', { data: this.$props.geoJsonData, ...options })

    // TODO - include other geojson sources methods
  },

  methods: {
    getSource: function () {
      return this.source
    }
  },

  beforeDestroy () {
    if (this.source) {
      this.MapboxVueInstance.removeSource(this.source.id)
      this.source = null
    }
  }

}

</script>
