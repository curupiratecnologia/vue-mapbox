<script>
export default {
  name: 'VmImage',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
     * URL of the image
     * cam be url or a svg string
     */
    url: {
      type: String,
      required: false
    },
    /**
     * Name of image
     */
    name: {
      type: String,
      required: true
    },
    /**
     * When the url or content change, will change the image
     */
    updateOnChange: {
      type: Boolean,
      required: false,
      default: true
    },
    witdh: {
      type: [Number, String],
      required: false
    },
    height: {
      type: [Number, String],
      required: false
    }
  },

  created: function () {
    if (!this.$slots?.default?.[0] && !this.url) {
      throw new Error('VmImage - need to define a URL, or a img or svg content')
    }
  },
  mounted: function () {
    this.observer = new MutationObserver(() =>{
      console.log('🚀 ~ file: vm-image.vue ~ filho mudou)')
      this.addImage()
    })

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, characterData: true, subtree: true }
    this.$nextTick(() => {
    // Start observing the target node for configured mutations
      this.observer.observe(this.$el, config)
      this.addImage()
    })
  },

  updated: function (v, ov) {
    this.addImage()
  },

  render: function (h) {
//debugger;
    if (this.$slots?.default?.[0]) {
      return h('div', { style: 'display:none' }, [this.$slots?.default[0]])
    }
    return null
  },

  beforeDestroy () {
    this?.observer?.disconnect()
  },
  destroyed: function () {
    this.MapboxVueInstance.removeImage(this.name)
  },

  methods: {
    addImage: function () {
      this.$nextTick(() => {
        if (!this?.MapboxVueInstance) return
        let tagElm = this?.$el
        // if not root, find children
        if (tagElm?.constructor?.name === 'HTMLDivElement') {
          tagElm = (this.$el.querySelector('svg') || this.$el.querySelector('img'))
        }
        if (tagElm?.constructor?.name === 'SVGSVGElement' || tagElm?.constructor?.name === 'HTMLImageElement') {
          this.MapboxVueInstance.addImage(this.name, tagElm, this.updateOnChange)
        } else {
          this.MapboxVueInstance.addImage(this.name, this.url, this.updateOnChange)
        }
      })
    }
  }
}
</script>
