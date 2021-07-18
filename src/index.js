// export { default as VueMapbox } from './components/VmMapboxSmall.vue'
export { default as VueMapbox } from './components/VueMapbox.vue'
export { default as VmSource } from './components/VmSource.vue'
export { default as VmMarker } from './components/VmMarker.vue'
export { default as VmPopup } from './components/VmPopup.vue'
export { default as VmLayer } from './components/VmLayer.vue'
export { default as VmLayerArc } from './components/VmLayerArc.vue'
export { default as VmImage } from './components/VmImage.vue'
export { default as VmLayerVector } from './components/Layers/VmLayerVector.vue'
export { default as VmMarkerDonut } from './components/Markers/VmMarkerDonut.vue'
export { default as LoadingComponent } from './components/LoadingComponent'
export { default as ErrorComponent } from './components/ErrorComponent'

// export VueMapbox as VueMapbox

// export default {
//   VueMapbox,
//   // VueMapbox: () => ({
//   //   // O componente a carregar (deve ser uma Promise)
//   //   component: import(/* webpackChunkName: "the-vue-mapbox" */ './components/VueMapbox.vue'),
//   //   // Um componente para usar enquanto o assíncrono é carregado
//   //   loading: LoadingComponent,
//   //   // Um componente para usar se o carregamento falhar
//   //   error: ErrorComponent,
//   //   // Espera antes de exibir o componente de loading. Padrão: 200ms
//   //   delay: 200,
//   //   // O componente de erro será exibido se um timemout for
//   //   // fornecido e excedido. Padrão: Infinity
//   //   timeout: 3000
//   // }),
//   VmMarker,
//   VmPopup,
//   VmLayer,
//   VmLayerArc,
//   // VmLayerArc: () => ({
//   //   // O componente a carregar (deve ser uma Promise)
//   //   component: import(
//   //     /* webpackChunkName: "the-decker" */
//   //     /* webpackPrefetch: false */
//   //     /* webpackPreload: false */
//   //     './components/VmLayerArc.vue'),
//   //   // Um componente para usar enquanto o assíncrono é carregado
//   //   loading: LoadingComponent,
//   //   // Um componente para usar se o carregamento falhar
//   //   error: ErrorComponent,
//   //   // Espera antes de exibir o componente de loading. Padrão: 200ms
//   //   delay: 200,
//   //   // O componente de erro será exibido se um timemout for
//   //   // fornecido e excedido. Padrão: Infinity
//   //   timeout: 3000
//   // }),
//   VmSource,
//   VmLayerVector,
//   VmMarkerDonut,
//   VmImage,

//   install (Vue) {
//     Vue.component('VueMapbox', VueMapbox)
//     Vue.component('VmLayerArc', VmLayerArc)
//     Vue.component('VmMarker', VmMarker)
//     Vue.component('VmPopup', VmPopup)
//     Vue.component('VmLayer', VmLayer)
//     Vue.component('VmSource', VmSource)
//     Vue.component('VmImage', VmImage)
//     Vue.component('VmVectorLayersSource', VmLayerVector)
//     Vue.component('VmMarkerDonut', VmMarkerDonut)
//   }
// }
