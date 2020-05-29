<template>
  <div id="app">
    <center>
      <VueMapbox mapStyle="mapbox://styles/mapbox/dark-v10" height="700px" width="900px" :images="images"
        :center="[-45, -15]">

                    <VmSource name="estudosdecaso" type="geojson" :options="{ data: '/geojson/estudosdecaso.json', generateId:true, promoteId:'id' }">
                    <VmLayer type="line"
                    :maxzoom="24"
                    :minzoom="9.1"
                    :filter = "['==', '$type', 'LineString']"
                    :paint="{
                        'line-color':'white',
                        'line-dasharray':[3,3],

                    }">

                    </VmLayer>

                    <VmLayer type="symbol"
                        :maxzoom="24"
                        :minzoom="0"
                        :filter = "['==', '$type', 'Point']"
                        :paint="{
                        }"
                        :layout="{
                            'icon-anchor':['match',['get','type'],'circle', 'center','marker','bottom', 'center'],
                            'icon-size': [ 'interpolate', ['linear'], ['zoom'], 9, 0.7, 12, 0.8],
                            'icon-image':['get','icon'],
                            'icon-offset':['match',['get','type'],'circle', ['literal',[0,0]],'marker',['literal',[0,12]], ['literal',[0,0]] ],
                            'icon-allow-overlap' : true,
                        }"
                        >
                         <template v-slot:popupClick="slotProps">
                            <pre></pre>
                         </template>

                    </VmLayer>
             </VmSource>

              <vmLayer name="myLayer"
                        :source="{type:'geojson',  generateId:true, data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4' }"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
                        :paint-hover="{ 'fill-color': '#ff7799', 'fill-opacity': 1  }"
                        :paint-click="{ 'fill-color': 'blue', 'fill-opacity': 1   }"
                        multipleFeatureSelectionOn="alt"
                        >

                       <template v-slot:popupHover>
                              <h6> Here goes the pop up content while in <b>HOVER</b> a Feature.</h6>
                        </template>

                        <template v-slot:popupClick="slotProps">
                          <VmPopup max-width="400px">
                               <pre>{{ slotProps.features && slotProps.features[0] && slotProps.features[0].properties }}</pre>
                              <h6>Here goes the pop up content while in <b>CLICK</b> a Feature.</h6>
                          </VmPopup>
                        </template>


                 </vmLayer>

      </VueMapbox>

    </center>

    <button @click="show=!show"> Toogle marker Popup </button> {{show}}

  </div>
</template>

<script>

//  import VueMapbox from './components/VueMapbox.vue'

export default {
  name: 'App',
  data () {
    return {
      show: true,
      center: [-45, -15],
      drag: false,
      open: true,
      label: 'a',
      mode: 0,
      fill: '#ff7700',
      dataSet: [100, 4, 7]

    }
  },

  // components: {
  //   VueMapbox: () => import('./components/VueMapbox.vue'),
  //   VmMarker: () => import('./components/VmMarker.vue'),
  //   VmPopup: () => import('./components/VmPopup.vue')
  // },

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
