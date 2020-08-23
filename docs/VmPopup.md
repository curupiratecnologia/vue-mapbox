

Example Simple Popup

```vue
<template>
    <VueMapbox mapStyle="mapbox://styles/mapbox/outdoors-v11" :height="200" width="100%">
        <VmPopup  
          :center="[-45, -15]"
          :open="true"
          :closeButton="false" 
          :closeOnClick="false" >
            <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
        </VmPopup>
    </VueMapbox>
</template>
```

Example Complete Popup. See use of .sync modifier in evento to update the open props of parent.

```vue
<template>
<div>
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      height="500px"
      width="800px">

        <VmPopup @open="abriu" @close="fechor" :center="center" :open.sync="open" :trackPointer="drag" :maxWidth="width" maxHeight="50px">
           {{width}}    {{label}}
        </VmPopup>

    </VueMapbox>
    </center>
      <br />
      Content: <input type="text" v-model="label" />
      <button @click="changecenter"> Change center </button>
      <button @click="open=!open"> Toogle Open </button>
      <button @click="drag=!drag"> Toogle Traking </button>
      <button @click="changeWidth"> chang MaxWidth </button>
      <div> {{ event }}</div>
    </div>
</template>
<script>

// You can also use 'export default {}' style module exports.
export default {
  data() {
    return { 
      center: [-45, -15],
      drag: false,
      open: true,
      label: 'Here goes the pop up content. you can use any vue components as child of this.',
      width: 200,
      event:''
    } 
  },
  methods: {
    changecenter() {
      this.center =  [ this.center[0]-1, this.center[1]-2]
    },
    changeWidth() {
      this.width -= 20
    },
    abriu:function(e){
      this.event ="open"
      console.log(e)
    },
    fechor:function(e){
      this.event ="close"
      console.log(e)
    }
  }
}
</script>
```
