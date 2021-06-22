
<script>

export default {
  mounted: function () {
    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(() => console.log('🚀 ~ file: pai-teste.vue ~ line 1 ~ filho mudouuuu :)'))

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, characterData: true, subtree: true }
    this.$nextTick(() => {
    // Start observing the target node for configured mutations
      this.observer .observe(this.$el, config)
    })

    // Later, you can stop observing
    // observer.disconnect()
  },
  beforeUpdate () {
    console.log('🚀 ~ file: pai-teste.vue ~ line 9 ~ beforeUpdate ~ beforeUpdate')
//debugger
  },
  updated () {
    console.log('🚀 ~ file: pai-teste.vue ~ line 12 ~ updated ~ updated')
//debugger
  },
  render (h) {
    console.log('🚀 ~ file: pai-teste.vue ~ line 13 ~ render ~ render')
    return h('div', { style: 'display:block', updated: function () { console.log('filho update by pai') } }, [this.$slots?.default[0]])
  }
}
</script>
