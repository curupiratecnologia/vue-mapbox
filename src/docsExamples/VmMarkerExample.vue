<template>
    <div>

        <h1> Default Marker </h1>

        <VueMapboxSetup>
            <vm-marker :center="[-45, -15]"></vm-marker>
        </VueMapboxSetup>

        <h1> Custom Marker w popup via props</h1>

        <VueMapboxSetup>
            <vm-marker
            :center="[-45, -15]"
            popUpContent="popup via props"
            >
                <div style="cursor:pointer; background:red; width:50px; "> MARKER </div>
            </vm-marker>
        </VueMapboxSetup>

        <h1> Default Marker popup via slots</h1>

        <VueMapboxSetup>
            <vm-marker
            :center="[-45, -15]"
            color="red"
            >
           <template v-slot:popup>
            <div>
                Ahhh, olha eu aqui
                <pre>{{$data}}</pre>
            </div>
          </template>
            </vm-marker>
        </VueMapboxSetup>

    </div>
</template>

<script>

export default {

  components: {
    VueMapboxSetup: () => import('./VueMapboxSetup.vue'),
    VmMarker: () => import('@/components/VmMarker.vue')
  }

}
</script>
