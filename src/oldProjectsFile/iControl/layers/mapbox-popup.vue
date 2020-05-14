<template>
    <div style="display:none">
        <div v-if="show && info" ref="popup-content" >
           <slot name="content" :info="info" >
            </slot>
        </div>
    </div>
</template>

<script>

import mapboxgl from 'mapbox-gl'
import centerOfMass from '@turf/center-of-mass'
import center from '@turf/center'

export default {

  props: {
    layer: {
      default: '' // if not set get automatic from parents components
    },
    on: {
      default: 'mousemove' // click, ...mapbox events
    },
    off: {
      default: 'mouseleave' // click, ...mapbox events
    },
    popupPosition: {
      default: 'event' // [event, center, centrOfMass ]
    },
    closeButton: {
      default: false
    },
    closeOnClick: {
      default: false
    },
    className: {
      default: 'myPopup'
    }

  },

  data () {
    return {
      show: false,
      info: undefined
    }
  },

  created () {
    this.$nextTick(() => {
      this.createPopupEvent()
    })
  },

  beforeDestroy () {
    this.map.off(this.on, this.layername, this.popupShowEvent)
    this.map.off(this.off, this.layername, this.removePopup)
    this.removePopup()
    this.popup = undefined
  },

  computed: {
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

    layername: function () {
      if (this.layer != '') return this.layer
      var parent = this.$parent
      while (parent) {
        if (_.hasIn(parent, 'layerName')) {
          return parent.layerName
          break
        }
        parent = parent.$parent
      }
      return false
    }
  },

  methods: {
    createPopupEvent: function () {
      if (!this.map || !this.layername) return false

      if (!this.popup) {
        this.popup = new mapboxgl.Popup({
          closeButton: this.closeButton,
          closeOnClick: this.closeOnClick,
          className: this.className
        })
      }

      this.map.on(this.on, this.layername, this.popupShowEvent)

      this.map.on(this.off, this.layername, this.removePopup)
    },

    popupShowEvent: function (e) {
      this.show = true
      this.map.getCanvas().style.cursor = 'pointer'

      // LETODO - include change of feature in events
      // if( this._refInfo && this._refInfo != e.features[0] ){
      //     this._refInfo = e.features[0];
      // }else{
      //     this._refInfo = e.features[0];
      // }
      this.info = e.features[0].properties

      let point = e.lngLat
      if (this.popupPosition == 'centrOfMass') {
        point = centerOfMass(e.features[0]).geometry.coordinates
      } else if (this.popupPosition == 'center') {
        point = center(e.features[0]).geometry.coordinates
      }

      this.$nextTick(() => {
        if (this.popup) {
          this.popup.setLngLat(point)
            .setDOMContent(this.$refs['popup-content'])
            .addTo(this.map)
        }
      })
    },

    removePopup: function () {
      if (this.popup) {
        this.show = false
        this.info = undefined
        this._refInfo = undefined
        this.map.getCanvas().style.cursor = ''
        this.popup.remove()
      }
    }

  }

}

</script>

<style>

    .myPopup, .myPopup *{
        /* pointer-events:none !important; */
        /* min-width: 150px;
        background:white;
        color:black; */
    }

</style>
