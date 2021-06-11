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
    forceUpdate: {
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
    this.$nextTick(() => {
      this.addImage()
    })
  },
  updated: function (v, ov) {
    this.addImage()
  },

  render: function (h) {
    if (this.$slots?.default?.[0]) {
      return h('div', { style: 'display:none' },[this.$slots?.default[0]])
    }
    return null
  },

  destroyed: function () {
    // this.MapboxVueInstance.removeImage(this.name)
  },

  methods: {
    addImage: function () {
      this.$nextTick(() => {
        let tagElm = this?.$el
        // if not root, find children
        if (tagElm?.constructor?.name === 'HTMLDivElement') {
          tagElm = (this.$el.querySelector('svg') || this.$el.querySelector('img'))
        }
        if (tagElm?.constructor?.name === 'SVGSVGElement' || tagElm?.constructor?.name === 'HTMLImageElement') {
          this.MapboxVueInstance.addImage(this.name, tagElm, this.forceUpdate)
        } else {
          this.MapboxVueInstance.addImage(this.name, this.url, this.forceUpdate)
        }
      })
    }
  }
}
</script>
