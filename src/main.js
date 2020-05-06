import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.config.MapBoxAccessToken = 'pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
