import mapboxundercover from './mapbox_undercover'

var style = {
  version: 8,

  name: 'cgee',
  metadata: {
    'mapbox:type': 'default',
    'mapbox:origin': 'dark-v10',
    'mapbox:autocomposite': true,
    'mapbox:groups': {
      1444934295202.7542: {
        name: 'Admin boundaries',
        collapsed: false
      }
    },
    'mapbox:sdk-support': {
      js: '0.50.0',
      android: '6.7.0',
      ios: '4.6.0'
    }
  },
  center: [-49.31728361564143, -11.798461073899574],
  zoom: 6.2223516479329595,
  bearing: 1.025885391625934,
  pitch: 0,
  sources: {
    composite: {
      url: 'mapbox://mapbox.mapbox-streets-v8',
      type: 'vector'
    }
  },
  sprite: 'mapbox://sprites/leceles/ck0dldyao0wfm1cpkqsmjx0q5/cj530pqtvmepv7xox0ujq2mef',
  glyphs: 'mapbox://fonts/leceles/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'landq',
      type: 'background',
      layout: {},
      paint: { 'background-color': '#226492', 'background-opacity': 1 }
    },
    {
      id: 'land-brasil',
      type: 'fill',
      source: 'pangea_estado',
      'source-layer': 'estado_2017_01_01_2',
      layout: {},
      paint: { 'fill-pattern': 'terrain-cgee' } // #3396a1
    },
    // {
    //     "id": "land-brasil",
    //     "type": "fill",
    //     "source": "pangea_estado",
    //     "source-layer": "estado_2017_01_01_2",
    //     "layout": {},
    //     "paint": {"fill-color": "#3396a1"} //#3396a1
    // },
    // {
    //     "id": "water",
    //     "type": "fill",
    //     "source": "composite",
    //     "source-layer": "water",
    //     "layout": {},
    //     "paint": {"fill-color": "#1e8fb5",'fill-opacity':1}
    // },
    {
      id: 'water',
      type: 'fill',
      source: 'composite',
      'source-layer': 'water',
      layout: {},
      paint: { 'fill-pattern': 'water' }
    },

    {
      id: 'estados-brasil-outline',
      type: 'line',
      source: 'pangea_estado',
      'source-layer': 'estado_2017_01_01_2',
      layout: {},
      paint: { 'line-color': '#226492', 'line-width': 2 }
    },

    {
      id: 'admin-1-boundary-bg',
      type: 'line',
      metadata: { 'mapbox:group': '1444934295202.7542' },
      source: 'composite',
      'source-layer': 'admin',
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 1],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      layout: { 'line-join': 'bevel' },
      paint: {
        'line-blur': ['interpolate', ['linear'], ['zoom'], 3, 0, 8, 3],
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          3.75,
          12,
          5.5
        ],
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          0,
          8,
          0.75
        ],
        'line-dasharray': [1, 0],
        'line-translate': [0, 0],
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      id: 'admin-1-boundary',
      type: 'line',
      metadata: { 'mapbox:group': '1444934295202.7542' },
      source: 'composite',
      'source-layer': 'admin',
      filter: [
        'all',
        ['match', ['get', 'admin_level'], [1, 0], true, false],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['BR', 'all'], true, false]
      ],
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [2, 0]],
          7,
          ['literal', [2, 2, 6, 2]]
        ],
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          0.75,
          12,
          1.5
        ],
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          2,
          0,
          3,
          1
        ],
        'line-color': [
          'interpolate',
          ['linear'],
          ['zoom'],
          3,
          'hsl(0, 0%, 27%)',
          7,
          'hsl(0, 0%, 35%)'
        ]
      }
    },
    {
      id: 'admin-1-boundary copy',
      type: 'line',
      metadata: { 'mapbox:group': '1444934295202.7542' },
      source: 'composite',
      'source-layer': 'admin',
      filter: [
        'all',
        ['match', ['get', 'admin_level'], [1, 2], true, false],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['BR', 'all'], true, false]
      ],
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [2, 0]],
          7,
          ['literal', [2, 2, 6, 2]]
        ],
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          0.75,
          12,
          1.5
        ],
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          2,
          0,
          3,
          1
        ],
        'line-color': [
          'interpolate',
          ['linear'],
          ['zoom'],
          3,
          'hsl(0, 0%, 27%)',
          7,
          'hsl(0, 0%, 35%)'
        ]
      }
    },
    {
      id: 'admin-0-boundary',
      type: 'line',
      metadata: { 'mapbox:group': '1444934295202.7542' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 1,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 0],
        ['==', ['get', 'disputed'], 'false'],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], '', true, false]
      ],
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': 'hsl(0, 0%, 43%)',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          3,
          0.5,
          10,
          2
        ]
      }
    },
    {
      id: 'admin-0-boundary-disputed',
      type: 'line',
      metadata: { 'mapbox:group': '1444934295202.7542' },
      source: 'composite',
      'source-layer': 'admin',
      minzoom: 1,
      filter: [
        'all',
        ['==', ['get', 'disputed'], 'true'],
        ['==', ['get', 'admin_level'], 0],
        ['==', ['get', 'maritime'], 'false'],
        ['match', ['get', 'worldview'], ['all', 'US'], true, false]
      ],
      layout: { 'line-join': 'round' },
      paint: {
        'line-dasharray': [1.5, 1.5],
        'line-color': 'hsl(0, 0%, 14%)',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          3,
          0.5,
          10,
          2
        ]
      }
    },
    {
      id: 'water (1)',
      type: 'line',
      source: 'composite',
      'source-layer': 'aeroway',
      layout: {},
      paint: {}
    },
    {
      id: 'estados-label',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 0,
      filter: [
        'match',
        ['get', 'type'],
        ['', 'state'],
        true,
        false
      ],
      layout: {
        'text-field': ['to-string', ['get', 'name']],
        'text-size': 11
      },
      paint: { 'text-color': 'hsl(90, 58%, 50%)' }
    },
    {
      id: 'municipios-label',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 8,
      filter: [
        'match',
        ['get', 'type'],
        ['', 'city', 'town'],
        true,
        false
      ],
      layout: {
        'text-field': ['to-string', ['get', 'name']],
        'text-size': 10
      },
      paint: { 'text-color': 'hsl(200, 18%, 10%)' }
    }
  ],
  created: '2019-09-10T08:47:45.221Z',
  id: 'ck0dldyao0wfm1cpkqsmjx0q5',
  modified: '2019-09-10T08:54:43.101Z',
  owner: 'leceles',
  visibility: 'private',
  draft: false
}

style.sources = {
  composite: mapboxundercover,
  pangea_estado: {
    type: 'vector',
    minzoom: 0,
    maxzoom: 20,
    generateId: true,
    tiles: [`${process.env.VUE_APP_PANGEA}tile/estado_2017_01_01_2/{z}/{x}/{y}.mvt`]

  }
}
// style.sprite =  window.location.origin+"/images/sprites"

export default style
