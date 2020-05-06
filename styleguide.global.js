import Vue from 'vue'
import './main.stylus'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.debug = true
Vue.config.devTools = true
Vue.config.MapBoxAccessToken = 'pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA'

// function requireAllComponents (requireContext) {
//   var keys = requireContext.keys()
//   _.forEach(keys, k => {
//     var modulo = requireContext(k)
//     var nome = k.match(/([^/]*).vue$/)
//     Vue.component(nome[1], modulo.default || modulo)
//   })
// }

// // requireAllComponents(require.context("./src/elements", true, /^\.\/.*\.vue$/));
// requireAllComponents(require.context('./src/components', true, /^\.\/.*\.vue$/))

const requireComponent = require.context(
  // The relative path of the components folder
  './src/components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

export default previewComponent => {
  return {
    render (createElement) {
      return createElement(previewComponent)
    }
  }
}
