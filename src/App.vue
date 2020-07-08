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



      <div  v-for="(feature,i) in geojson.features"  :key="JSON.stringify(feature)">
        <VmMarkerDonut
                
                    @click.native="showPopup"
                    :center="feature.geometry.coordinates"
                    :dataSet="feature.properties.dataSet"
                    :dataColor="feature.properties.colorSet"
                    :maxZoom="6"
                    :minZoom="0"
                  
                >
                    <template #marker>
                        <div v-if="feature.properties.nome">
                            <div style='text-align:center; font-size:8px;line-height:8px;font-weight:bold; margin-top:8px;opacity:0.8'>
                            <div style='text-align:center; font-size:6px;font-weight:bolder; line-height:6px;margin:0; letter-spacing:0.3px;text-shadow:1px 1px 1px 4px white' v-if="feature.properties.tipoRegiao == 'cidade_regiao'"> CIDADE REGIÃO DE</div>
                            <div style="margin:0;margin-top:2px;font-weight:bolder;letter-spacing:0.2px;color:white"> 0-3 {{ feature.properties.nome.toUpperCase() }}</div>
                            </div>
                        </div>
                    </template>

                    <template #popupHover>
                         <vm-popup 
                         className='popup-cluster'
                         color="#00000099">
                            <ul class='popup-cluster--list'>
                                <li v-for='tema in feature.properties.temas'
                                    :key="tema.nome"
                                    class='popup-cluster--list-item'
                                    :style="{background:tema.cor}"
                                    >
                                    <div class='popup-cluster--list-item--icon'>
                                    </div>
                                    <div class='popup-cluster--list-item--name'>
                                        {{tema.nome}}
                                    </div>
                                    <div class='popup-cluster--list-item--total'>
                                       {{tema.total}}
                                    </div>

                                </li>
                            </ul>
                        </vm-popup>
                    </template>
                </VmMarkerDonut>
        </div>
      <!-- <div  v-for="(feature,i) in geojson.features"  :key="JSON.stringify(feature)+1">
        <VmMarkerDonut
                
                    @click.native="showPopup"
                    :center="feature.geometry.coordinates"
                    :dataSet="feature.properties.dataSet"
                    :dataColor="feature.properties.colorSet"
                    :maxZoom="20"
                    :minZoom="6.5"
                  
                >
                    <template #marker>
                        <div v-if="feature.properties.nome">
                            <div style='text-align:center; font-size:8px;line-height:8px;font-weight:bold; margin-top:8px;opacity:0.8'>
                            <div style='text-align:center; font-size:6px;font-weight:bolder; line-height:6px;margin:0; letter-spacing:0.3px;text-shadow:1px 1px 1px 4px white' v-if="feature.properties.tipoRegiao == 'cidade_regiao'"> CIDADE REGIÃO DE</div>
                            <div style="margin:0;margin-top:2px;font-weight:bolder;letter-spacing:0.2px; color:white"> 4-10 {{ feature.properties.nome.toUpperCase() }}</div>
                            </div>
                        </div>
                    </template>

                    <template #popupHover>
                         <vm-popup 
                         className='popup-cluster'
                         color="#00000099">
                            <ul class='popup-cluster--list'>
                                <li v-for='tema in feature.properties.temas'
                                    :key="tema.nome"
                                    class='popup-cluster--list-item'
                                    :style="{background:tema.cor}"
                                    >
                                    <div class='popup-cluster--list-item--icon'>
                                    </div>
                                    <div class='popup-cluster--list-item--name'>
                                        {{tema.nome}}
                                    </div>
                                    <div class='popup-cluster--list-item--total'>
                                       {{tema.total}}
                                    </div>

                                </li>
                            </ul>
                        </vm-popup>
                    </template>
                </VmMarkerDonut>
        </div> -->

      </VueMapbox>

    </center>

    <button @click="geojson=geojson1"> Geojson1</button> 
    <button @click="geojson=geojson2"> Geojson2 </button> 
    <button @click="geojson=geojson3"> Geojson Vazio </button> 

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
      dataSet: [100, 4, 7],

      geojson1: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Rio de Janeiro',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                }
              },
              geocod: '33',
              colorSet: [
                '#984593'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -42.0711523406202,
                -22.0720646645004
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'São Paulo',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                }
              },
              geocod: '35',
              colorSet: [
                '#984593'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -49.1831841692549,
                -22.5736727410571
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Paraná',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                }
              },
              geocod: '41',
              colorSet: [
                '#984593'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -51.8183643619047,
                -24.6344451045557
              ]
            }
          }
        ]
      },

      geojson2: {

        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Pará',
              temas: {
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 1,
                  cor: '#f97566'
                }
              },
              geocod: '15',
              colorSet: [
                '#f97566'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -52.0029177013392,
                -3.64654901351252
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Minas Gerais',
              temas: {
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 1,
                  cor: '#f97566'
                }
              },
              geocod: '31',
              colorSet: [
                '#f97566'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -45.2120202503997,
                -18.6336315895962
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Esprito Santo',
              temas: {
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 1,
                  cor: '#f97566'
                }
              },
              geocod: '32',
              colorSet: [
                '#f97566'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -40.4467034518567,
                -19.6054031735828
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Rio de Janeiro',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                },
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 3,
                  cor: '#f97566'
                }
              },
              geocod: '33',
              colorSet: [
                '#984593',
                '#f97566'
              ],
              dataSet: [
                1,
                3
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -42.0711523406202,
                -22.0720646645004
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'São Paulo',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                },
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 1,
                  cor: '#f97566'
                }
              },
              geocod: '35',
              colorSet: [
                '#984593',
                '#f97566'
              ],
              dataSet: [
                1,
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -49.1831841692549,
                -22.5736727410571
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Paraná',
              temas: {
                1: {
                  nome: 'Mobilidade',
                  total: 1,
                  cor: '#984593'
                }
              },
              geocod: '41',
              colorSet: [
                '#984593'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -51.8183643619047,
                -24.6344451045557
              ]
            }
          },
          {
            type: 'Feature',
            properties: {
              tipoRegiao: 'estado',
              nome: 'Distrito Federal',
              temas: {
                6: {
                  nome: 'Soluções Baseadas na Natureza (NBS)',
                  total: 1,
                  cor: '#f97566'
                }
              },
              geocod: '53',
              colorSet: [
                '#f97566'
              ],
              dataSet: [
                1
              ],
              cluster: true
            },
            geometry: {
              type: 'Point',
              crs: {
                type: 'name',
                properties: {
                  name: 'urn:ogc:def:crs:EPSG::4674'
                }
              },
              coordinates: [
                -47.7808785770608,
                -15.7754886310227
              ]
            }
          }
        ]

      },

        geojson3: {

        type: 'FeatureCollection',
        features: []

      },


      geojson:{}

    }
  },

  created:function(){
    this.geojson = this.geojson1
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
