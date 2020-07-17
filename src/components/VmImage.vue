<script>
export default {
  name: 'vm-image',
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
  }
}
</script>
