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
    /*
    * If unique, check if a source with that name exist. If exist, we will use it, and not generate a new one
    */
    unique: {
      type: Boolean,
      default: false
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
    '$props.options': function (val, oldval) {
      if (this.type === 'geojson' && val && val.data) {
        this.source.instance.setData(val.data)
      } else if (JSON.stringify(val) !== JSON.stringify(oldval)) {
        this.source = this.MapboxVueInstance.updateSource(this.source.id, this.type, { ...val })
      }
    }
  },

  created: function () {
    const options = { ...this.$props.options }
    if (this.unique && this.MapboxVueInstance().getSource(this.name)) {
      this.source = this.MapboxVueInstance().getSource(this.name)
    } else {
      this.source = this.MapboxVueInstance.addSource(this.name, this.type, options)
    }
  },

  methods: {
    getSource: function () {
      return this.source
    }
  },

  beforeDestroy () {
    if (this.source) {
      // this.MapboxVueInstance.removeSource(this.source.id)
      this.source = null
    }
  }

}

</script>
