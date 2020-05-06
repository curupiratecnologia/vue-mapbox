import mapboxundercover from './mapbox_undercover'

var style = {
  version: 8,
  name: 'VOLTADOLAGO',
  metadata: {
    'mapbox:autocomposite': true,
    'mapbox:type': 'template',
    'mapbox:groups': {
      '6cd71659a1d934e85438e1d50342c0ea': {
        name: 'Estradas',
        collapsed: true
      },
      d012e747a605c9c3912fb9964623659f: {
        name: 'Building',
        collapsed: false
      },
      d44f05c7f363fcb8073819e662eba077: {
        name: 'parques',
        collapsed: false
      }
    }
  },
  center: [
    -47.90009797830726,
    -15.817198955237401
  ],
  zoom: 15.672067300657982,
  bearing: 15.200000000000044,
  pitch: 60,
  sources: {
    composite: mapboxundercover
  },
  sprite: 'mapbox://sprites/moreirageo/cjgcu8v1e00002rnwmkzg1zra',
  glyphs: 'mapbox://fonts/moreirageo/{fontstack}/{range}.pbf',
  layers: [
    // {
    //     "id": "Unidades de Conservacao",
    //     "type": "fill",
    //     "metadata": {
    //         "mapbox:group": "d44f05c7f363fcb8073819e662eba077"
    //     },
    //     "source": "composite",
    //     "source-layer": "landuse_overlay",
    //     "layout": {
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "fill-color": "hsl(279, 19%, 44%)",
    //         "fill-opacity": 1,
    //         "fill-outline-color": "hsl(279, 19%, 42%)"
    //     }
    // },
    {
      id: 'Parques',
      type: 'fill',
      metadata: {
        'mapbox:group': 'd44f05c7f363fcb8073819e662eba077'
      },
      source: 'composite',
      'source-layer': 'landuse',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'fill-pattern': 'parques',
        // "fill-color": "#84a0a1",//"hsl(279, 19%, 42%)",
        'fill-opacity': {
          base: 1,
          stops: [[9.5, 0], [17, 0.6], [22, 0.9]]
        }

        // "fill-outline-color": "hsl(279, 19%, 40%)"
      }
    },
    {
      id: 'Via Principal',
      type: 'line',
      metadata: {
        'mapbox:group': '6cd71659a1d934e85438e1d50342c0ea'
      },
      source: 'composite',
      'source-layer': 'road',
      filter: ['any', ['==', 'class', 'primary'], ['==', 'class', 'secondary'], ['==', 'class', 'trunk']],
      layout: {
        visibility: 'visible',
        'line-join': 'round'
      },
      paint: {
        'line-width': {
          base: 1,
          stops: [[10, 1], [22, 20]]
        },
        'line-opacity': {
          base: 1,
          stops: [[9, 0], [22, 1]
          ]
        },
        'line-color': 'hsl(279, 19%, 59%)'
      }
    },
    {
      id: 'Via secundaria',
      type: 'line',
      metadata: {
        'mapbox:group': '6cd71659a1d934e85438e1d50342c0ea'
      },
      source: 'composite',
      'source-layer': 'road',
      filter: ['none', ['==', 'class', 'primary'], ['==', 'class', 'secondary'], ['==', 'class', 'trunk']],
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': 'hsl(279, 19%, 59%)',
        'line-width': {
          base: 1,
          stops: [[11, 0], [22, 4]]
        },
        'line-opacity': {
          base: 1,
          stops: [[13, 0], [22, 1]
          ]
        }
      }
    },
    {
      id: 'building',
      type: 'fill',
      metadata: {
        'mapbox:group': 'd012e747a605c9c3912fb9964623659f'
      },
      source: 'composite',
      'source-layer': 'building',
      filter: [
        'in',
        '$type',
        'LineString',
        'Point',
        'Polygon'
      ],
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'hsla(279, 19%, 32%, 0.8)',
        'fill-opacity': 1,
        'fill-outline-color': 'hsla(279, 19%, 30%, 0.8)'
      }
    },
    {
      id: 'building copy',
      type: 'fill-extrusion',
      metadata: {
        'mapbox:group': 'd012e747a605c9c3912fb9964623659f'
      },
      source: 'composite',
      'source-layer': 'building',
      filter: [
        'in',
        '$type',
        'LineString',
        'Point',
        'Polygon'
      ],
      layout: {},
      paint: {
        'fill-extrusion-height': {
          base: 1,
          type: 'categorical',
          property: 'extrude',
          stops: [
            [10, 0],
            [14, 24]
          ],
          default: 1
        },
        'fill-extrusion-color': '#754983' // hsl(279, 19%, 30%)"
      }
    },
    {
      id: 'Nome Locais',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'place_label',
      minzoom: 14,
      layout: {
        visibility: 'visible',
        'text-field': '{name}',
        'text-size': {
          base: 1.2,
          stops: [[7, 4], [12, 8], [22, 18]]
        }
      },
      paint: {
        // "text-color": "hsl(279, 19%, 80%)",
        // "text-halo-color": "hsl(279, 19%, 20%)",
        // "text-halo-width": 1,
        // "text-halo-blur": 1
      }
    }
    // {
    //     "id": "Nome predios",
    //     "type": "symbol",
    //     "source": "composite",
    //     "source-layer": "poi_label",
    //     "minzoom": 14,
    //     "layout": {
    //         "visibility": "visible",
    //         "text-field": "{name}",
    //         "text-size": {
    //             "base": 1.2,
    //             "stops": [ [ 7, 4 ], [ 12, 8 ], [ 22, 18 ] ]
    //         }
    //     },
    //     "paint": {
    //         "text-color": "hsl(279, 19%, 80%)",
    //         "text-halo-color": "hsl(279, 19%, 20%)",
    //         "text-halo-width": 1,
    //         "text-halo-blur": 1
    //     }
    // },
    // {
    //     "id": "Nome Cidades",
    //     "type": "symbol",
    //     "source": "composite",
    //     "source-layer": "place_label",
    //     "filter": [
    //         "any",
    //         [
    //             "==",
    //             "type",
    //             "city"
    //         ],
    //         [
    //             "==",
    //             "type",
    //             "town"
    //         ]
    //     ],
    //     "layout": {
    //         "visibility": "visible",
    //         "text-size": {
    //             "base": 1.2,
    //             "stops": [ [ 7, 0 ], [ 12, 0 ], [ 15, 18 ] ]
    //         },
    //         "text-field": "{name}"
    //     },
    //     "paint": {
    //         "text-color": "hsl(279, 19%, 80%)",
    //         "text-halo-color": "hsl(279, 19%, 20%)",
    //         "text-halo-width": 1,
    //         "text-halo-blur": 1
    //     }
    // }
  ],
  created: '2018-04-23T22:53:51.723Z',
  id: 'cjgcu8v1e00002rnwmkzg1zra',
  modified: '2018-04-24T00:37:35.957Z',
  owner: 'moreirageo',
  visibility: 'private',
  draft: false
}

