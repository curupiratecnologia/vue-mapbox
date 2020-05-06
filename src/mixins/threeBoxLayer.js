// import * as turf from '@turf/turf'
import length from '@turf/length'
import lineSliceAlong from '@turf/line-slice-along'
import bbox from '@turf/bbox'

import { scaleTime, scaleLinear } from 'd3-scale'
var turf = {
  length,
  lineSliceAlong
}

export default {

  name: 'layer',

  render: function (createElement) {
    return false
  },

  data () {
    return {
      _geoJSON: false,
      layerAdded: false,
      zoomRange: false, // [0,14]
      loadDelay: 20, // time to load layer
      icons: {}, // {name:url,name2:url2}
      // tween: new TimelineMax().pause(),
      obj: { total: 0 }, // this.$options.tween;
      sourceOptions: {},
      modelName: 'pontejk',
      modelDir: '/models3d/',
      zoom: 15,
      throttleZoomUpdate: 1
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

    threebox: function () {
      var parent = this.$parent
      while (parent) {
        if (_.hasIn(parent, 'threebox')) {
          return parent.threebox
          break
        }
        parent = parent.$parent
      }
      return false
    },

    sourceName: function () {
      return this.$options.name + '_source'
    },

    layerName: function () {
      return this.$options.name + '_layer'
    },

    tween: function () {
      return new TimelineMax().pause() // this.$options.tween;
    }

  },

  watch: {
    geoJSON: function (val) {
      this.tween.kill()
      this.tween.clear()
      this._geoJSON = val
      setTimeout(this.setSource, 0)
    }
    // zoom:function(val){
    //     setTimeout(this.setSource,5);
    // },
  },

  beforeCreate: function () {
    this._geoJSON = false
  },

  created: function () {
    this._geoJSON = this.geoJSON

    setTimeout(() => {
      this.setSource()
      this.addLayer()
    }, this.loadDelay * 1000)
  },

  methods: {

    addLayer: function () {
      if (this.threebox && !this.layerAdded) {
        this.zoom = this.map.getZoom()

        this.layerAdded = true

        console.log('Adding _geoJSON threebox')
        console.log(this._geoJSON)

        this.layer = this.threebox.addSymbolLayer({
          source: this._geoJSON,
          modelName: this.modelName,
          modelDirectory: this.modelDir,
          rotation: { generator: feature => new THREE.Euler(_.degToRad(feature.properties.rotation[0]), _.degToRad(feature.properties.rotation[1]), _.degToRad(feature.properties.rotation[2]), feature.properties.rotation[3]) },
          scale: {
            generator: feature => {
              var scale = _.get(feature, 'properties.scale', [1, 1, 1])
              var zoomScaleFactor = _.get(feature, 'properties.zoomScaleFactor', false)
              if (zoomScaleFactor) {
                var domain = _.map(zoomScaleFactor, o => o[0])
                var range = _.map(zoomScaleFactor, o => o[1])

                var scaleFunc = scaleLinear().range(range).domain(domain)

                var factorValue = scaleFunc(this.zoom) // _.fromToInterpolation(zoomScaleFactor[0][0],zoomScaleFactor[1][0],zoomScaleFactor[0][1],zoomScaleFactor[1][1],this.zoom,true);

                factorValue = _.clamp(factorValue, _.last(range), range[0])

                scale = _.map(scale, val => val * factorValue)
              }
              return [...scale]
            }
          },
          scaleWithMapProjection: true,
          id: { property: 'key' }
        })

        setTimeout(() => {
          var debounceFunc = _.throttle(() => {
            if (this.layer) {
              this.zoom = this.map.getZoom()
              this.setSource()
            }
          }, 10)// this.throttleZoomUpdate)

          this.map.on('zoom', debounceFunc)

          debounceFunc()
        }, 2000)
      }
    },

    getSourceDefinition: function () {
      // first check for source properties
      var sourceProperties = _.get(this.$options, 'source')
      if (sourceProperties) {
        if (_.isFunction(sourceProperties)) { sourceProperties = sourceProperties.apply(this) }
        return { ...sourceProperties, ...this.sourceOptions }
        // if not have, faalback to geoJson source
      } else {
        var data = this._geoJSON || geojsonTemplate
        return { type: 'geojson', data: data, ...this.sourceOptions }
      }
    },

    setSource: function () {
      if (!this.layer) return false
      this.layer.updateSourceData(this._geoJSON)
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
            geoJsonTemp = turf.lineSliceAlong(this.geoJSON, startDistane, obj.distance)
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

      this.tween.add(TweenMax.to(obj, time, {
        total: totalFeatures,
        ease: SteppedEase.config(totalFeatures),
        onUpdate: function () {
          if (obj.total > totalFeatures) {
            geoJsonTemp = { ..._t.geoJSON }
          } else {
            geoJsonTemp.features = [...featuresOriginal.slice(0, parseInt(obj.total))]
          }
          _t._geoJSON = geoJsonTemp
          _t.setSource()
        }
      }))

      this.tween.play()
    }

  },

  style: function () {
    return {

    }
  }
} // mixin end

var geojsonTemplate = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [0, 0]
      ]
    }
  }]
}
