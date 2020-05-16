export const BADGE_TEMPLATE = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="63" height="20" fill="#555"/>
      <rect x="63" width="53" height="20" fill="{{color}}"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Tahoma,Verdana,sans-serif" font-size="100">
      <text x="300" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="500">
        {{scope}}
      </text>
      <text x="300" y="140" transform="scale(.1)" textLength="500">
        {{scope}}
      </text>
      <text x="900" y="140" transform="scale(.1)" textLength="350">
        {{level}}%
      </text>
    </g>
  </svg>
`;
