<script>
export default {
  name: 'VmImage',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],
  props: {
    /**
     * URL of the image
     */
    url: {
      type: String,
      required: true
    },
    /**
     * Name of image
     */
    name: {
      type: String,
      required: true
    }
  },

  created: function () {
    this.MapboxVueInstance.addImage(this.name, this.url)
  },

  render: function (h) {
    return null
  }
}
</script>
