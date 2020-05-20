
### Simple Geojson Layer. 

The Layers set inside vmSource components, will use it as they source.
You can set they source as props, passing a already defined source id, or a source object

This example show  dynamic paint props change clicling in the button

```vue
<template>
    <div>
      <VueMapbox mapStyle="mapbox://styles/mapbox/dark-v10" height="400px" width="100%" :center="[-45, -15]">

       <vmSource name="exampleSource" type="geojson" :options="{ data: 'http://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4'}" >
                <vmLayer name="myLayer"
                        type="fill"
                        @mousemove="callMethod"
                        :paint="{ 'fill-color': color, 'fill-opacity': opacity  }"
                />
       </vmSource>

        <!-- Source can be refered too -->
        <vmLayer name="myLayer2"
                  source="exampleSource"
                        type="line"
                        :paint="{ 'line-color': '#333333' }"
        />


    </VueMapbox>
    <br/>
    <button @click="changeColor"> Change Color </button>

    mousemove event point: {{event}}

    </div>
</template>

<script>
// import VmLayer from '../src/components/VmLayer.vue'
// You can also use 'export default {}' style module exports.
export default {
  // components:{ VmLayer },
  data() {
    return { 
      color: "red",
      opacity: 1,
      center: [-45, -15],
      event:null
    }
  },
  methods: {
    callMethod: function(e){
        this.event = e.point
    },
    changeColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.color =  color;
      // this.center =  [ this.center[0]-1, this.center[1]-2]
    }
  }
}
</script>

```









### Changing Features apparence on Hover or Click

We can change the look of a feature we hover or click in a Vectors layer, we just have to set the props **paint-hover**, **paint-click**, **layout-hove**, **layout-click**.

As they are hover o selected, the events **featureselect** or **featurehover** are dispatch, with an array the features

We are able to select more than one feature when clicking with a modifier key, using the **multipleFeatureSelectionOn** props.
* *OBS: In gejson source layer have to set the generateId:true.*


```vue
<template>
      <div>
      <VueMapbox v-once key="mymap" mapStyle="mapbox://styles/mapbox/dark-v10" height="400px" width="100%" :center="[-47, -15]" :zoom="5">
                <vmLayer name="myLayer"
                        :source="{type:'geojson',  generateId:true, data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4' }"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
                        :paint-hover="{ 'fill-color': 'red', 'fill-opacity': 1  }"
                        :paint-click="{ 'fill-color': 'blue', 'fill-opacity': 1   }"
                        multipleFeatureSelectionOn="alt"

                />
    </VueMapbox>
    <br />
    <b> Feature Hover properties </b> <pre>{{features}}</pre>
     Select multiple features clicking while using the AltKey
    </div>
</template>
<script>
export default {
  data() {
    return { 
      features: false,
      opacity: 1,
      center: [-45, -15],
    }
  },
  methods: {
    featureover:function( features ) {
 
      if( Array.isArray(features) && features[0] && features[0].properties){
        this.features = features[0].properties
      }else{
        this.features = false
      }
 
    }
  }
}
</script>
```








### Showing Popups when Features are Hover or Click


We can use slots **popupHover** or **popupClick**, or both, to show a popup when a feature is hover or selected.
They can be scoped slots, that will recive a object with **features** key

If we use a VmPopup component inside this slots, it properties will be used as the popup

```vue
<template>
      <div>
      <VueMapbox v-once key="mymap" mapStyle="mapbox://styles/mapbox/dark-v10" height="400px" width="100%" :center="[-47, -15]" :zoom="5">
                 <vmLayer name="myLayer"
                        :source="{type:'geojson',  generateId:true, data: 'http://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4' }"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
                        :paint-hover="{ 'fill-color': fill, 'fill-opacity': 1  }"
                        :paint-click="{ 'fill-color': 'blue', 'fill-opacity': 1   }"
                        multipleFeatureSelectionOn="alt"
                        >

                       <template v-slot:popupHover>
                              <h6> Here goes the pop up content while in <b>HOVER</b> a Feature.</h6>
                        </template>

                        <template v-slot:popupClick="slotProps">
                          <VmPopup max-width="400px">
                               <pre>{{ slotProps.features && slotProps.features[0] && slotProps.features[0].properties }}</pre>
                              <h6>Here goes the pop up content while in <b>CLICK</b> a Feature.</h6>
                          </VmPopup>
                        </template>


                 </vmLayer>
    </VueMapbox>
    <br />
    <b> Feature Hover properties </b> <pre>{{features}}</pre>
    </div>
</template>
<script>
// import VmLayer from '../src/components/VmLayer.vue'
// You can also use 'export default {}' style module exports.
export default {
  // components:{ VmLayer },
  data() {
    return { 
      features: false,
      opacity: 1,
      center: [-45, -15],
    }
  },
  methods: {
  }
}
</script>
```



