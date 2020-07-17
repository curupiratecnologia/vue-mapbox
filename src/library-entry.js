import VueMapbox from './components/VueMapbox.vue'
import VmMarker from './components/VmMarker.vue'
import VmPopup from './components/VmPopup.vue'
import VmLayer from './components/VmLayer.vue'
import VmSource from './components/VmSource.vue'
import VmImage from './components/VmImage.vue'
import VmLayerVector from './components/Layers/VmLayerVector.vue'
import VmMarkerDonut from './components/Markers/VmMarkerDonut.vue'

export default {
  VueMapbox,
  VmMarker,
  VmPopup,
  VmLayer,
  VmSource,
  VmLayerVector,
  VmMarkerDonut,

  install (Vue) {
    Vue.component('VueMapbox', VueMapbox)
    Vue.component('VmMarker', VmMarker)
    Vue.component('VmPopup', VmPopup)
    Vue.component('VmLayer', VmLayer)
    Vue.component('VmSource', VmSource)
    Vue.component('VmImage', VmImage)
    Vue.component('VmVectorLayersSource', VmLayerVector)
    Vue.component('VmMarkerDonut', VmMarkerDonut)
  }
}
