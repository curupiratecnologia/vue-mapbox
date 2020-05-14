
Base Source Component.

```vue
<template>
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="200px"
      width="100%"
      :center="[-45, -15]">
      <vm-marker 
            :rotation="45"
            pitchAlignment="map"
            rotationAlignment="map"
            :color="color"
            :popUpContent="popupcontent"
            :center="center">
            
          </vm-marker>

           <VmSource name="example" type="geojson" :options="{ data: '/geojson/geojson.example.json' }" >
                <VmLayer name="myLayer"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 1, 0.5 ] }"
                />
                <VmLayer name="myLayer2"
                        type="line"
                        :paint="{ 'line-color': '#333333' }"
                />
       </VmSource>
  
    </VueMapbox>
</template>

<script>
// import VmLayer from '../src/components/VmLayer.vue'
// You can also use 'export default {}' style module exports.
export default {
  // components:{ VmLayer },
  data() {
    return { 
      color: "red",
      center: [-45, -15],
      popupcontent:"a popup via slot" }
  },
  methods: {
    changecenter() {
      this.center =  [ this.center[0]-1, this.center[1]-2]
    }
  }
}
</script>

```
