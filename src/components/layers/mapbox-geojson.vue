<template>
    <div><slot></slot></div>
</template>

<script>

import layer from '../mixins/mapboxLayerMixin.js'

export default {

  mixins: [layer],

  props: ['name', 'layerStyle', 'geoJSON', 'mvt', 'layer'],

  data () {
    return {
    }
  },

  created () {
    this.$options.name = this.name
    // this.style = this.style;
  },

  // computed:{
  //     geoJSON:function(){
  //         return this.$store.getters.courses;
  //     },
  // },

  watch: {
    geoJSON: function () {
      // this.animateLine(4, false)
    }

  },

  methods: {

  }

  // style: function () {
  //     return {
  //         "id": "percurso",
  //         "type": "line",
  //         // "source": "percurso",
  //         "layout": {
  //             "line-join": "round",
  //             "line-cap": "round"
  //         },
  //         "paint": {
  //             "line-dasharray": {
  //                 "base": 1,
  //                 "stops": [
  //                     [11, [4, 0]],
  //                     [12, [3, 2]]
  //                 ]
  //             },
  //             "line-color": {
  //                 "base": 1,
  //                 "stops": [
  //                     [9, '#333333'],
  //                     [11, '#ff8f00']
  //                 ]
  //             },
  //             "line-width": {
  //                 "base": 1,
  //                 "stops": [
  //                     [9, 1],
  //                     [15, 3],
  //                 ]
  //             },
  //             "line-opacity": {
  //                 "base": 1,
  //                 "stops": [
  //                     [9, 0.2],
  //                     [11, 1]
  //                 ]
  //             },
  //         }
  //     }
  // }

}

</script>
