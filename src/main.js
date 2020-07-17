import Vue from 'vue'
import App from './App.vue'
import forEach from 'lodash/forEach'

Vue.config.productionTip = false

Vue.config.MapBoxAccessToken = 'pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA'


function requireAllComponents (requireContext) {
  var keys = requireContext.keys()
  forEach(keys, k => {
    var modulo = requireContext(k)
    var nome = k.match(/([^/]*).vue$/)
    Vue.component(nome[1], modulo.default || modulo)
  })
}

// requireAllComponents(require.context("./src/elements", true, /^\.\/.*\.vue$/));
requireAllComponents(require.context('./components', true, /[A-Z]\w+\.(vue|js)$/))
// requireAllComponents(require.context('./components/Sources', false, /[A-Z]\w+\.(vue|js)$/))
// requireAllComponents(require.context('./components/Layers', false, /[A-Z]\w+\.(vue|js)$/))



new Vue({
  render: h => h(App)
}).$mount('#app')
