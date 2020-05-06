import lineSliceAlong from '@turf/line-slice-along'
import bbox from '@turf/bbox'
// import length from "@turf/length"
import center from '@turf/center-of-mass'
import _ from 'lodash'
import { TimelineMax } from 'gsap/TweenMax'

var turf = {
  lineSliceAlong,
  bbox,
  center
}

export default {
  name: 'layer',

  render: function (createElement) {
    return false
  },

  props: {
    featureDataKey: {
      default: 'geocod'
    },
    name: {
      default: () => _.uniqueId('mapboxlayer')
    },
    zIndex: {
      default: 1
    },
    legends: {
      default: false // [ {color,value},{color,value} ]
    },
    geoJSON: {
      default: false
    },
    mvt: {
      default: false
    },
    sourceLayer: {
      default: false
    },
    filter: {},
    featureData: false,
    layerStyle: {},
    source: false,

    zoomMin: {
      default: 0
    },
    zoomMax: {
      default: 22
    },
    icons: {} // {name:url,name2:url2}

  },

  // ['layerStyle','filter','featureData'],

  data () {
    return {
      __name: '',
      _geoJSON: false,
      layerAdded: false,
      // [0,14]
      loadDelay: 0, // time to load layer
      // icons: {}, //{name:url,name2:url2}
      // tween: new TimelineMax().pause(),
      obj: { total: 0 }, // this.$options.tween;
      sourceOptions: {},
      nameLayerFromData: undefined //  if want to stecify a name for dinamic layer, set this attr in beforeCreate
    }
  },

  // master to all layer to be used to controll.
  // layer especific is set in computed properties
  tweenMaster: new TimelineMax().pause(),

  computed: {
    // geoJSON:function(){
    //     return false;//this.$store.getters.kms;
    // },

    map: function () {
      return window.mapboxmap
      var parent = this.$parent
      while (parent) {
        if (_.hasIn(parent, 'map')) {
          return parent.map
          break
        }
        parent = parent.$parent
      }
      return false
    },

    sourceName: function () {
      return _.get(this, 'nameLayerFromData', this.name) + '_source'
    },

    layerName: function () {
      const name = _.get(this, 'nameLayerFromData', this.name) + '_layer'
      return name
    },

    tween: function () {
      return new TimelineMax().pause() // this.$options.tween;
    },

    beforeLayer: function () {
      if (!this.map) return false
      // var layers = this.$store.state.layers;
      // var index = _.indexOf(layers,this.layerName);
      // var layerBeforeName = layers[index+1] || "";

      // var layers = this.$store.state.layersInfos;
      // layers = _.orderBy(chars, ['name'],['asc']);;
      // var index = _.indexOf(layers,this.layerName);
      // var layerBeforeName = layers[index+1] || "";

      const layerBeforeName = this.$store.getters.beforeLayer(this.layerName)

      // get if layer exist
      var layer = this.map.getLayer(layerBeforeName)
      if (layer) {
        return layerBeforeName
      }
      return ''
    },

    mapboxlayers: function () {
      return this.$store.mapboxlayers
    }
  },

  watch: {
    geoJSON: function (val) {
      this.tween.kill()
      this.tween.clear()
      this._geoJSON = val
      setTimeout(this.setSource, 200)
    },
    layerStyle: function () {
      this.setLayerStyle()
    },
    source: function () {
      this.setSource()
    },
    filter: function () {
      this.setLayerFilter()
    },
    featureData: function () {
      this.setFeatureData()
    },
    zIndex: function (val) {
      if (this.layerAdded) {
        this.$store.commit('updateLayersInfos', {
          name: this.layerName,
          zIndex: this.layerIndex,
          legends: this.legends

        })
        this.setLayerOrder()
      }
    },
    beforeLayer: function () {
      this.setLayerOrder()
    },
    mapboxlayers: function () {
      this.setLayerOrder()
    }
  },

  beforeCreate: function () {
    this._geoJSON = false
  },

  created () {
    this.$options.name = this.name
    this.__name = this.name
  },

  mounted: function () {
    if (!this.$options.name) throw Error('Name of layer not defined')
    this._geoJSON = this.geoJSON
    // load icons
    // LETODO - check if error if not load icons after add to map
    if (!_.isEmpty(this.icons)) {
      _.each(this.icons, (v, k) => {
        this.map.loadImage(v, (error, image) => {
          if (error) console.warn(error)
          this.map.addImage(k, image)
        })
      })
    }
    this.$store.commit('addLayer', this.layerName)
    this.$store.commit('layersInfos', {
      name: this.layerName,
      zIndex: this.zIndex,
      legends: this.legends
    })
    setTimeout(() => {
      this.setSource()
      this.addLayer()
    }, this.loadDelay * 1000)
  },

  beforeDestroy: function () {
    this.$store.commit('removeLayer', this.layerName)
    if (this.map) {
      this.map.removeLayer(this.layerName)
      this.map.removeSource(this.sourceName)
      // this.map.up
      console.log('REMOVENDO:' + this.layerName)
    }
  },

  methods: {
    addLayer: function () {
      if (this.map && !this.layerAdded) {
        this.layerAdded = true
        var layerStyle = this.getLayerStyle()
        this.map.addLayer(layerStyle)
        this.setLayerFilter()
        this.setFeatureData()
        this.setZoomRange()
        this.setEvents()
        // setTimeout(() => this.setLayerOrder(), 50); //set a little delay to make time to olhers layers to be created
        setTimeout(() => this.setLayerOrder(), 500) // set a little delay to make time to olhers layers to be created
      }
    },

    setEvents: function () {
      var _t = this
      this.map.on('click', this.layerName, function (e) {
        e = { ...e, ...e.features[0].properties }
        _t.$emit('click', e)
      })

      this.map.on('mousemove', this.layerName, function (e) {
        // console.log('mousemove: '+this.layerName)
        if (e.features.length > 0) {
          e = { ...e, ...e.features[0].properties }
          _t.$emit('mousemove', e)
        }
      })

      this.map.on('mouseleave', this.layerName, function (e) {
        // if(e.features.length > 0){
        // e = {...e,...e.features[0].properties}
        _t.$emit('mouseleave', e)
        // }
      })
    },

    getSourceDefinition: function () {
    // check if source is in props, if so i consider it alone
      if (this.$props.source) {
        return this.$props.source
      }

      // first check for source properties
      var sourceProperties = _.get(this.$options, 'source')

      if (this.mvt) {
        return {
          type: 'vector',
          tiles: [this.mvt],
          minzoom: 0,
          maxzoom: 20,
          generateId: true
          // 'source-layer':this.sourceLayer
        }
      }

      if (this.geoJSON) {
        return { type: 'geojson', data: this.geoJSON }
      }

      if (sourceProperties) {
        if (_.isFunction(sourceProperties)) {
          sourceProperties = sourceProperties.apply(this)
        }
        return { ...sourceProperties, ...this.sourceOptions }
        // if not have, faalback to geoJson source
      } else {
        var data = this._geoJSON || geojsonTemplate
        return { type: 'geojson', data: data, ...this.sourceOptions }
      }
    },

    setSource: function () {
      if (!this.map) return false

      var sourceDefinition = this.getSourceDefinition()
      var sourceObject = this.map.getSource(this.sourceName)

      if (sourceObject) {
        if (_.isFunction(sourceObject.setData) && sourceDefinition.data) { sourceObject.setData(sourceDefinition.data) }
      } else {
        delete sourceDefinition.id
        // LETODO - poder ver se esta usando o mesmo source para todos poder mudar
        // vejo se o source ja existe no mapa, se ja existe nao preciso colocar ele
        this.map.addSource(this.sourceName, sourceDefinition)
      }
    },

    setZoomRange: function () {
      this.map.setLayerZoomRange(
        this.layerName,
        this.zoomMin,
        this.zoomMax
      )
    },

    setLayerOrder: function () {
      if (!this.layerAdded) return false
      var layerBeforeName = this.$store.getters.beforeLayer(this.layerName)
      var layer = this.map.getLayer(layerBeforeName)
      if (layer) {
        if (layerBeforeName != '' && layerBeforeName != this.layerName) {
          this.map.moveLayer(this.layerName, layerBeforeName)
        } else {
          this.map.moveLayer(this.layerName)
        }
      }
    },

    getLayerStyle: function () {
      let styleOrigem
      if (this.layerStyle) {
        styleOrigem = this.layerStyle
      } else {
        styleOrigem = this.$options.style
      }

      var style

      if (_.isFunction(styleOrigem)) {
        style = styleOrigem.apply(this)
      } else {
        style = styleOrigem
      }

      if (this.sourceLayer) {
        style['source-layer'] = this.sourceLayer
      }

      if (!style.source) style.source = this.sourceName
      // if(!style.id)
      style.id = this.layerName

      if (!style.minzoom) style.minzoom = Number(this.zoomMin)
      if (!style.maxzoom) style.maxzoom = Number(this.zoomMax)
      return style
    },

    setLayerStyle: function () {
      if (!this.map && this.layerAdded) return
      console.log('update style for: ' + this.layerName)
      const styleRoot = this.map.getStyle()
      const layerIndex = _.findIndex(styleRoot.layers, { id: this.layerName })
      const layerStyle = this.getLayerStyle()
      styleRoot.layers[layerIndex] = layerStyle
      this.map.setStyle(styleRoot)
      // return style;
    },

    setLayerFilter: function () {
      if (!this.map && this.layerAdded) return
      this.map.setFilter(this.layerName, this.filter)
    },

    setFeatureData: function () {
      if (!this.map && this.layerAdded) return

      const keys = _.map(this.featureData, (v, k) => k)
      // let features = this.map.querySourceFeatures(this.layerName, {
      //    this.mapboxmap.queryRenderedFeatures({layers:['regionalizacao-heatmap_layer'], filter:["match", ["get", "geocod"],["3300225","3172103"],true,false] });

      // let features = this.map.querySourceFeatures(this.sourceName, {
      //     sourceLayer: this.layer,
      //     filter: ['in', this.featureDataKey, ...keys]
      // });

      // LETODO - nao funciona sem o vector ja vim com o id mesmo pelo jeito
      // let features = this.map.queryRenderedFeatures({layers:[this.layerName],
      //     filter: ['in', this.featureDataKey, ...keys]
      // });

      // _.each(features,feature=>{
      //     feature.id = feature.properties.id
      //     this.map.setFeatureState(feature,{hover:true})
      // })
    },

    animateLine: function (time, follow = false) {
      if (!this.geoJSON) return false
      var distance = 0
      var geoJsonTemp
      var distanceTotal = turf.length(this.geoJSON)
      this.map.resize()
      if (follow) {
        var paddingHorizontal = 50 // window.innerWidth * 1 / 4;
        var paddingVertical = 50 // window.innerHeight * 1 / 4;
        var bbox = turf.bbox(this.geoJSON)
        this.map.fitBounds(bbox, {
          padding: {
            top: paddingVertical,
            bottom: paddingVertical,
            left: paddingHorizontal,
            right: paddingHorizontal
          },
          duration: 0.8 * time * 1000
        })
      }

      var startDistane = 0
      var obj = { distance: 0 }
      // greensock for animation control
      this.tween.to(obj, time, {
        distance: distanceTotal,
        onUpdate: () => {
          if (obj.distance > distanceTotal) {
            geoJsonTemp = this.geoJSON
          } else {
            geoJsonTemp = turf.lineSliceAlong(
              this.geoJSON,
              startDistane,
              obj.distance
            )
          }
          this._geoJSON = geoJsonTemp
          this.setSource()
        }
      })
      this.tween.play()
    },

    animateFeatures: function (time, follow = false) {
      if (!_.hasIn(this.geoJSON, 'features')) return false
      //  get all corrds from json
      var geoJsonTemp = { ...this.geoJSON }
      var featuresOriginal = [...this.geoJSON.features]
      var totalFeatures = featuresOriginal.length
      var _t = this
      var obj = { total: 0 }

      this.tween.add(
        TweenMax.to(obj, time, {
          total: totalFeatures,
          ease: SteppedEase.config(totalFeatures),
          onUpdate: function () {
            if (obj.total > totalFeatures) {
              geoJsonTemp = { ..._t.geoJSON }
            } else {
              geoJsonTemp.features = [
                ...featuresOriginal.slice(0, parseInt(obj.total))
              ]
            }
            _t._geoJSON = geoJsonTemp
            _t.setSource()
          }
        })
      )

      this.tween.play()
    }
  },

  style: function () {
    return {
      type: 'symbol',
      layout: {
        'icon-image': 'marker_km',
        'icon-anchor': 'bottom',
        'icon-allow-overlap': false,
        'text-field': '{name}',
        'text-anchor': 'bottom',
        'text-line-height': 1,
        'text-optional': true,
        'text-offset': {
          base: 1,
          stops: [[10, [0, -1]], [14, [0, -1]]]
        },
        'text-padding': 0,
        'text-size': {
          base: 1,
          stops: [[10, 6], [14, 12]]
        },
        'icon-size': {
          base: 1,
          stops: [[9, 0.1], [10, 0.2], [14, 1]]
        }
      },
      paint: {
        'text-color': 'white',
        'text-halo-color': 'white',
        'text-halo-width': 0.4,
        'text-halo-blur': 0.2,
        'text-opacity': {
          base: 1,
          stops: [[11.4, 0], [13, 1]]
        },
        'icon-opacity': {
          base: 1,
          stops: [[11.3, 0], [11.4, 1]]
        }
      }
    }
  }
} // mixin end

var geojsonTemplate = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[0, 0]]
      }
    }
  ]
}
