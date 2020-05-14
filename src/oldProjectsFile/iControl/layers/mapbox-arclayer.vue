
<script>

import layer from '../mixins/deckglLayerMixin.js'

export default {

  mixins: [layer],

  name: 'fluxo-lines',

  props: {
    dataInput: {
      default: undefined
    },
    type: {
      default: 'ArcLayer'
    },
    getSourcePosition: {
      type: Function
    },
    getTargetPosition: {
      type: Function
    },
    getStrokeWidth: {
      type: Function,
      default: () => 0.1
    },
    getSourceColor: {
      type: Function,
      default: () => [86, 144, 146]
    },
    getTargetColor: {
      type: Function,
      default: () => [125, 56, 188]
    },
    opacity: {
      default: 0
    }

  },

  data () {
    return {
      loadDelay: 4
    }
  },
  created () {

  },

  computed: {
    geoJSON: function () {
      return this.$store.getters.kms
    }
  },

  methods: {

  },

  style: function () {
    return {
      // id: 'my-arc',
      type: 'ArcLayer',
      getSourcePosition: this.getSourcePosition, // d => d.START,
      getTargetPosition: this.getTargetPosition,
      getSourceColor: this.getSourceColor,
      getTargetColor: this.getTargetColor,
      getStrokeWidth: this.getStrokeWidth

    }
  }

}

</script>
