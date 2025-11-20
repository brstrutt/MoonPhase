import { MoonPhase } from "./moonPhase.js";

/**
 * 
 * @param {String} currentPhase - The current moon phase as defined in the MoonPhase "enum"
 * @returns {String} A URL encoded SVG definition. Intended to be used directly in `url()` calls in CSS.
 */
export function getMoonPhaseMask(currentPhase) {
   const getMask = () => {
      switch (currentPhase) {
         case MoonPhase.newMoon:
         case MoonPhase.waxingCrescent: return getCrescentMoonMask();
         case MoonPhase.waxingHalf: return getHalfMoonMask();
         case MoonPhase.waxingGibbous: return getGibbousMoonMask();
         case MoonPhase.fullMoon: return getFullMoonMask();
         case MoonPhase.waningGibbous: return getGibbousMoonMask();
         case MoonPhase.waningHalf: return getHalfMoonMask();
         case MoonPhase.waningCrescent: return getCrescentMoonMask();
         default: return getCrescentMoonMask();
      }
   };
   const mask = getMask();
   return urlEncodeSvgImage(mask);
}

/**
 * 
 * @param {String} imageString - An image definiton (expected to be an SVG definition)
 * @returns {String} A URL encoded version of the image, that can be used directly in CSS `url()` clauses
 */
function urlEncodeSvgImage(imageString) {
   return "data:image/svg+xml;base64," + btoa(imageString);
}

function getCrescentMoonMask() {

   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="100mm"
   height="100mm"
   viewBox="0 0 100 100"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter1"
       x="-0.012000006"
       y="-0.012000006"
       width="1.024"
       height="1.024">
      <feGaussianBlur
         stdDeviation="0.50000025"
         id="feGaussianBlur1" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter2"
       x="-0.0126316"
       y="-0.011999994"
       width="1.0252632"
       height="1.024">
      <feGaussianBlur
         stdDeviation="0.50000025"
         id="feGaussianBlur2" />
    </filter>
    <mask
       maskUnits="userSpaceOnUse"
       id="mask-powermask-path-effect3">
      <path
         id="mask-powermask-path-effect3_box"
         style="fill:#ffffff;fill-opacity:1"
         d="M -2.2000006,-2.2000006 H 102.2 V 102.2 H -2.2000006 Z" />
      <path
         id="path3"
         style="display:block;fill:#000000;stroke-width:0.269703;filter:url(#filter2)"
         d="M 0,0 V 100.0001 H 50.000049 A 45,50.000002 0 0 0 94.999888,50.000049 45,50.000002 0 0 0 50.000049,0 Z" />
    </mask>
  </defs>
  <g
     id="layer1">
    <path
       style="fill:#000000;stroke-width:0.284293;filter:url(#filter1)"
       id="path9"
       clip-path="none"
       mask="url(#mask-powermask-path-effect3)"
       d="M 100,50 A 50,50 0 0 1 50,100 50,50 0 0 1 0,50 50,50 0 0 1 50,0 50,50 0 0 1 100,50 Z" />
  </g>
</svg>`;
}

function getFullMoonMask() {
   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="100mm"
   height="100mm"
   viewBox="0 0 100 100"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter1"
       x="-0.012"
       y="-0.012"
       width="1.024"
       height="1.024">
      <feGaussianBlur
         stdDeviation="0.5"
         id="feGaussianBlur1" />
    </filter>
  </defs>
  <g
     id="layer1">
    <circle
       style="fill:#000000;stroke-width:0.284293;filter:url(#filter1)"
       id="path9"
       cx="50"
       cy="50"
       r="50" />
  </g>
</svg>`;
}

function getHalfMoonMask() {
   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="100mm"
   height="100mm"
   viewBox="0 0 100 100"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath15">
      <rect
         style="display:none;fill:#ffffff;stroke-width:0.233006"
         id="rect15"
         width="50"
         height="100"
         x="0"
         y="0"
         d="M 0,0 H 50 V 100 H 0 Z" />
      <path
         id="lpe_path-effect15"
         style="fill:#ffffff;stroke-width:0.233006"
         class="powerclip"
         d="M -5,-5 H 105 V 105 H -5 Z M 0,0 V 100 H 50 V 0 Z" />
    </clipPath>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter1"
       x="-0.012"
       y="-0.012"
       width="1.024"
       height="1.024">
      <feGaussianBlur
         stdDeviation="0.5"
         id="feGaussianBlur1" />
    </filter>
  </defs>
  <g
     id="layer1"
     style="filter:url(#filter1)">
    <path
       style="fill:#000000;stroke-width:0.284293"
       id="path9"
       clip-path="url(#clipPath15)"
       d="M 100,50 A 50,50 0 0 1 50,100 50,50 0 0 1 0,50 50,50 0 0 1 50,0 50,50 0 0 1 100,50 Z" />
  </g>
</svg>`;
}

function getGibbousMoonMask() {
   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="100mm"
   height="100mm"
   viewBox="0 0 100 100"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath15">
      <rect
         style="display:none;fill:#ffffff;stroke-width:0.233006"
         id="rect15"
         width="50"
         height="100"
         x="0"
         y="0"
         d="M 0,0 H 50 V 100 H 0 Z" />
      <path
         id="lpe_path-effect15"
         style="fill:#ffffff;stroke-width:0.233006"
         class="powerclip"
         d="M -6.2,-6.2 H 106.2 V 106.2 H -6.2 Z M 0,0 V 100 H 50 V 0 Z" />
    </clipPath>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter16"
       x="-0.013986033"
       y="-0.010489525"
       width="1.0279721"
       height="1.0209791">
      <feGaussianBlur
         stdDeviation="0.43706355"
         id="feGaussianBlur16" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter17"
       x="-0.012"
       y="-0.012"
       width="1.024"
       height="1.024">
      <feGaussianBlur
         stdDeviation="0.5"
         id="feGaussianBlur17" />
    </filter>
  </defs>
  <g
     id="layer1">
    <path
       style="fill:#000000;stroke-width:0.284293;filter:url(#filter17)"
       id="path9"
       clip-path="url(#clipPath15)"
       d="M 100,50 A 50,50 0 0 1 50,100 50,50 0 0 1 0,50 50,50 0 0 1 50,0 50,50 0 0 1 100,50 Z" />
    <ellipse
       style="fill:#000000;stroke-width:0.246205;filter:url(#filter16)"
       id="path9-5"
       clip-path="none"
       cx="50"
       cy="50"
       rx="37.5"
       ry="50"
       transform="matrix(0.99995879,0,0,1.00299,0.00206052,0.00154539)" />
  </g>
</svg>`;
}
