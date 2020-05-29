
<script>
// import getOnlyMapboxProps from '../../utils/getOnlyMapboxProps'
// import findVNodeChildren from '../../utils/findVNodeChildren'
// import findIndex from 'lodash/findIndex'
// import VmLayer from '../VmLayer'

// import has from 'lodash/has'
// import get from 'lodash/get'
// import set from 'lodash/set'

export default {

  name: 'VmLayerVector',

  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance', 'getSource'],

  props: {

  },

  created: function () {
    // get props not set, we eill use it to pass for VmLayer Base component
    // const props = this.$attrs
  },

  data () {
    return {
      layerId: null,
      sourceId: null,
      selectedFeatures: [],
      hoverFeatures: [],
      hasChildPopup: null,
      lastClick: null
    }
  },

  render (h) {
    return null
  }

}

</script>
