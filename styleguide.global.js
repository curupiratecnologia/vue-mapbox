import Vue from 'vue'
// import './main.stylus'
import _ from 'lodash'

Vue.config.debug = true
Vue.config.devTools = true
Vue.config.MapBoxAccessToken = 'pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA'

function requireAllComponents (requireContext) {
  var keys = requireContext.keys()
  _.forEach(keys, k => {
    var modulo = requireContext(k)
    var nome = k.match(/([^/]*).vue$/)
    console.log(nome[1])
    Vue.component(nome[1], modulo.default)
  })
}

requireAllComponents(require.context('./src/components', true, /^\.\/.*\.vue$/))

export default previewComponent => {
  return {
    render (createElement) {
      return createElement(previewComponent)
    }
  }
}
