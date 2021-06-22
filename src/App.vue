<template>
  <div id="app"
  style="background:rgba(25, 26, 26, 0.000)"
  >
    <center>

        <recuperacao-energetica-icon
            :energiaPercent="50"
            :processamentoPercent="90"
            tecnologia="Coprocessamento"
            :showInfo="false"
            />

        <recuperacao-energetica-icon
            :energiaPercent="50"
            :processamentoPercent="70"
            tecnologia="Coprocessamento"
            :showInfo="true"
            />

     <!-- <recuperacao-energetica-icon /> -->
      <VueMapbox

      key="mapbox"
      ref="vuemapbox"
      @load="loaded"
      :layersCanRaname="true"
      hash="pos"
      mapStyle="mapbox://styles/mapbox/dark-v10" height="700px" width="900px" :images="images" >

<!--
        <vm-image name="testesvg"
                  width="55px"
                  :updateOnChange="true"
                  >

                  <recuperacao-energetica-icon :energiaPercent="20" :processamentoPercent="60"/>

        </vm-image>

        <vm-source v-if="show"
        key="poligno-triangula"
        name="poligno-triangula"
        type="geojson" :options='{data:{ "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ -40.1220703125, -8.450638800331001 ], [ -48.9111328125, -3.601142320158722 ], [ -55.107421875, -6.053161295714067 ], [ -59.765625, -10.055402736564224 ], [ -59.150390625, -20.179723502765153 ], [ -52.5146484375, -24.806681353851978 ], [ -46.669921875, -25.60190226111573 ], [ -41.220703125, -16.762467717941593 ], [ -40.1220703125, -8.450638800331001 ] ] ] } } ] }}'>
              <vm-layer
                key="layer-vermelho"
                name="layer-vermelho"
                type="fill"
                fill-color="#ff0000"
                fill-color-hover="#00ff00"
                :opacity="0.6"
             >

            </vm-layer>
      </vm-source>

      <vm-source
        key="unidade-recuperacao-energetica"
        name="unidade-recuperacao-energetica"
        type="geojson" :options="{data:geojson2}">

              <vm-layer
                key="layer-icon"
                name="layer-icons"
                type="symbol"
                :icon-image='["coalesce", ["image", "testeurl"], ["image", "testesvg"], ["image", "testesvgcontent"] ,["image", "tema-1-marke"]]'
                icon-anchor="top-left"
                :icon-ignore-placement="true"
                :icon-offset="[-33,-33]"
                :ignoreOthersLayer="true"
                @featurehover="unidadeFeatureHover"
                @mousemove="mousemove"
                @mouseleave="mouseleave"
             >
            </vm-layer>

            <vm-layer
                key="layer-icon-center"
                name="layer-icons-center"
                type="circle"
                :circle-radius="33"
                :circle-color="'rgba(0,255,0,255)'"
                @featurehover="emcimaIcone"
            >
            </vm-layer>

      </vm-source>

      <vm-source
        v-if="!show"
        key="poligno-triangula"
        name="poligno-triangula"
        type="geojson" :options='{data:{ "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ -40.1220703125, -8.450638800331001 ], [ -48.9111328125, -3.601142320158722 ], [ -55.107421875, -6.053161295714067 ], [ -59.765625, -10.055402736564224 ], [ -59.150390625, -20.179723502765153 ], [ -52.5146484375, -24.806681353851978 ], [ -46.669921875, -25.60190226111573 ], [ -41.220703125, -16.762467717941593 ], [ -40.1220703125, -8.450638800331001 ] ] ] } } ] }}'>
              <vm-layer
                key="layer-vermelho"
                name="layer-vermelho"
                type="fill"
                color="#ff0000"
                :opacity="0.6"
             >

            </vm-layer>
      </vm-source>

        <vm-source
        key="poligno-triangula-z-index"
        name="poligno-triangula-z-index"

        type="geojson" :options='{data:{ "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": { "stroke": "#555555", "stroke-width": 2, "stroke-opacity": 1, "fill": "#555555", "fill-opacity": 0.5 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -33.92578125, -6.970049417296218 ], [ -40.341796875, -7.667441482726056 ], [ -55.283203125, -10.876464994816283 ], [ -63.28125, -11.781325296112277 ], [ -67.2802734375, -12.554563528593656 ], [ -67.6318359375, -13.838079936422462 ], [ -67.8076171875, -14.944784875088372 ], [ -52.82226562499999, -13.325484885597936 ], [ -44.033203125, -12.254127737657369 ], [ -38.84765625, -10.876464994816283 ], [ -33.92578125, -9.232248799418674 ], [ -33.92578125, -6.970049417296218 ] ] ] } } ] }}'>
              <vm-layer
                key="layer-verde"
                name="layer-verde"
                type="fill"
                color="#00FF00"
                :opacity="1"
                :z-index="zindex"
             >

            </vm-layer>
      </vm-source> -->

                 <!-- :options="{ data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4'}" > -->
                      <!-- :options="{ data: 'https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=municipio'}" -->

            <vm-layer
            :source="{
                   type:'vector',
                   tiles:[`https://hapi-sigweb.cgee.org.br/tile/uso_cobertura_terra/{z}/{x}/{y}.mvt`],
                   minzoom: 0,
                   maxzoom: 24
                }"
                    sourceLayer="uso_cobertura_terra"
                    name="myLayer"
                    type="fill"
                    @mousemove="mousemove"
                    @loading="loading"
                    :paint="{ 'fill-color': '#ff0000' }"
                    :classes="[ {'fill-color':'#fe0000', value:1,'label':'Área Artificial', property:'vlr_classe'},
                      {'fill-color':'#ebe628', value:2,'label':'Área Agrícola', property:'vlr_classe'},
                          {'fill-color':'#cd8900', value:3,'label':'Pastagem com Manejo', property:'vlr_classe'},
                          {'fill-color':'#d4e885', value:4,'label':'Mosaico de Ocupações em Área Florestal', property:'vlr_classe'},
                          {'fill-color':'#00915a', value:5,'label':'Silvicultura', property:'vlr_classe'},
                          {'fill-color':'#73a800', value:6,'label':'Vegetação Florestal', property:'vlr_classe'},
                          {'fill-color':'#beb8f4', value:7,'label':'Área Úmida', property:'vlr_classe'},
                          {'fill-color':'#c890a9', value:8,'label':'Vegetação Campestre', property:'vlr_classe'},
                          {'fill-color':'#d69963', value:9,'label':'Mosaico de Ocupações em Área Campestre', property:'vlr_classe'},
                          {'fill-color':'#8cffff', value:10,'label':'Corpo d\'Água Continental', property:'vlr_classe'},
                          {'fill-color':'#2d99da', value:11,'label':'Corpo d\'Água Costeiro', property:'vlr_classe'},
                          {'fill-color':'#888888', value:12,'label':'Área Descoberta', property:'vlr_classe'}
                  ]"
        classesValueInterpolation='match'
            />

      </VueMapbox>

    </center>
    <input  type="range" min="0" max="1" step="0.1" v-model="opacity" >
      <!--
      toogle order: <input  type="checkbox" v-model="show" /> {{color}}
      {{capagClassesEstadual}}
    fill <input type="text" v-model="fill">
    z-index-triangulo <input type="number" v-model="zindex"> -->

  </div>
