
export function getHalfMoonMask() {
    return "data:image/svg+xml;base64," + btoa(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
</svg>`);
}
