## Inhehit all props from VmMarker

Normal Donut Marker 
```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="300px"
      width="100%"
      :center="[-45, -15]">

         <VmMarkerDonut :center="[-45, -15]"  :dataSet="[1,2,3,4,5,6]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
         </VmMarkerDonut>
         <VmMarkerDonut :center="[-43, -14]"  :dataSet="[100,20,3,47,5,600]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
         </VmMarkerDonut>
        
    </VueMapbox>

```

We can set the radius, fontsize, chart bars with etc
```vue
<template>
<div>
     <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="300px"
      width="100%"
      :center="[-45, -15]">

        <VmMarkerDonut :center="[-43, -14]" :fontSize="fontSize" :radius="radius" :chartWidth="chartWidth" :dataSet="[100,20,3,47,5,600]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
             <VmPopup >
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
              </VmPopup>
        </VmMarkerDonut>

    </VueMapbox>
    <br>
    <div> radius: <input v-model="radius" type="range" min="10" max="50">  {{radius}} </div>
    <div> chartWidth: <input v-model="chartWidth" type="range" min="1" max="50"> {{chartWidth}} </div>
    <div> fontSize: <input v-model="fontSize" type="range" min="9" max="24"> {{fontSize}} </div>

    </div>
</template>
<script>

// You can also use 'export default {}' style module exports.
export default {
  data() {
    return { 
      radius: 40,
      chartWidth: 20,
      fontSize: 12,
      center: [-45, -15],
      popupcontent:"a popup via slot" }
  },

}
</script>

```



Donut Markers with popup
```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="300px"
      width="100%"
      :center="[-45, -15]">

         <VmMarkerDonut :center="[-45, -15]"  :dataSet="[1,2,3,4,5,6]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
             <VmPopup :open="true">
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
              </VmPopup>
         </VmMarkerDonut>
         <VmMarkerDonut :center="[-43, -14]"  :dataSet="[100,20,3,47,5,600]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
             <VmPopup :open="false">
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
              </VmPopup>
         </VmMarkerDonut>
        
    </VueMapbox>

```



Donut Markers Scale changing on zoom
```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="300px"
      width="100%"
      :center="[-45, -15]">

         <VmMarkerDonut :zoomScale="[4,0.4, 7, 2, 10, 1]" :center="[-45, -15]"  :dataSet="[1,2,3,4,5,6]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
         </VmMarkerDonut>
        

         <VmMarkerDonut :center="[-42, -15]"  :dataSet="[1,2,3,4,5,6]"  :dataColor="['#05bc5d','#050337','#b7d89d','#de84a2','#8e3529','#b123f3']" >
         </VmMarkerDonut>
        
        
    </VueMapbox>

```
