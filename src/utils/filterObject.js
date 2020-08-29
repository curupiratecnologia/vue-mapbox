// import filter from 'lodash/filter'

/**
Get only props with props with mapbox set to true, and with a value
@param (object) Instance
@param (function) in form of (value,key)=>

@returns (Object)
*/
export default function (object, func) {
  const final = {}
  Object.entries(object).forEach((item) => {
    const key = item[0]
    const value = item[1]
    if (func(value, key)) {
      final[key] = value
    }
  })
  return final
}
