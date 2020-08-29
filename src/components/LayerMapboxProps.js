const LAYER_DEFAULT_PROPS = {
  'background-color': { paint: true, layerType: 'background' },

  'background-opacity': { paint: true, layerType: 'background' },

  'background-pattern': { paint: true, layerType: 'background' },

  'fill-antialias': { paint: true, layerType: 'fill' },

  'fill-color': { paint: true, layerType: 'fill' },

  'fill-opacity': { paint: true, layerType: 'fill' },

  'fill-outline-color': { paint: true, layerType: 'fill' },

  'fill-pattern': { paint: true, layerType: 'fill' },

  'fill-sort-key': { layout: true, layerType: 'fill' },

  'fill-translate': { paint: true, layerType: 'fill' },

  'fill-translate-anchor': { paint: true, layerType: 'fill' },

  'line-blur': { paint: true, layerType: 'line' },

  'line-cap': { layout: true, layerType: 'line' },

  'line-color': { paint: true, layerType: 'line' },

  'line-dasharray': { paint: true, layerType: 'line' },

  'line-gap-width': { paint: true, layerType: 'line' },

  'line-gradient': { paint: true, layerType: 'line' },

  'line-join': { layout: true, layerType: 'line' },

  'line-miter-limit': { layout: true, layerType: 'line' },

  'line-offset': { paint: true, layerType: 'line' },

  'line-opacity': { paint: true, layerType: 'line' },

  'line-pattern': { paint: true, layerType: 'line' },

  'line-round-limit': { layout: true, layerType: 'line' },

  'line-sort-key': { layout: true, layerType: 'line' },

  'line-translate': { paint: true, layerType: 'line' },

  'line-translate-anchor': { paint: true, layerType: 'line' },

  'line-width': { paint: true, layerType: 'line' },

  'icon-allow-overlap': { layout: true, layerType: 'symbol' },

  'icon-anchor': { layout: true, layerType: 'symbol' },

  'icon-color': { paint: true, layerType: 'symbol' },

  'icon-halo-blur': { paint: true, layerType: 'symbol' },

  'icon-halo-color': { paint: true, layerType: 'symbol' },

  'icon-halo-width': { paint: true, layerType: 'symbol' },

  'icon-ignore-placement': { layout: true, layerType: 'symbol' },

  'icon-image': { layout: true, layerType: 'symbol' },

  'icon-keep-upright': { layout: true, layerType: 'symbol' },

  'icon-offset': { layout: true, layerType: 'symbol' },

  'icon-opacity': { paint: true, layerType: 'symbol' },

  'icon-optional': { layout: true, layerType: 'symbol' },

  'icon-padding': { layout: true, layerType: 'symbol' },

  'icon-pitch-alignment': { layout: true, layerType: 'symbol' },

  'icon-rotate': { layout: true, layerType: 'symbol' },

  'icon-rotation-alignment': { layout: true, layerType: 'symbol' },

  'icon-size': { layout: true, layerType: 'symbol' },

  'icon-text-fit': { layout: true, layerType: 'symbol' },

  'icon-text-fit-padding': { layout: true, layerType: 'symbol' },

  'icon-translate': { paint: true, layerType: 'symbol' },

  'icon-translate-anchor': { paint: true, layerType: 'symbol' },

  'symbol-avoid-edges': { layout: true, layerType: 'symbol' },

  'symbol-placement': { layout: true, layerType: 'symbol' },

  'symbol-sort-key': { layout: true, layerType: 'symbol' },

  'symbol-spacing': { layout: true, layerType: 'symbol' },

  'symbol-z-order': { layout: true, layerType: 'symbol' },

  'text-allow-overlap': { layout: true, layerType: 'symbol' },

  'text-anchor': { layout: true, layerType: 'symbol' },

  'text-color': { paint: true, layerType: 'symbol' },

  'text-field': { layout: true, layerType: 'symbol' },

  'text-font': { layout: true, layerType: 'symbol' },

  'text-halo-blur': { paint: true, layerType: 'symbol' },

  'text-halo-color': { paint: true, layerType: 'symbol' },

  'text-halo-width': { paint: true, layerType: 'symbol' },

  'text-ignore-placement': { layout: true, layerType: 'symbol' },

  'text-justify': { layout: true, layerType: 'symbol' },

  'text-keep-upright': { layout: true, layerType: 'symbol' },

  'text-letter-spacing': { layout: true, layerType: 'symbol' },

  'text-line-height': { layout: true, layerType: 'symbol' },

  'text-max-angle': { layout: true, layerType: 'symbol' },

  'text-max-width': { layout: true, layerType: 'symbol' },

  'text-offset': { layout: true, layerType: 'symbol' },

  'text-opacity': { paint: true, layerType: 'symbol' },

  'text-optional': { layout: true, layerType: 'symbol' },

  'text-padding': { layout: true, layerType: 'symbol' },

  'text-pitch-alignment': { layout: true, layerType: 'symbol' },

  'text-radial-offset': { layout: true, layerType: 'symbol' },

  'text-rotate': { layout: true, layerType: 'symbol' },

  'text-rotation-alignment': { layout: true, layerType: 'symbol' },

  'text-size': { layout: true, layerType: 'symbol' },

  'text-transform': { layout: true, layerType: 'symbol' },

  'text-translate': { paint: true, layerType: 'symbol' },

  'text-translate-anchor': { paint: true, layerType: 'symbol' },

  'text-variable-anchor': { layout: true, layerType: 'symbol' },

  'text-writing-mode': { layout: true, layerType: 'symbol' },

  'raster-brightness-max': { paint: true, layerType: 'raster' },

  'raster-brightness-min': { paint: true, layerType: 'raster' },

  'raster-contrast': { paint: true, layerType: 'raster' },

  'raster-fade-duration': { paint: true, layerType: 'raster' },

  'raster-hue-rotate': { paint: true, layerType: 'raster' },

  'raster-opacity': { paint: true, layerType: 'raster' },

  'raster-resampling': { paint: true, layerType: 'raster' },

  'raster-saturation': { paint: true, layerType: 'raster' },

  'circle-blur': { paint: true, layerType: 'circle' },

  'circle-color': { paint: true, layerType: 'circle' },

  'circle-opacity': { paint: true, layerType: 'circle' },

  'circle-pitch-alignment': { paint: true, layerType: 'circle' },

  'circle-pitch-scale': { paint: true, layerType: 'circle' },

  'circle-radius': { paint: true, layerType: 'circle' },

  'circle-sort-key': { layout: true, layerType: 'circle' },

  'circle-stroke-color': { paint: true, layerType: 'circle' },

  'circle-stroke-opacity': { paint: true, layerType: 'circle' },

  'circle-stroke-width': { paint: true, layerType: 'circle' },

  'circle-translate': { paint: true, layerType: 'circle' },

  'circle-translate-anchor': { paint: true, layerType: 'circle' },

  'fill-extrusion-base': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-color': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-height': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-opacity': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-pattern': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-translate': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-translate-anchor': { paint: true, layerType: 'fill-extrusion' },

  'fill-extrusion-vertical-gradient': { paint: true, layerType: 'fill-extrusion' },

  'heatmap-color': { paint: true, layerType: 'heatmap' },

  'heatmap-intensity': { paint: true, layerType: 'heatmap' },

  'heatmap-opacity': { paint: true, layerType: 'heatmap' },

  'heatmap-radius': { paint: true, layerType: 'heatmap' },

  'heatmap-weight': { paint: true, layerType: 'heatmap' },

  'hillshade-accent-color': { paint: true, layerType: 'hillshade' },

  'hillshade-exaggeration': { paint: true, layerType: 'hillshade' },

  'hillshade-highlight-color': { paint: true, layerType: 'hillshade' },

  'hillshade-illumination-anchor': { paint: true, layerType: 'hillshade' },

  'hillshade-illumination-direction': { paint: true, layerType: 'hillshade' },

  'hillshade-shadow-color': { paint: true, layerType: 'hillshade' },

  visibility: { layout: true, layerType: 'all' }
}

// include especial -hover or -click props
const FINAL_PROPS = {}
Object.entries(LAYER_DEFAULT_PROPS).forEach((item) => {
  const key = item[0]
  const value = item[1]
  FINAL_PROPS[key] = value
  FINAL_PROPS[key + '-hover'] = { value, hover: true }
  FINAL_PROPS[key + '-click'] = { value, click: true }
})

export { LAYER_DEFAULT_PROPS }

export default FINAL_PROPS
