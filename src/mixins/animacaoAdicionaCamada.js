// define a mixin object
import { TweenMax } from 'gsap'

var myMixin = {

  methods: {
    animacaoAdicionaCamada: function (eldom) {
      eldom = (eldom || this.$el)
      var $el = $(eldom)

      // pego a posicao do elemento
      var pos = eldom.getBoundingClientRect()

      // duplico o elemento e coloco ele no body flutuando
      var clone = $el.clone().appendTo('body').css({ position: 'absolute', zIndex: 99999, background: '#6F9FDD', top: pos.top, left: pos.left })

      // animo ele ate a sessao camada
      var posicaoCamada = $('#menu-camadas')[0].getBoundingClientRect()
      window.TweenMax.to(clone, 0.4, {
        alpha: 0.1,
        top: posicaoCamada.top + 50,
        left: posicaoCamada.left,
        onComplete: function () {
          clone.remove()
        }
      })
    }
  }
}

export default myMixin
