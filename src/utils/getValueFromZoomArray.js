/**
Function that calculate the current value from a zoom,value array
@params {array} - zoomScale - format like [zoom, value, zoom2, value]
@params {number} - current zoom level
@returns {number}
*/

export default function (zoomScale, zoom) {
  let zoomStart
  let zoomEnd
  let valueStart
  let valueEnd
  let currentScale = 1

  if (zoomScale.length == 2) {
    currentScale = zoomScale[1]
  } else {
    for (let i = 0; i < zoomScale.length - 2; i += 2) {
      zoomStart = zoomScale[i]
      zoomEnd = zoomScale[i + 2]
      valueStart = zoomScale[i + 1]
      valueEnd = zoomScale[i + 3]
      if (zoom >= zoomStart && zoom <= zoomEnd) {
        currentScale = (zoom - zoomEnd) / (zoomStart - zoomEnd) * (valueStart - valueEnd) + valueEnd
        break
      } else if (zoom <= zoomStart) {
        currentScale = valueStart
        break
      } else {
        currentScale = valueEnd
      }
    }
  }

  return currentScale
}
