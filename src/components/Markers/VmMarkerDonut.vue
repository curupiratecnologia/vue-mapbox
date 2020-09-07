
<script>
import set from 'lodash/set'
import getValueFromZoomArray from '../../utils/getValueFromZoomArray'
import VmMarker from '../VmMarker'

/*
    @description Create a Donet chart marker, with total inside, and bars set for each properties
*/
export default {
  name: 'VmMarkerDonut',
  inject: ['getMap', 'mapboxgl', 'MapboxVueInstance'],

  props: {

    /**
    Radius in pixel. leave blank for automatic
    */
    radius: {
      type: [Number, String]
    },
    /**
    The width of the chart in pixel, or %
    */
    chartWidth: {
      type: [Number, String],
      default: '25%'
    },
    /**
    font size of total number in center of donut chart in pixel. leave blank for automatic
    */
    fontSize: {
      type: [Number, String]
    },
    /**
    Array contains the data of the chart.
    */
    dataSet: {
      type: Array,
      default: () => [4, 7, 40]
    },
    /**
    Array contains the colors bars of the chart in data. Must be equal of size of dataSet.
    */
    dataColor: {
      type: Array,
      default: () => ['red', 'green', 'blue']
    },
    /**
    Array contains the zoom of map, an then the scale of element (from 0 to 1).

    Example, [24, 0.2, 14, 0.7, 4, 1] will set at zoom 24 the scale to 0.2, in zoom 14 the scale to 0.7, and so on
    */
    zoomScale: {
      type: Array
      // default: () => [0, 10, 4, 10, 24, 1]
    },

    anchor: {
      default: 'center'
    }

  },

  data () {
    return {
      currentZoom: null
    }
  },

  computed: {
    myradius: function () {
      return Number(this.radius)
    }
  },

  created: function () {
    if (this.zoomScale && this.getMap()) {
      this.getMap().on('zoom', this.scaleMarker)
    }
  },

  mounted () {
    this.$nextTick(() => this.scaleMarker())
  },

  beforeDestroy () {
    if (this.zoomScale && this.getMap()) {
      this.getMap().off('zoom', this.scaleMarker)
    }
  },

  methods: {
    scaleMarker: function (e) {
      if (!this.zoomScale) return
      const zoom = this.getMap().getZoom()
      const currentScale = getValueFromZoomArray(this.zoomScale, zoom)
      this.$refs.marker.style.transform = `scale(${currentScale})`
      this.$refs.marker.style.transformOrigin = 'center'
    },

    createDonutChart: function (dataSet, dataColor, raio, chartWidth, fontSize) {
      var offsets = []
      var counts = dataSet
      var total = 0
      for (var i = 0; i < counts.length; i++) {
        offsets.push(total)
        total += counts[i]
      }

      fontSize = (fontSize || (total >= 1000 ? 20 : total >= 100 ? 18 : total >= 10 ? 16 : 14))
      var r = raio || (total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 18)
      var r0
      if (typeof chartWidth === 'string' && chartWidth.indexOf('%') > 0) {
        r0 = Math.round(r * (1 - (parseInt(chartWidth) / 100)))
        // var r0 = Math.round(r * 0.8)
      } else {
        r0 = parseInt(chartWidth)
      }

      var w = r * 2

      var html = '<div><svg width="' + w + '" height="' + w + '" viewbox="0 0 ' + w + ' ' + w + '" text-anchor="middle" style="font: ' + fontSize + 'px sans-serif">'

      for (i = 0; i < counts.length; i++) {
        html += this.donutSegment(
          offsets[i] / total,
          (offsets[i] + counts[i]) / total,
          r,
          r0,
          dataColor[i]
        )
      }
      html += '<circle cx="' + r + '" cy="' + r + '" r="' + r0 + '" fill="white" /><text dominant-baseline="central" transform="translate(' + r + ', ' + r + ')">' +
      total.toLocaleString() + '</text></svg></div>'

      return html
    },

    donutSegment: function (start, end, r, r0, color) {
      if (end - start === 1) end -= 0.00001
      var a0 = 2 * Math.PI * (start - 0.25)
      var a1 = 2 * Math.PI * (end - 0.25)
      var x0 = Math.cos(a0)
      var y0 = Math.sin(a0)
      var x1 = Math.cos(a1)
      var y1 = Math.sin(a1)
      var largeArc = end - start > 0.5 ? 1 : 0

      return [
        '<path d="M',
        r + r0 * x0,
        r + r0 * y0,
        'L',
        r + r * x0,
        r + r * y0,
        'A',
        r,
        r,
        0,
        largeArc,
        1,
        r + r * x1,
        r + r * y1,
        'L',
        r + r0 * x1,
        r + r0 * y1,
        'A',
        r0,
        r0,
        0,
        largeArc,
        0,
        r + r0 * x0,
        r + r0 * y0,
        '" fill="' + color + '" />'
      ].join(' ')
    }
  },

  render (h) {
    const svg = this.createDonutChart(this.dataSet, this.dataColor, this.myradius, this.chartWidth, parseInt(this.fontSize))

    const children = []

    const markerDonut = h('div', {
      style: { 
        position: 'relative',
        textAlign: 'center' 
      },
      slot: 'marker',
      ref: 'marker'
    },
    [
      h('div', {
        domProps: {
          innerHTML: svg
        }
      }),
      this.$slots.marker
    ]
    )

    children.push(markerDonut)

    Object.entries(this.$slots).forEach((item) => {
      const key = item[0]
      const value = item[1]
      if (key == 'marker') return
      // set(value,'data.slot',key)
      children.push(
        h('div', {
          slot: key,
          ref: key
        }, value)
      )
    })

    // get all slots all slots and scoped slots

    return h(VmMarker,
      {
        props: { ...this.$attrs, ...this.$props, anchor: this.anchor },
        on: { ...this.$listeners }

      }, [
        ...children,
        this.$slots.default
      ]
    )
  }

}

</script>

<docs>

</docs>
