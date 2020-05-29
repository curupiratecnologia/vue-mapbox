
### Simple Geojson Layer. 

The Layers set inside vmSource components, will use it as they source.
You can set they source as props, passing a already defined source id, or a source object

This example show  dynamic paint props change clicling in the button

```vue
<template>
    <div>
      <VueMapbox mapStyle="mapbox://styles/mapbox/dark-v10" height="400px" width="100%" :center="[-45, -15]">

       <vm-source name="exampleSource" 
                 type="geojson" 
                 :options="{ data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4'}" >
            
            <vm-layer name="myLayer"
                    type="fill"
                    @mousemove="callMethod"
                    :paint="{ 'fill-color': color, 'fill-opacity': 1  }"
            >
            </vm-layer>

       </vm-source>

        <!-- Source can be refered too -->
        <vm-layer name="myLayer2"
                 source="exampleSource"
                 type="line"
                 :paint="{ 'line-color': '#333333' }"
         >
         </vm-layer>

    </VueMapbox>
    <br/>
    <button @click="changeColor"> Change Color </button>

    mousemove event point: {{event}}

    </div>
</template>

<script>

export default {
  data() {
    return { 
      color: "#ff0000",
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
                        @featureselect="featureselect"

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
    featureselect:function( features ) {
 
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
                        :source="{type:'geojson',  generateId:true, data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4' }"
                        type="fill"
                        :paint="{ 'fill-color': '#ff7700', 'fill-opacity': 0.6  }"
                        :paint-hover="{ 'fill-color': '#ff7799', 'fill-opacity': 1  }"
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
  }
}
</script>
```





### Layers Order

The order of layer follow the "html" insertion of layers, just like div.
Even with layer add after, using v-if etc, will appers in order that they are set in html tree.

You can set the propx zIndex to define a order

``` vue
<template>
      <div>
      <VueMapbox  key="mymap" mapStyle="mapbox://styles/mapbox/dark-v10" height="400px" width="100%" :center="[-47, -15]" :zoom="5">
              
        <vm-source name="sourceInfo" type="geojson" :options="{ data: 'https://servicodados.ibge.gov.br/api/v2/malhas/52?formato=application/vnd.geo+json&resolucao=5&qualidade=4'}" />

           <vm-layer name="myLayer1" key="p1" :zIndex="order+0"  type="line" source="sourceInfo" :paint="{ 'line-color': '#0000FF' }"></vm-layer>
           <vm-layer name="myLayer2" type="fill" source="sourceInfo" :paint="{ 'fill-color': '#009933', 'fill-opacity': 0.7  }"></vm-layer>
           <vm-layer name="myLayer3" type="fill" source="sourceInfo" :paint="{ 'fill-color': '#009933', 'fill-opacity': 0.7  }"></vm-layer>
    </VueMapbox>
    <br />  
    {{order}}
    
      <button @click="changeIndex"> changeIndex </button>
    </div>
</template>
<script>

export default {
  data() {
    return { 
      show: false,
      order: 1
    }
  },
  methods: {
    changeIndex:function(){
      this.order = this.order+1
      if(this.order>3) this.order = 0
    }
  }
}
</script>
```
