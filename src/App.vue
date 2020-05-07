<template>
  <div id="app">
    <center>

    <VueMapbox
      height="500px"
      width="800px"
      :center="center">

        <template v-slot:loader> Carregando </template>
          <vm-marker color="red" :center="[-45, -15]">
            <div> fasdfasda </div>
            <!-- <VmPopup>
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
            </VmPopup> -->
          </vm-marker>

          <vmSourceGeoJson name="example" :geoJsonData="currentGeoJson" :tolerance="0.3" :generateId="true" promoteId="codarea">
                <vmLayer name="myLayer"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 1, 0.5 ] }"
                />
                <vmLayer name="myLayer"
                        type="line"
                        :paint="{ 'line-color': '#333333' }"
                />
          </vmSourceGeoJson>

    </VueMapbox>
     <button @click="mode = mode+1"> toogle geojson </button> {{ currentGeoJson }}
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
      label: 'a',
      mode: 0

    }
  },

  components: {
    VueMapbox: () => import('./components/VueMapbox.vue'),
    VmMarker: () => import('./components/VmMarker.vue'),
    VmPopup: () => import('./components/VmPopup.vue'),
    VmMarkerExample: () => import('./docsExamples/VmMarkerExample.vue')
  },

  computed: {
    currentGeoJson: function () {
      if (this.mode == 0) {
        return 'http://servicodados.ibge.gov.br/api/v2/malhas/?formato=application/vnd.geo+json&resolucao=5&qualidade=4'
      } else if (this.mode == 1) {
      } else if (this.mode == 2) {
        return this.geojson2
      } else if (this.mode == 3) {
        return '/geojson/geojson.example.json'
      } else if (this.mode == 4) {
        return '/geojson/geojson2.example.json'
      } else if (this.mode == 5) {
        return '/geojson/municipio_zoom_6.json'
      }
      return this.geojson
    },
    geojson: function () {
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                -39.17724609375,
                -7.623886853120036
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                -44.31884765625,
                -6.468151012664202
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    -42.25341796875,
                    -8.080984688871991
                  ],
                  [
                    -45.8349609375,
                    -9.297306856327596
                  ],
                  [
                    -44.93408203125,
                    -11.113727282172743
                  ],
                  [
                    -46.34033203125,
                    -14.030014548014314
                  ],
                  [
                    -42.73681640625,
                    -15.411319377980993
                  ],
                  [
                    -42.56103515625,
                    -12.876069959946493
                  ],
                  [
                    -41.02294921875,
                    -11.996338401936226
                  ],
                  [
                    -40.42968749999999,
                    -9.774024565864734
                  ],
                  [
                    -41.9677734375,
                    -9.88227549342994
                  ],
                  [
                    -43.04443359375,
                    -9.535748998133615
                  ],
                  [
                    -41.59423828125,
                    -8.537565350804018
                  ],
                  [
                    -41.484375,
                    -6.708253968671543
                  ],
                  [
                    -42.25341796875,
                    -8.080984688871991
                  ]
                ]
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  -48.53759765625,
                  -9.40571004160001
                ],
                [
                  -49.1748046875,
                  -11.092165893501988
                ],
                [
                  -48.7353515625,
                  -12.31853594166211
                ],
                [
                  -48.18603515625,
                  -14.370833973406821
                ],
                [
                  -50.29541015625,
                  -16.04581345375217
                ],
                [
                  -50.8447265625,
                  -16.066928957450106
                ],
                [
                  -52.3828125,
                  -14.689881366618762
                ],
                [
                  -52.84423828125,
                  -11.39387923296741
                ],
                [
                  -52.05322265625,
                  -9.730714305756942
                ],
                [
                  -49.658203125,
                  -7.645664723491027
                ],
                [
                  -47.35107421875,
                  -7.471410908357826
                ],
                [
                  -45.74707031249999,
                  -8.515835561202218
                ],
                [
                  -43.1103515625,
                  -7.667441482726056
                ],
                [
                  -43.154296875,
                  -7.384257828309248
                ]
              ]
            }
          }
        ]
      }
    },
    geojson2: function () {
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    -42.099609375,
                    -15.739388446649146
                  ],
                  [
                    -43.41796875,
                    -15.47485740268724
                  ],
                  [
                    -43.96728515625,
                    -14.902321826141796
                  ],
                  [
                    -44.29687499999999,
                    -14.604847155053898
                  ],
                  [
                    -44.747314453125,
                    -14.519780046326085
                  ],
                  [
                    -46.35131835937499,
                    -15.24178985596171
                  ],
                  [
                    -46.93359375,
                    -15.69708644541173
                  ],
                  [
                    -47.252197265625,
                    -16.19357482669782
                  ],
                  [
                    -47.39501953125,
                    -16.66776866124074
                  ],
                  [
                    -47.17529296875,
                    -18.05186707354763
                  ],
                  [
                    -47.9443359375,
                    -19.05173366503917
                  ],
                  [
                    -48.076171875,
                    -20.045610827439717
                  ],
                  [
                    -46.263427734375,
                    -20.725290873994197
                  ],
                  [
                    -45.186767578125,
                    -21.197216077387093
                  ],
                  [
                    -43.956298828125,
                    -21.453068633086772
                  ],
                  [
                    -43.08837890624999,
                    -20.46818922264095
                  ],
                  [
                    -42.462158203125,
                    -19.78738018198621
                  ],
                  [
                    -41.912841796875,
                    -18.3858049312974
                  ],
                  [
                    -41.5283203125,
                    -17.413546114374437
                  ],
                  [
                    -41.209716796875,
                    -16.45715879614139
                  ],
                  [
                    -41.11083984375,
                    -16.0141360020859
                  ],
                  [
                    -41.1767578125,
                    -15.78168164763942
                  ],
                  [
                    -41.28662109375,
                    -15.50661910663357
                  ],
                  [
                    -41.66015625,
                    -15.538375926292048
                  ],
                  [
                    -42.099609375,
                    -15.739388446649146
                  ]
                ]
              ]
            }
          }
        ]
      }
    }
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
