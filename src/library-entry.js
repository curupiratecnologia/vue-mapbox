// import VueMapbox from './components/VueMapbox.vue'
import VmMarker from './components/VmMarker.vue'
import VmPopup from './components/VmPopup.vue'
import VmLayer from './components/VmLayer.vue'
// import VmLayerArc from './components/VmLayerArc.vue'
import VmSource from './components/VmSource.vue'
import VmImage from './components/VmImage.vue'
import VmLayerVector from './components/Layers/VmLayerVector.vue'
import VmMarkerDonut from './components/Markers/VmMarkerDonut.vue'
import LoadingComponent from './components/LoadingComponent'
import ErrorComponent from './components/ErrorComponent'

export default {
  VueMapbox: () => ({
    // O componente a carregar (deve ser uma Promise)
    component: import(/* webpackChunkName: "the-vue-mapbox" */ './components/VueMapbox.vue'),
    // Um componente para usar enquanto o assíncrono é carregado
    loading: LoadingComponent,
    // Um componente para usar se o carregamento falhar
    error: ErrorComponent,
    // Espera antes de exibir o componente de loading. Padrão: 200ms
    delay: 200,
    // O componente de erro será exibido se um timemout for
    // fornecido e excedido. Padrão: Infinity
    timeout: 3000
  }),
  VmMarker,
  VmPopup,
  VmLayer,
  VmLayerArc: () => ({
    // O componente a carregar (deve ser uma Promise)
    component: import(
      /* webpackChunkName: "the-decker" */
      /* webpackPrefetch: false */
      /* webpackPreload: false */
      './components/VmLayerArc.vue'),
    // Um componente para usar enquanto o assíncrono é carregado
    loading: LoadingComponent,
    // Um componente para usar se o carregamento falhar
    error: ErrorComponent,
    // Espera antes de exibir o componente de loading. Padrão: 200ms
    delay: 200,
    // O componente de erro será exibido se um timemout for
    // fornecido e excedido. Padrão: Infinity
    timeout: 3000
  }),
  VmSource,
  VmLayerVector,
  VmMarkerDonut,
  VmImage,

  install (Vue) {
    Vue.component('VueMapbox', this.VueMapbox)
    Vue.component('VmLayerArc', this.VmLayerArc)
    Vue.component('VmMarker', VmMarker)
    Vue.component('VmPopup', VmPopup)
    Vue.component('VmLayer', VmLayer)
    Vue.component('VmSource', VmSource)
    Vue.component('VmImage', VmImage)
    Vue.component('VmVectorLayersSource', VmLayerVector)
    Vue.component('VmMarkerDonut', VmMarkerDonut)
  }
}
