export default async function loadScripts (scripts) {

  function get (source) {
    return new Promise(function (resolve, reject) {
      var el

      if (source.match(/js$/g)) {
        el = document.createElement('script') // TODO - get if script os link is already loaded, and if it is, resolve then - document.querySelector(`script[src='${source}']`) || 
        el.async = false
        el.src = source
      } else if (source.match(/css$/g)) {
        el = document.createElement('link') // document.querySelector(`link[href='${source}']`)
        el.type = 'text/css'
        el.rel = 'stylesheet'
        el.href = source
      }

      el.onload = function () {
        console.count('resolve -' + source)
        resolve(source)
      }
      el.onerror = function () {
        reject(source)
      }

      document.getElementsByTagName('body')[0].appendChild(el)

    })
  }

  const myPromises = scripts.map(async function (script, index) {
    return await get(script)
  })

  return await Promise.all(myPromises)
}
