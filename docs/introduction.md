# @curupira/Vue-Mapbox
## -- IN BETA --

A wrapper for Mapbox using Vue, with advanced features and abstractions, like custom markers, layers, change aparrence on hover, automatic popups and so... like the batman belt for maps in vue 





### Example Changing Features apparence on Hover or Click

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


### Donut Markers with popup.
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
            <template v-slot:popupHover>
           
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
   
            </template>
            <template v-slot:popupClick>
           
                  <h6>Here goes the pop up content. you can use any vue components as child of this.</h6>
   
            </template>
         </VmMarkerDonut>
        
    </VueMapbox>

```


