<template>
    <div><slot></slot></div>
</template>

<script>

import layer from '../mixins/mapboxLayerMixin.js'

export default {

  mixins: [layer]

}

</script>
