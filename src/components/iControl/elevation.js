export default class {
  constructor (store) {
    this.$store = store
  }

  click () {
    var visible
    visible = !this.$store.state.altimetriaVisible
    this.$store.commit('altimetriaVisible', visible)
  }

  onAdd (map) {
    this._map = map
    this._container = document.createElement('div')
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group'
    this._container.innerHTML = '<button class="mapboxgl-ctrl-icon"><i class="vtl vtl-altimetria"></i></button>'

    this._container.addEventListener('click', () => this.click(), false)

    this.watch = this.$store.watch((state) => state.altimetriaVisible, () => {
      if (this.$store.state.altimetriaVisible) {
        $(this._container).addClass('active')
      } else {
        $(this._container).removeClass('active')
      }
    })

    return this._container
  }

  onRemove () {
    this.watch() // remove the watch
    this._container.parentNode.removeChild(this._container)
    this._map = undefined
  }
}
