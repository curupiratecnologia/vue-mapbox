<template>
  <div id="app">
    <center>
      <VueMapbox mapStyle="mapbox://styles/mapbox/dark-v10" height="700px" width="900px" :images="images"
        :center="[-45, -15]">

                    <!-- <VmSource name="estudosdecaso" type="geojson" :options="{ data: '/geojson/estudosdecaso.json', generateId:true, promoteId:'id' }">
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
                        z-index="100"
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

                 </vmLayer> -->

           <vm-layer
                name="bioma-fill"
                :source="{
                   type:'vector',
                   tiles:[`http://167.99.58.243/tile/tipologia_mobilidade/{z}/{x}/{y}.mvt`],
                   minzoom: 0,
                   maxzoom: 24
                }"
                sourceLayer="tipologia_mobilidade"
                type="fill"
                :classes='[
  {
    "value": 1,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#FAE9DF",
    "description": "Taxas elevadas de tempo de deslocamento entre casa e trabalho, com taxas acima da média nacional de motorização (veículos por mil habitantes) e número baixo de óbitos relacionados à acidentes de transito, relativos à população total. A infraestrutura local (acesso pavimentação, calçamento, meio-fio e rampas) apresenta índices relativamente altos. "
  },
  {
    "value": 2,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#F0B0B4",
    "description": "Maiores índices do país em termos de acesso à pavimentação, calçamento e meio-fio, porém com acesso muito baixo à rampas para cadeirantes. Apresentam um número reduzido de óbitos, relacionados à acidentes de trânsito, com baixo tempo de deslocamento entre casa e trabalho, no entanto, a taxa de motorização é bastante elevada, se considerada a realidade brasileira."
  },
  {
    "value": 3,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#E36597",
    "description": "Valores mais baixos do Brasil para os índices de acesso à infraestrutura de mobilidade em termos de acesso à pavimentação, calçamento, meio-fio com acesso e rampas para cadeirantes. Taxas de óbitos e motorização são variadas em torno da mediana do país. Tempos de deslocamento casa trabalho tendem a ser relativamente baixos."
  },
  {
    "value": 4,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#B62280",
    "description": "Taxa de  motorização baixa e com número reduzido de óbitos relacionados a acidentes de trânsito para o cenário brasileiro. No entanto, o tempo de deslocamento casa-trabalho, está entre os mais elevados do país.  Infraestrutura de acesso à rampas para cadeirante é muito baixa, com as demais (acesso pavimentação, calçamento e meio-fio) variando na faixa mediana."
  },
  {
    "value": 5,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#731770",
    "description": "Índices de óbitos relacionados a acidentes de trânsito muito elevados, com taxas de motorização (veículos por mil habitantes) medianas e um baixo tempos de deslocamento casa-trabalho. As taxas de acesso à rampas para cadeirante são muito baixas,  com as demais infraestruturas (acesso pavimentação, calçamento e meio-fio) variando um pouco acima da mediana. "
  },
  {
    "value": 6,
    "property": "vlr_agrup_simil_cidreg",
    "fill-color": "#651053",
    "description": "Infraestrutura geral com índices muito bons de acesso pavimentação, calçamento, meio-fio e rampas para cadeirantes. Números reduzidos de índices de óbitos relacionados a acidentes de trânsito, com tempo de deslocamento casa-trabalho baixo, porém com elevado índice de motorização (veículos por mil habitantes)."
  }
]'
               
                fill-color="#ff3333"
                :paint="{'fill-opacity': 1 }"
                :layout="{'visibility': 'visible' }"
                :paint-hover="{  'fill-color': '#ff4499', 'fill-opacity': 0.8 }"
            >
            <template #popupHover="slotProps">
                <b> {{ slotProps.features[0].properties }} </b>
             </template>

            </vm-layer>

              <VmMarkerDonut :center="[-45, -15]"  :dataSet="[1,2,3,4,5,6]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
             <VmPopup :open="true">
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
              </VmPopup>
         </VmMarkerDonut>
         <VmMarkerDonut :center="[-43, -14]"  :dataSet="[100,20,3,47,5,600]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
            <template v-slot:popupHover>

                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>

            </template>
            <template v-slot:popupClick>

                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>

            </template>
         </VmMarkerDonut>

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
