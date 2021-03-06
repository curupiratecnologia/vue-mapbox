
Normal Marker 
```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="350px"
      width="100%"
      :center="[-45, -15]">
          <vm-marker :center="[-45, -15]"></vm-marker>

    </VueMapbox>

```

A custom marker, just set a child/default slot.

We can set a min and max zoom to markers, just like layers.
```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="350px"
      width="100%"
      :center="[-45, -15]">
          <vm-marker 
            max-zoom="9"
            color="red"
            popUpContent="This is show in popup"
            :center="[-45, -15]">
                <template v-slot:marker>
                 <div style="background:blue">I'm a marker</div>
                </template>
          </vm-marker>

    </VueMapbox>

```






### Popups in marker


We can set a popup to be show on hover, using the slot popupHover, or in click, using popupClick or just using Vmpopup inside marker tag.

We can use popupHover and popupClick with diferent content at the same time, like the example below


```vue
<template>
<div>
     <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="350px"
      width="100%"
      :center="[-45, -15]">
          <vm-marker 
            color="red"
            :center="center">

            <template v-slot:popupHover>
                <b>{{popupcontent}}</b>
            </template>
            <template v-slot:popupClick>
                <b> A clicked popup </b>
            </template>
          
          </vm-marker>

    </VueMapbox>
    
    <button @click="changecenter"> Change Center </button>
    <input type="text" v-model="popupcontent">
    {{popupcontent}}
    </div>
</template>
<script>

// You can also use 'export default {}' style module exports.
export default {
  data() {
    return { center: [-45, -15], popupcontent:"a popup via slot" }
  },
  methods: {
    changecenter() {
      this.center =  [ this.center[0]-1, this.center[1]-2]
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 10px;
}
.text-name {
  color: red;
}
</style>
```


Popup in Marker set via Props

```vue
<template>
<div>
     <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="350px"
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

    </VueMapbox>
    
    <button @click="changecenter"> Change Center </button>
    <input type="text" v-model="popupcontent">
    <button @click="color='blue'"> change color </button>

    </div>
</template>
<script>

// You can also use 'export default {}' style module exports.
export default {
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
<style scoped>
.wrapper {
  padding: 10px;
}
.text-name {
  color: red;
}
</style>
```

Or a Popup Componente inside Marker


```vue
<template>
<div>
     <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="350px"
      width="100%"
      :center="[-45, -15]">
          <vm-marker 
            color="red"
            :center="center">
            
              <VmPopup open>
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
              </VmPopup>
                
          </vm-marker>

    </VueMapbox>
    
    <button @click="changecenter"> Change Center </button>
    <input type="text" v-model="popupcontent">
    {{popupcontent}}
    </div>
</template>
<script>

// You can also use 'export default {}' style module exports.
export default {
  data() {
    return { center: [-45, -15], popupcontent:"a popup via slot" }
  },
  methods: {
    changecenter() {
      this.center =  [ this.center[0]-1, this.center[1]-2]
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 10px;
}
.text-name {
  color: red;
}
</style>
```


