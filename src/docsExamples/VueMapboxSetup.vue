<template>
  <div>
    <center>
    <VueMapbox
      accessToken="pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      height="500px"
      width="800px">
            <slot></slot>
    </VueMapbox>
    </center>
  </div>
</template>

<script>

export default {

  components: {
    VueMapbox: () => import('../components/VueMapbox.vue')
  }

}
</script>