</template>

<script>

//  import VueMapbox from './components/VueMapbox.vue'

import RecIcon from '@/components/recuperacao-energetica-icon'
import PaiTeste from '@/components/pai-teste'
import Filho from '@/components/filho'

export default {
  name: 'App',
  components: {
    'recuperacao-energetica-icon': RecIcon,
    'pai-teste': PaiTeste,
    filho: Filho

  },
  data () {
    return {
      zindex: 0,
      color: false,
      opacity: 1,
      show: true,
      center: [-45, -15],
      drag: false,
      open: true,
      label: 'a',
      mode: 0,
      fill: '#ff7700',
      dataSet: [100, 4, 7],
      ano: 2018,
      dataJoin: [{ id: 4200101, color: '#ffffff' },
        { id: 4109401, color: '#ffffff' },
        { id: 5107305, color: '#ffffff' }
      ],

      geojson2: {

        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              id: 1,
              tecnologia: 'Aterro Sanitário',
              processamentoPercent: 80,
              energiaPercent: 20,

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
              id: 2,
              tecnologia: 'Aterro Sanitário/CTR',
              processamentoPercent: 20,
              energiaPercent: 0,
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
              id: 3,
              tecnologia: 'Incineração de Resíduos Classe I',
              processamentoPercent: 20,
              energiaPercent: 10,
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
              id: 4,
              tecnologia: 'Lixão com Recuperação de Biogás',
              processamentoPercent: 60,
              energiaPercent: 50,
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
              id: 5,
              tecnologia: 'Lixão com Recuperação de Biogás',
              processamentoPercent: 60,
              energiaPercent: 50,
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
              id: 6,
              tecnologia: 'Incineração de RSS e Resíduos Classe I',
              processamentoPercent: 60,
              energiaPercent: 50,
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
              tecnologia: 'Transbordo de Resíduos',
              processamentoPercent: 20,
              energiaPercent: 80,
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

      }

    }
  },

  created: function () {
    this.geojson = this.geojson1
  },

  // components: {
  //   VueMapbox: () => import('./components/VueMapbox.vue'),
  //   VmMarker: () => import('./components/VmMarker.vue'),
  //   VmPopup: () => import('./components/VmPopup.vue')
  // },

  computed: {

    capagClassesEstadual: function () {
      const exp = ['match', ['id'], 11, '#3db3c1', 12, '#3db3c1', 13, '#3db3c1', 14, '#fdb863', 15, '#3db3c1', 16, '#fdb863', 17, '#fdb863', 21, '#fdb863', 22, '#3db3c1', 23, '#3db3c1', 24, '#fdb863', 25, '#3db3c1', 26, '#fdb863', 27, '#3db3c1', 28, '#fdb863', 29, '#fdb863', 31, '#6b486b', 32, '#b3ffd4', 33, '#6b486b', 35, '#3db3c1', 41, '#3db3c1', 42, '#fdb863', 43, '#6b486b', 50, '#fdb863', 51, '#fdb863', 52, '#fdb863', 53, '#fdb863', '#666666']
      if (this.color) {
        return '#6666FF'
        return exp
      }
      return '#666666'
    },

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
      // console.log('aaa')
    },
    featureenter: function (e) {

      // console.log(e)
    },
    unidadeFeatureHover: function (features, map) {
      console.log('🚀 ~ file: App.vue ~ line 591 ~ features', features)
    },
    mousemove: function (features, map) {
      // console.count('🚀 ~ mousemove')
    },
    mouseleave: function (features, map) {
      console.count('🚀 ~ mouseleave')
    },
    loading: function (e, feature) {
      console.count('🚀 ~ loading app', e)
    },

    emcimaIcone: function (e) {

    },

    loaded: function (a, b) {
      window.map = b
      // b.on('render', function (data) {
      //   console.count('render event occurred.')
      //   console.log('render event occurred.', data)
      // })
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