style.sources = { composite: mapboxundercover }
style.sprite = window.location.origin + '/images/sprites'

export default style

var style2 = {
  version: 8,
  name: 'voltadolago-copy',
  metadata: {
    'mapbox:autocomposite': true,
    'mapbox:type': 'template'
  },
  center: [
    -47.882074522463995,
    -15.806249277207186
  ],
  zoom: 15.404946541587915,
  bearing: 20.61917208114255,
  pitch: 60,
  light: {
    color: 'white',
    intensity: 0.87,
    anchor: 'viewport'
  },
  sources: {
    composite: mapboxundercover
  },
  sprite: window.location.origin + '/images/sprites',
  glyphs: 'mapbox://fonts/leceles/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background (1)',
      type: 'background',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'background-color': 'hsla(0, 73%, 63%, 0)'
      }
    },
    {
      id: 'road',
      type: 'line',
      source: 'composite',
      'source-layer': 'road',
      layout: {
        visibility: 'visible',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'hsla(0, 0, 0, 0.05)',
        'line-opacity': {
          base: 1,
          stops: [
            [
              11,
              0
            ],
            [
              13,
              1
            ]
          ]
        },
        'line-width': {
          base: 1,
          stops: [
            [
              12,
              2
            ],
            [
              16,
              3
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      id: 'building',
      type: 'fill',
      source: 'composite',
      'source-layer': 'building',
      filter: [
        '==',
        '$type',
        'Polygon'
      ],
      layout: {},
      paint: {
        'fill-color': 'hsl(0, 76%, 58%)',
        'fill-outline-color': 'hsla(0, 0%, 0%, 0)',
        'fill-opacity': 0.17,
        'fill-antialias': false
      }
    },
    {
      id: 'place-label',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'place_label',
      layout: {
        visibility: 'visible',
        'text-field': {
          base: 1,
          type: 'categorical',
          property: 'name',
          stops: [
            [
              '',
              ''
            ]
          ]
        }
      },
      paint: {}
    }
  ],
  created: '2018-02-20T11:50:58.453Z',
  id: 'cjdvl9kiu682f2rq9f91i6z7l',
  modified: '2018-02-26T12:58:37.164Z',
  owner: 'leceles',
  visibility: 'private',
  draft: false
}
