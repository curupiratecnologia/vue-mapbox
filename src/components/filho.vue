<template>

    <div>
           sou o filho asdfZXca asdf asdf asdfsda asdf asdf:{{numero}}<br/>
           numero interno animado:{{numerointerno}}<br/>
           <slot></slot>
    </div>

</template>
<script>

export default {
  props: {
    numero: {
      type: Number,
      default: 0
    }

  },
  data () {
    return { numerointerno: 0 }
  },
  created () {
    setInterval(() => this.numerointerno++, 1)
  },

  beforeUpdate () {
    console.log('🚀 ~ file: filho.vue ~ line 18 ~ beforeUpdate ~ beforeUpdate')

//debugger
  },
  updated () {
    console.log('🚀 ~ file: filho.vue ~ line 23 ~ updated ~ updated')

//debugger
  }
}

</script>
