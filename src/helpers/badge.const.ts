export const BADGE_TEMPLATE = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="110"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="110" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="65" height="20" fill="#555"/>
      <rect x="65" width="46" height="20" fill="{{color}}"/>
      <rect width="110" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        {{label}}
      </text>
      <text x="50" y="140" transform="scale(.1)">
        {{label}}
      </text>
      <text x="700" y="140" transform="scale(.1)">
        {{level}}
      </text>
    </g>
  </svg>
`;
