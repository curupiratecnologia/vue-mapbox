<template>
  <div id="app">
    <center>
      <VueMapbox mapStyle="mapbox://styles/mapbox/dark-v10" height="700px" width="900px" :images="images"
        :center="[-45, -15]">

        <!-- <vmLayer name="myLayer" :source="{
            type:'vector',
            tiles:[`http://167.99.58.243/tile/estado/{z}/{x}/{y}.mvt`],
            minzoom: 0,
            maxzoom: 20,
           }" source-layer="estado" type="fill" :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
          :paint-hover="{ 'fill-color': 'red', 'fill-opacity': 1  }"
          :paint-click="{ 'fill-color': 'blue', 'fill-opacity': 1   }">
          <template #popupHover>
            <vm-popup max-width="400px">
              <h6> POPUP ESTADOSSSSS ****************************</h6>
            </vm-popup>
          </template>
        </VmLayer>

        <vmLayer name="myLayer"
          :source="{type:'geojson',  generateId:true, data: 'http://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4' }"
          type="fill" :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
          :paint-hover="{ 'fill-color': fill, 'fill-opacity': 1  }"
          :paint-click="{ 'fill-color': 'blue', 'fill-opacity': 1   }" multipleFeatureSelectionOn="alt"
          @dblclick="featureenter">

          <template v-slot:popupHover>
            <vm-popup max-width="400px">
              <h6> Here goes the pop up content while in <b>HOVER</b> a Feature.</h6>
            </vm-popup>
          </template>

          <template v-slot:popupClick="slotProps">
            <VmPopup max-width="400px">

              <h6>click the slots props of everythink </h6>
            </VmPopup>
          </template>

        </vmLayer>

        <VmSource name="estudosdecaso" type="geojson"
          :options="{ data: 'geojson/estudosdecaso.json', generateId:true, promoteId:'id' }">
          <VmLayer type="line" :maxzoom="24" :minzoom="9" :filter="['==', '$type', 'LineString']" :paint="{
                        'line-color':'white',
                        'line-dasharray':[3,3],

                    }">
            <template v-slot:popupHover>
              <vm-popup max-width="400px">
                <h6> Here goes the pop up content while in <b>HOVER</b> a Feature.</h6>
              </vm-popup>
            </template>

          </VmLayer>

          <VmLayer type="symbol" name="estudosdecaso" :maxzoom="24" :minzoom="0" :filter="['==', '$type', 'Point']"
            :paint="{
                    }" :layout="{
                        'icon-anchor':['match',['get','type'],'circle', 'center','marker','bottom', 'center'],
                        'icon-size': [ 'interpolate', ['linear'], ['zoom'], 9, 0.7, 12, 0.8],
                        'icon-image':['get','icon'],
                        'icon-offset':['match',['get','type'],'circle', ['literal',[0,0]],'marker',['literal',[0,12]], ['literal',[0,0]] ],
                        'icon-allow-overlap' : true,
                    }">
            <template v-slot:popupHover="slotProps">

              hover marker
            </template>

            <template v-slot:popupClick="slotProps">
              <VmPopup max-width="400px">

                <h6>click symbol</h6>
              </VmPopup>
            </template>

          </VmLayer>
        </VmSource>  -->


<!-- 
        <VmMarkerDonut :center="[-45, -15]" :dataSet="[1,2,3,4,5,6]"
          :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']">
          <VmPopup >
            <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
          </VmPopup>
        </VmMarkerDonut>

        <VmMarkerDonut :center="[-43, -14]" :dataSet="[100,20,3,47,5,600]"
          :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']">
          <VmPopup >
            <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
          </VmPopup>
        </VmMarkerDonut> -->

        <!-- <vm-marker :center="[-45, -15]"  >
          <template #marker>
              <div style="background:blue"> lalalalalaal </div>
           </template>

            <template #popupHover>
             ée, em cima do marker
           </template>
            <template #popupClick>
             eeeee, clicamos no popup
           </template>
          <vm-popup >
            <h6> popup normal</h6>
          </vm-popup>
        </vm-marker> -->


        <vm-marker :center="[-42, -15]"  >
          <vm-popup :open="true">
            <h6> popup normal</h6>
          </vm-popup>
        </vm-marker>

      </VueMapbox>

      <button @click="fill = '#00ffff'"> change paint fill </button>
      <button @click="fill = '#00ffff'"> change paint fill </button>
      <button @click="center = [-55, -15]"> changecenter </button>
      <input type="text" v-model="label" />

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
      label: 'a',
      mode: 0,
      fill: '#ff7700',
      dataSet: [100, 4, 7]

    }
  },

  components: {
    VueMapbox: () => import('./components/VueMapbox.vue'),
    VmMarker: () => import('./components/VmMarker.vue'),
    VmPopup: () => import('./components/VmPopup.vue')
  },

  computed: {
    images: function () {
      return {
        water: 'images/water-pattern.jpg',
        'terrain-cgee': 'images/terrain-pattern.jpg',
        'tema-1-marker': 'images/mobilidade.png',
        'tema-1-circle': 'images/mobilidade_2.png',
        'tema-2-marker': 'images/energia.png',
        'tema-2-circle': 'images/energia_2.png',
        'tema-3-marker': 'images/ambiente_construido.png',
        'tema-3-circle': 'images/ambiente_construido_2.png',
        'tema-4-marker': 'images/saneamento.png',
        'tema-4-circle': 'images/saneamento_2.png',
        'tema-5-marker': 'images/residuos_solidos.png',
        'tema-5-circle': 'images/residuos_solidos_2.png',
        'tema-6-marker': 'images/solucoes_natureza.png',
        'tema-6-circle': 'images/solucoes_natureza_2.png',
        'tema-7-marker': 'images/futuro_planejamento.png',
        'tema-7-circle': 'images/futuro_planejamento_2.png',
        'tema-8-marker': 'images/inovacao.png',
        'tema-8-circle': 'images/inovacao_2.png'
      }
    }
  },

  methods: {
    alert: function () {
      console.log('aaa')
    },
    featureenter: function (e) {
      console.log(e)
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
