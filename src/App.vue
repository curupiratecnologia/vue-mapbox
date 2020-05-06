<template>
  <div id="app">
    <center>

    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="500px"
      width="800px"
      :center="center">

        <template v-slot:loader> Carregando </template>

          <vm-marker color="red" :center="[-45, -15]">
            <div> fasdfasda </div>
            <VmPopup>
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
            </VmPopup>

          </vm-marker>
    </VueMapbox>
     <button @click="drag = !drag"> draggable </button>
    <button @click="center = [-55, -15]"> draggable </button>
    <input type="text" v-model="label" />

    <!-- <VueMapbox
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      height="500px"
      width="800px">

        <template v-slot:loader> Carregando </template>

        <VmPopup :center="[-55, -11]" :open="open" :trackPointer="drag">
               {{label}}
        </VmPopup>
    </VueMapbox> -->
    </center>

      <input type="text" v-model="label" />
      <button @click="open=!open"> Toogle Open </button>
      <button @click="drag=!drag"> Toogle Traking </button>
  </div>
</template>

<script>

//  import VueMapbox from './components/VueMapbox.vue'

export default {
  name: 'App',
  data () {
    return {
      center: [-45, -15],
      drag: false,
      open: true,
      label: 'a'
    }
  },

  components: {
    VueMapbox: () => import('./components/VueMapbox.vue'),
    VmMarker: () => import('./components/VmMarker.vue'),
    VmPopup: () => import('./components/VmPopup.vue'),
    VmMarkerExample: () => import('./docsExamples/VmMarkerExample.vue')
  },

  methods: {
    alert: function () {
      console.log('aaa')
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sanssdfasdfa-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
