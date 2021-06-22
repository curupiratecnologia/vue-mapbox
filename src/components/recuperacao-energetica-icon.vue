<template>
	<div style="pointer-events: none" ref="container"  id="container">
		<div id="inner"  ref="inner" :style="`width:${width}px; height:${height}px`">
			<svg
				:width="width"
				:height="height"
				:viewBox="`0 0 ${width} ${height}`"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<mask :id="`${uniqueid}raio-processamento-mask`">
						<circle
							cx="33"
							cy="33"
							r="24"
							fill="none"
							stroke-width="4"
							stroke="rgb(255, 255, 255)"
							:stroke-dasharray="`${calculateDasheArrayInSegments( 24, 20 )}`"
						/>
					</mask>
					<mask :id="`${uniqueid}raio-energia-mask`">
						<circle
							cx="33"
							cy="33"
							r="30"
							fill="none"
							stroke-width="4"
							stroke="rgb(255, 255, 255)"
							:stroke-dasharray="`${calculateDasheArrayInSegments( 30, 20 )}`"
						/>
					</mask>
					<!-- FILTERS/SHADOWS -->
					<filter :id="`${uniqueid}shadow`">
						<feDropShadow
							dx="0.2"
							dy="0.4"
							stdDeviation="2"
							flood-opacity="0.4"
						/>
					</filter>
					<filter
						:id="`${uniqueid}shadow_circles`"
						primitiveUnits="userSpaceOnUse"
						width="130%"
						height="130%"
					>
						<feDropShadow
							dx="1"
							dy="1"
							stdDeviation="2"
							flood-opacity="0.5"
						/>
					</filter>
				</defs>
				<!-- TEXTOS -->
				<g :id="`${uniqueid}texto-informativoinformacao`" v-if="showInfo">
					<g :id="`${uniqueid}label`">
						<text
							fill="#ffffff33"
							style="white-space: pre"
							font-family="Proxima Nova Alt Rg"
							font-size="9"
							letter-spacing="0.5px"
							:filter="`url(#${uniqueid}shadow)`"
						>
							<tspan x="72" y="8">CAPACIDADE UTILIZADA</tspan>
						</text>
					</g>
					<g :id="`${uniqueid}processamento-info`">
						<g :id="`${uniqueid}num-processamento`">
							<text
								:filter="`url(#${uniqueid}shadow)`"
								fill="#FFBA08"
								style="white-space: pre"
								font-family="Gilroy"
								font-weight="bold"
								font-size="18"
								letter-spacing="0em"
							>
								<tspan x="68" y="26">
									{{ myProcessamentoPercent }}
								</tspan>
							</text>
						</g>
						<g
							:id="`${uniqueid}em processamento`"
							:filter="`url(#${uniqueid}shadow)`"
						>
							<text
								fill="#FFBA08"
								style="white-space: pre"
								font-family="Proxima Nova Alt Rg"
								font-size="10"
								font-weight="600"
								letter-spacing="0.1px"
							>
								<tspan x="68" y="37">processamento</tspan>
							</text>
						</g>
					</g>
					<g
						:id="`${uniqueid}energia-info`"
						style="transform: translate(0, 3px)"
					>
						<g>
							<text
								fill="#08F0FF"
								style="white-space: pre"
								font-family="Proxima Nova Alt Rg"
								font-size="10"
								font-weight="bold"
								letter-spacing="0.1px"
							>
								<tspan x="68" y="66">prod. energ&eacute;tica</tspan>
							</text>
						</g>
						<g :id="`${uniqueid}num-recuperacao-ene`">
							<text
								fill="#08F0FF"
								style="white-space: pre"
								font-family="Gilroy"
								font-weight="bold"
								font-size="17"
								letter-spacing="0em"
							>
								<tspan x="68" y="55.141">
									{{ myEnergiaPercent }}
								</tspan>
							</text>
						</g>
					</g>
				</g>
				<!-- ICONE -->
				<g :id="`${uniqueid}icone`">
					<circle
						:id="`${uniqueid}raio-energia-rail`"
						cx="33"
						cy="33"
						r="30"
						stroke="#00000033"
						stroke-width="4"
						:mask="`url(#${uniqueid}raio-energia-mask)`"
					/>
					<circle
						:id="`${uniqueid}raio-processamento-rail`"
						cx="33"
						cy="33"
						r="24"
						stroke="#00000033"
						stroke-width="4"
						:mask="`url(#${uniqueid}raio-processamento-mask)`"
						style="
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						"
					/>
					<circle
						:id="`${uniqueid}raio-energia`"
						cx="33"
						cy="33"
						r="30"
						stroke="#08F0FF"
						stroke-width="4"
						stroke-linejoin="round"
						:filter="`url(#${uniqueid}shadow_circles)`"
						:mask="`url(#${uniqueid}raio-energia-mask)`"
						style="
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						"
						:stroke-dasharray="calculateDasheArray(30, energiaPercent)"
					/>
					<circle
						:id="`${uniqueid}raio-energia-hover`"
						cx="33"
						cy="33"
						r="30"
						stroke="#08F0FF"
						stroke-width="5"
						stroke-linejoin="round"
						:filter="`url(#${uniqueid}shadow_circles)`"
						style="
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						"
						:stroke-dasharray="raioEnergiaHoverDasshedArray"
					/>
					<circle
						:id="`${uniqueid}raio-processamento`"
						cx="33"
						cy="33"
						r="24"
						stroke="#FFBA08"
						stroke-width="4"
						stroke-linejoin="round"
						:filter="`url(#${uniqueid}shadow_circles)`"
						:mask="`url(#${uniqueid}raio-processamento-mask)`"
						:style="`
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						 `"
						:stroke-dasharray="
							calculateDasheArray(24, processamentoPercent)
						"
					/>
					<circle
						:id="`${uniqueid}raio-processamento-hover`"
						cx="33"
						cy="33"
						r="24"
						stroke="#FFBA08"
						stroke-width="5"
						stroke-linejoin="round"
						:filter="`url(#${uniqueid}shadow_circles)`"
						:style="`
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
					  `"
						:stroke-dasharray="raioProcessamentoHoverDasshedArray"
					/>
					<!-- CIRCULO MEIO -->
					<circle
						:id="`${uniqueid}circulo-meio`"
						cx="33"
						cy="33"
						r="19"
						:filter="`url(#${uniqueid}shadow_circles)`"
						fill="#000000"
					/>
					<!-- ICONES TECNOLOGIAS -  filter to color can test here https://change-svg-color.vercel.app/ -->
					<g
						:id="`${uniqueid}tecnologias`"
						:style="`width:33px; height:33px; transform: translate(21px, 20px) scale(1)`"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-html="icons[tecnologia]"
						></svg>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
import icons from "./recuperacao-icons.js";
import uniqueId from "lodash/uniqueId";
// import anime from "animejs/lib/anime.es.js";
import { animate, cubicBezier, toDecimal } from "popmotion";

export default {
	props: {
		processamentoPercent: {
			type: Number,
			default: 20,
		},
		energiaPercent: {
			type: Number,
			default: 30,
		},
		tecnologia: {
			type: String,
			default: "Aterro Sanitário com Reciclagem",
		},
		showInfo: {
			type: Boolean,
			default: false,
		},
		item: Object,
	},

	data() {
		return {
			icons,
			numerointerno: 0,
			animate: false,
			myEnergiaPercent:0,
			myProcessamentoPercent:0,
			raioEnergiaHoverDasshedArray: "0, 900000",
			raioProcessamentoHoverDasshedArray: "0, 9000000",
		};
	},

	computed: {
		width: function () {
			// return 68;
			return this.showInfo ? 160 : 68;
		},
		height: function () {
			// return 68;
			return this.showInfo ? 72 : 68;
		},
	},

	created() {
		this.uniqueid = uniqueId("icon_unidade_recuperacao");

	},

	mounted() {
		if (this.showInfo === false) return;
		this.$nextTick( ()=>{
			this.animateInfos()	
			this.setupMouseAnimations()
		})
	},

	methods: {

		setupMouseAnimations(){
					
					// Init
						var container = this.$refs?.container,
							inner = this.$refs?.inner;

						// Mouse
						var mouse = {
							_x: 0,
							_y: 0,
							x: 0,
							y: 0,
							updatePosition: function(event) {
								var e = event || window.event;
								this.x = e.clientX - this._x;
								this.y = (e.clientY - this._y) * -1;
							},
							setOrigin: function(e) {
								this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
								this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
							},
							show: function() {
								return "(" + this.x + ", " + this.y + ")";
							}
						};

						// Track the mouse position relative to the center of the container.
						mouse.setOrigin(container);

						//-----------------------------------------

						var counter = 0;
						var updateRate = 10;
						var isTimeToUpdate = function() {
							return counter++ % updateRate === 0;
						};

						//-----------------------------------------

						var onMouseEnterHandler = function(event) {
							update(event);
						};

						var onMouseLeaveHandler = function() {
							inner.style = "";
						};

						var onMouseMoveHandler = function(event) {
							if (isTimeToUpdate()) {
							update(event);
							}
						};

						//-----------------------------------------

						var update = function(event) {
							mouse.updatePosition(event);
							// updateTransformStyle( (mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2) );
							updateTransformStyle( (mouse.y / 72 / 2).toFixed(2), (mouse.x / 68 / 2).toFixed(2) );
						};

						var updateTransformStyle = function(x, y) {
							var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
							inner.style.transform = style;
							inner.style.webkitTransform = style;
							inner.style.mozTransform = style;
							inner.style.msTransform = style;
							inner.style.oTransform = style;
						};

						//-----------------------------------------

						window.onmouseenter = onMouseEnterHandler;
						window.onmouseleave = onMouseLeaveHandler;
						window.onmousemove = onMouseMoveHandler;
		
		},

		animateInfos: function(){
		
			const easing = cubicBezier(0.22, 1, 0.36, 1);

			//animate processamento
			if (Number(this.processamentoPercent)) {
				animate({
					from: 0,
					to: Number(this.processamentoPercent),
					damping: 30,
					onUpdate: (percent) => {
						let percFinal = toDecimal(percent,0)
						this.raioProcessamentoHoverDasshedArray = this.calculateDasheArray(24, percFinal);
						this.myProcessamentoPercent = percFinal +" %"
						// console.log(`raioAtual:${this.raioProcessamentoHoverDasshedArray}  ` )
					},
				});
			} else{
				this.myProcessamentoPercent = ' – '
			}
			
			//animate energia
			if (Number(this.energiaPercent)) {
				animate({
					from: 0,
					to: Number(this.energiaPercent),
					damping: 30,
					onUpdate: (percent) => {
						let percFinal = toDecimal(percent,0)
						this.raioEnergiaHoverDasshedArray = this.calculateDasheArray(30, percFinal);
						this.myEnergiaPercent = percFinal +" %"
						// console.log(`raioAtual:${this.raioProcessamentoHoverDasshedArray}  ` )
					},
				});
			} else{
				this.myEnergiaPercent = ' – '
			}
		},

		calculateDasheArrayInSegments: function (
			radius = 20,
			segments = 20,
			dashSpace = 2
		) {
			let length = 2 * Math.PI * radius;
			let dashedArray = "";
			let segmentSize = length / segments - dashSpace;
			return `${segmentSize}, ${dashSpace}`;
		},

		calculateDasheArray: function (radius = 20, percent = 100) {
			let length = Math.round(2 * Math.PI * radius);
			return `
              ${(length * percent) / 100} 
              ${length}
            `;
		},
	},
};
</script>

<style lang="stylus" scoped>
		#container {
			/* This will come into play later */
			perspective: 40px;
		}
		#inner {
			  transition: transform 0.5s;

//   width: 20em;
//   height: 18em;
//   background-color: green;
}
</style>
