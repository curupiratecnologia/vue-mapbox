<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>

export default {

  name: 'VmPopup',

  marker: false,

  inject: ['getMap', 'mapboxgl'],

  props: {
    /**
       Center of Marker- It is a Dynamic properties
      */
    center: {
      type: Array,
      default: () => [0, 0]
    },
    /**
       Anchor of the marker -Options are 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' .
      */
    anchor: {
      type: String,
      default: 'center',
      validator: function (value) {
        return [
          'center',
          'top',
          'bottom',
          'left', 'right',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'].indexOf(value) !== -1
      }
    },
    /**
       Color of the default marker, if default slot is not set
    */
    color: {
      type: String,
      default: '#3FB1CE'
    },
    /**
       Offset of market in pixels
    */
    offset: {
      type: Array,
      default: () => [0, 0]
    },
    /**
       Offset of market in pixels
    */
    draggable: {
      type: Boolean,
      default: false
    },
    /**
       * Marker width if a default slot html is set
    */
    width: {
      type: [Number, String],
      default: '100%'
    },
    /**
       *  * Marker height if a default slot html is set
    */
    height: {
      type: [Number, String],
      default: '100%'
    }
  },

  mounted () {
    const options = {
      offset: this.offset,
      color: this.color,
      draggable: this.draggable
    }
    if (this.$slots.default) {
      options.element = this.$el
      // console.log(el)
    }

    this.marker = new this.mapboxgl.Marker(options)
      .setLngLat(this.center)
      .addTo(this.getMap())
  },

  watch: {
    center: function (val) {
      if (this.marker) { this.marker.setLngLat(val) }
    },
    draggable: function (val) {
      if (this.marker) { this.marker.setDraggable(val) }
    }
  },

  beforeDestroy () {
    if (this.marker) {
      this.marker.remove()
    }
  }

}

</script>
