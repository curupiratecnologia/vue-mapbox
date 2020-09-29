# @curupira/vue-mapbox

A wrapper for Mapbox using Vue, with advanced features and abstractions, like custom markers adn layers, automatic change aparrence on hover, automatic popups and so... like the batman belt for maps in vue 


## [View Documentation](https://curupiratecnologia.gitlab.io/vue-mapbox/docs/)


## Project setup
### Install
```
npm install --save @curupira/vue-mapbox
```
### Use as plugin
```
import VueMapbox from '@curupira/vue-mapbox'
Vue.use(VueMapbox)
```

### Use as Components in a Component
```
import { VueMapbox, VmLayer, VmSource } from 'vue-mapbox' //and others
export defaults {
    components: { VueMapbox, VmLayer, VmSource } 
}
```
