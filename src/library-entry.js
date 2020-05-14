import VueMapbox from './components/VueMapbox.vue'
import VmMarker from './components/VmMarker.vue'

export default {
  VueMapbox,
  VmMarker,
  install (Vue) {
    
    Vue.component('VueMapbox', VueMapbox)
    Vue.component('VmMarker', VmMarker)
  }
}
