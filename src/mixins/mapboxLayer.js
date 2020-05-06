
import lineSliceAlong from '@turf/line-slice-along'
import bbox from '@turf/bbox'
import length from '@turf/length'
// import mapboxgl from 'mapbox-gl';
import center from '@turf/center-of-mass'

var turf = {
  lineSliceAlong,
  bbox,
  length,
  center
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
      loadDelay: 0, // time to load layer
      icons: {}, // {name:url,name2:url2}
      // tween: new TimelineMax().pause(),
      obj: { total: 0 }, // this.$options.tween;
      sourceOptions: {},
      nameLayerFromData: undefined//  if want to stecify a name for dinamic layer, set this attr in beforeCreate
    }
  },

  // master to all layer to be used to controll.
  // layer especific is set in computed properties
  // tweenMaster: new TimelineMax().pause(),

  computed: {
    geoJSON: function () {
      return false// this.$store.getters.kms;
    },

    race: function () {
      return this.$store.getters.currentRace
    },

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

    sourceName: function () {
      return _.get(this, 'nameLayerFromData', this.$options.name) + '_source'
    },

    layerName: function () {
      return _.get(this, 'nameLayerFromData', this.$options.name) + '_layer'
    },

    tween: function () {
      return new TimelineMax().pause() // this.$options.tween;
    },

    beforeLayer: function () {
      var layers = this.$store.state.layers
      var index = _.indexOf(layers, this.layerName)
      var layerBeforeName = layers[index + 1] || ''
      // get if layer exist
      var layer = this.map.getLayer(layerBeforeName)
      if (layer) {
        return layerBeforeName
      }
      return ''
    },

    layerOrder: function () {
      var layers = this.$store.state.layers
      var index = _.indexOf(layers, this.layerName)
      return index
    }
  },

  watch: {
    geoJSON: function (val) {
      this.tween.kill()
      this.tween.clear()
      this._geoJSON = val
      setTimeout(this.setSource, 200)
    }
  },

  beforeCreate: function () {
    this._geoJSON = false
  },

  mounted: function () {
    if (!this.$options.name) throw Error('Name of layer not defined')
    this._geoJSON = this.geoJSON
    // load icons
    // LETODO - check if error if not load icons after add to map
    if (!_.isEmpty(this.icons)) {
      _.each(this.icons, (v, k) => {
        this.map.loadImage(v, (error, image) => {
          try {
            if (error) {
              console.warn(error)
            } else {
              // this.map.addImage(k, image)
            }
          } catch (e) {
            console.warn(e)
          }
        })
      })
    }
    this.$store.commit('addLayer', this.layerName)
    setTimeout(() => {
      this.setSource()
      this.addLayer()
    }, this.loadDelay * 1000)
  },

  beforeDestroy: function () {
    this.map.removeLayer(this.layerName)
    this.map.removeSource(this.sourceName)
    // this.map.up
    console.log('REMOVENDO:' + this.layerName)
  },

  methods: {

    addLayer: function () {
      if (this.map && !this.layerAdded) {
        this.layerAdded = true
        var layerStyle = this.getLayerStyle()
        this.map.addLayer(layerStyle)
        this.setZoomRange()
        this.setEvents()
        setTimeout(() => this.setLayerOrder(), 500) // set a little delay to make time to olhers layers to be created
      }
    },

    removeEvents: function () {

    },

    setEvents: function () {
      // return false;
      var _t = this
      var map = this.map

      this.map.on('click', this.layerName, function (e) {
        if (e.originalEvent.cancelBubble) {
          return
        }

        // debugger;
        // alert('clicou em:' + _t.layerName )
        e.preventDefault()

        e = { ...e, ...e.features[0].properties }

        if (_.isFunction(_t.onClick)) { _t.onClick(e) }

        _t.$emit('click', e)
        _t.$emit('onClick', e)
      })

      if (_.isFunction(_t.popUp)) {
        window.popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
          // className: _t.popupClass
        })

        this.map.on('mousemove', this.layerName, (e) => {
          // console.log(this.layerName+new Date())
          // if (e.originalEvent.cancelBubble) {
          //     return;
          // }
          // e.originalEvent.cancelBubble = true;
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer'

          e.preventDefault()
          // var coordinates = turf.center(e.features[0]).geometry.coordinates
          var description = _t.popUp(e.features[0].properties)

          window.popup.setLngLat(e.lngLat)
            .setHTML(description)
            .addTo(map)
        })

        this.map.on('mouseleave', this.layerName, function () {
          map.getCanvas().style.cursor = ''
          window.popup.remove()
        })
      }
    },

    showPopupEvent: function (e) {

    },

    clickEvent: function (e) {

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
      if (!this.map) return false
      var sourceDefinition = this.getSourceDefinition()
      var sourceObject = this.map.getSource(this.sourceName)

      if (sourceObject) {
        if (_.isFunction(sourceObject.setData) && sourceDefinition.data) { sourceObject.setData(sourceDefinition.data) }
      } else {
        delete sourceDefinition.id
        this.map.addSource(this.sourceName, sourceDefinition)
      }
    },

    setZoomRange: function () {
      if (_.isArray(this.zoomRange)) { this.map.setLayerZoomRange(this.layerName, this.zoomRange[0], this.zoomRange[1]) }
    },

    setLayerOrder: function () {
      var layerBefore = this.beforeLayer
      if (layerBefore != '') {
        this.map.moveLayer(this.layerName, layerBefore)
      }
    },

    getLayerStyle: function () {
      if (_.isFunction(this.$options.style)) {
        var style = this.$options.style.apply(this)
      } else {
        var style = this.$options.style
      }
      if (!style.source) style.source = this.sourceName
      // if(!style.id)
      style.id = this.layerName
      return style
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
          stops: [
            [10, [0, -1]],
            [14, [0, -1]]
          ]
        },
        'text-padding': 0,
        'text-size': {
          base: 1,
          stops: [
            [10, 6],
            [14, 12]
          ]
        },
        'icon-size': {
          base: 1,
          stops: [
            [9, 0.1],
            [10, 0.2],
            [14, 1]
          ]
        }
      },
      paint: {
        'text-color': 'white',
        'text-halo-color': 'white',
        'text-halo-width': 0.4,
        'text-halo-blur': 0.2,
        'text-opacity': {
          base: 1,
          stops: [
            [11.4, 0],
            [13, 1]
          ]
        },
        'icon-opacity': {
          base: 1,
          stops: [
            [11.3, 0],
            [11.4, 1]
          ]
        }
      }
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
