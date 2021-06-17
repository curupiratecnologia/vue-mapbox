<template>
	<div>
		<svg
			width="168"
			height="80"
			viewBox="0 0 168 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="icon-recuperacao-energetica">
				<g id="informa&#195;&#167;&#195;&#163;o">
					<g id="processamento-info">
						<g id="60%" filter="url(#shadow)">
							<text
								fill="#FFBA08"
								xml:space="preserve"
								style="white-space: pre"
								font-family="Gilroy-ExtraBold"
								font-size="17"
								letter-spacing="0em"
							>
								<tspan x="68" y="28.141">
									{{ numerointerno }}%
								</tspan>
							</text>
						</g>
						<g id="em processamento" filter="url(#shadow)">
							<text
								fill="#FFBA08"
								xml:space="preserve"
								style="white-space: pre"
								font-family="Proxima Nova Alt"
								font-size="11"
								font-weight="bold"
								letter-spacing="0em"
							>
								<tspan x="68" y="36.7625">
									em processamento
								</tspan>
							</text>
						</g>
					</g>
					<g id="energetica-info">
						<g>
							<text
								fill="#08F0FF"
								xml:space="preserve"
								style="white-space: pre"
								font-family="Proxima Nova Alt"
								font-size="11"
								font-weight="bold"
								letter-spacing="0em"
							>
								<tspan x="68" y="66">em rec. energética</tspan>
							</text>
						</g>
						<g id="05" filter="url(#shadow)">
							<text
								fill="#08F0FF"
								xml:space="preserve"
								style="white-space: pre"
								font-family="Gilroy-ExtraBold"
								font-size="17"
								letter-spacing="0em"
							>
								<tspan x="68" y="55.141">0.5%</tspan>
							</text>
						</g>
					</g>
					<g id="OPERACIONAL" filter="url(#shadow)">
						<text
							fill="white"
							xml:space="preserve"
							style="white-space: pre"
							font-family="Proxima Nova Alt"
							font-size="11"
							letter-spacing="0em"
						>
							<tspan x="68" y="9.69263">OPERACIONAL</tspan>
						</text>
					</g>
				</g>
				<g id="raio-energia" filter="url(#shadow_circles)">
					<!-- <circle
						cx="33"
						cy="33"
						r="26"
						stroke="#08F0FF"
						stroke-width="6"
						stroke-linejoin="round"
					/> -->
					<circle
						cx="33"
						cy="33"
						r="28"
						stroke="#08F0FF"
						stroke-width="4"
						stroke-linejoin="round"
						style="
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						"
						:stroke-dasharray="`${
							(2 * Math.PI * 26 * energiaPercent) / 100
						} ${2 * Math.PI * 26}`"
					/>
				</g>
				<g id="raio-processamento" filter="url(#shadow_circles)">
					<!-- <circle
						cx="33"
						cy="33"
						r="19"
						stroke="#FFBA0800"
						stroke-width="6"
						stroke-linejoin="round"
					/> -->
					<
					<circle
						cx="33"
						cy="33"
						r="22"
						stroke="#FFBA08"
						stroke-width="4"
						stroke-linejoin="round"
						style="
							transform: rotate(-90deg);
							transform-origin: center center;
							transform-box: fill-box;
						"
						:stroke-dasharray="`${
							(2 * Math.PI * 22 * processamentoPercent) / 100
						} ${2 * Math.PI * 22}`"
					/>
				</g>
				<g id="fundo-group" filter="url(#shadow_circles)">
					<g id="fundo-preto" opacity="1" filter="url(#shadow)">
						<circle cx="33" cy="33" r="19" fill="#000000" />
					</g>
				</g>

				<!--  color can test here https://change-svg-color.vercel.app/ -->
				<g
					id="tecnologias"
					:style="`
							width:33px;
							height:33px;
							transform: translate(21px, 20px)
							filterNO: invert(83%) sepia(68%) saturate(374%) hue-rotate(32deg) brightness(91%) contrast(94%);
					`"
				>
					<g>
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
			</g>
			<defs>
				<!-- FILTERS -->
				<filter id="shadow">
					<feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
				</filter>
				<filter
					id="shadow_circles"
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
		</svg>
	</div>
</template>

<script>
import icons from "./recuperacao-icons.js";
import anime from "animejs/lib/anime.es.js";
import { animate, linear, easeInOut } from "popmotion";

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
		item: Object,
	},

	data() {
		return {
			icons,
			numerointerno: 0,
		};
	},
	created() {
		setInterval(() => this.numerointerno++, 100);
	},

	updated: function () {},
};
</script>
