
## This is the main components.

It wrappes Mapbox in vue components.
 ### **Setting API for Mapbox**
There are two options to set the api.
* Set it in the use of component, like:
     *<VueMapbox accessToken="YOUR_API"...*

* Set an env, accesible via client via:
     *process.env.VUE_APP_MAPBOX_ACCESS_TOKEN*




Simple example

```vue
    <VueMapbox
      mapStyle="mapbox://styles/mapbox/dark-v10"
      height="300px"
      width="100%"
      :center="[-45, -15]">
          
          <vm-marker :center="[-45, -15]"></vm-marker>

    </VueMapbox>

```