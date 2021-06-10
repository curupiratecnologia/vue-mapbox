<template>
  <div>
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="33"
          cy="29"
          r="26"
          stroke="#08F0FF"
          stroke-width="6"
          stroke-linejoin="round"
        />
      </g>
      <g filter="url(#filter1_d)">
        <circle
          cx="33"
          cy="29"
          r="19"
          stroke="#FFBA08"
          stroke-width="6"
          stroke-linejoin="round"
        />
      </g>
      <g filter="url(#filter2_d)">
        <g opacity="0.9" filter="url(#filter3_d)">
          <circle cx="32.7932" cy="28.7931" r="15" fill="black" />
        </g>
      </g>

      <!--  color can test here https://change-svg-color.vercel.app/ -->
      <g
        id="tecnologias"
        :style="`
          transform: translate( calc(50% - 12px), calc(50% - 18px));
          filter: invert(83%) sepia(68%) saturate(374%) hue-rotate(32deg) brightness(91%) contrast(94%);
        `"
      >
        <g>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-html="(icons[tecnologia])"
          ></svg>
        </g>
      </g>

      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="7"
          y="7"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="14.8967"
          y="13.7931"
          width="36.2069"
          height="36.2069"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.89655" />
          <feGaussianBlur stdDeviation="1.44828" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d"
          x="15.0777"
          y="13.7931"
          width="35.431"
          height="35.431"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.71552" />
          <feGaussianBlur stdDeviation="1.35776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle
          cx="33"
          cy="29"
          r="26"
          stroke="#08F0FF"
          stroke-width="6"
          stroke-linejoin="round"
          style="transform: rotate( -90deg ); transform-origin: center center; transform-box: fill-box;"
          :stroke-dasharray="
            `${(2 * Math.PI * 26 * energiaPercent) / 100} ${2 * Math.PI * 26}`
          "
        />
      </g>
      <g filter="url(#filter1_d)">
        <circle
          cx="33"
          cy="29"
          r="19"
          stroke="#FFBA08"
          stroke-width="6"
          stroke-linejoin="round"
          style="transform: rotate( -90deg ); transform-origin: center center; transform-box: fill-box;"
          :stroke-dasharray="
            `${(2 * Math.PI * 26 * processamentoPercent) / 100} ${2 *
              Math.PI *
              26}`
          "
        />
      </g>
      <g filter="url(#filter2_d)">
        <g opacity="0.9" filter="url(#filter3_d)">
          <circle cx="32.7932" cy="28.7931" r="15" fill="black" />
        </g>
      </g>
      <path
        d="M27.3584 32.929C27.4087 33.1149 27.6012 33.2265 27.7871 33.1762L32.5199 31.9077C32.7058 31.8574 32.8173 31.6649 32.767 31.479L31.6801 27.422C31.6298 27.2361 31.4373 27.1246 31.2514 27.1749L29.563 27.6298L30.1054 29.6572L28.7538 30.0181L28.2114 27.9906L26.5208 28.4434C26.3349 28.4937 26.2233 28.6861 26.2736 28.872L27.3584 32.929ZM34.6589 24.7144C34.2717 24.7144 33.959 25.0272 33.959 25.4143V32.4916L26.3895 34.5562C26.2955 34.5825 26.2408 34.6787 26.2671 34.7706L26.5426 35.7832C26.5689 35.8772 26.6651 35.9319 26.757 35.9056L35.3675 33.5567C35.42 34.8646 36.4872 35.9122 37.8082 35.9122C39.162 35.9122 40.2577 34.8165 40.2577 33.4627V24.7144H34.6589ZM37.8082 34.5125C37.2287 34.5125 36.7584 34.0423 36.7584 33.4627C36.7584 32.8831 37.2287 32.4129 37.8082 32.4129C38.3878 32.4129 38.858 32.8831 38.858 33.4627C38.858 34.0423 38.3878 34.5125 37.8082 34.5125Z"
        fill="#B8C884"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="7"
          y="7"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="14.8967"
          y="13.7931"
          width="36.2069"
          height="36.2069"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.89655" />
          <feGaussianBlur stdDeviation="1.44828" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d"
          x="15.0777"
          y="13.7931"
          width="35.431"
          height="35.431"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.71552" />
          <feGaussianBlur stdDeviation="1.35776" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import icons from './recuperacao-icons.js'
export default {
  props: {
    processamentoPercent: {
      type: Number,
      default: 100
    },
    energiaPercent: {
      type: Number,
      default: 100
    },
    tecnologia: {
      type: String,
      default: 'Aterro Sanitário com Reciclagem'
    }
  },

  data () {
    return { icons }
  }
}
</script>
