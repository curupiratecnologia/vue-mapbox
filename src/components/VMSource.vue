<template>
    <div style="display:none">
        <slot></slot>
    </div>
</template>

<script>

export default {

  name: 'VmSource',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],

  provide: function () {
    return {
      getSource: this.getSource
    }
  },

  props: {
    /**
       Id/Name of the Source. If blank or not unique, will auto generate one for you
      */
    name: {
      type: String,
      default: '',
      required: true
    },
    /**
       Type of the Source.
       @values vector, raster, raster-dem, geojson, image, video, canvas
      */
    type: {
      type: String,
      required: true,
      default: 'geojson',
      validator: function (value) {
        return ['vector', 'raster', 'raster-dem', 'geojson', 'image', 'video', 'canvas'].indexOf(value) !== -1
      }

    },
    /**
       Object contains the options for each type of source
    */
    options: {
      type: Object,
      required: true
    }

  },

  data () {
    return {
      source: null // {id, type, options, instance}
    }
  },

  watch: {
    '$props.options': function (val) {
      if (this.type === 'geojson' && val && val.data) {
        this.source.instance.setData(val.data)
      }
    }
  },

  created: function () {
    const options = { ...this.$props.options }
    this.source = this.MapboxVueInstance.addSource(this.name, this.type, options)
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
