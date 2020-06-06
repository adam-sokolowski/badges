export const BADGE_TEMPLATE = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="{{badgeWidth}}"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="{{badgeWidth}}" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="{{labelWidth}}" height="20" fill="#555"/>
      <rect x="{{labelWidth}}" width="{{valueWidth}}" height="20" fill="{{color}}"/>
      <rect width="{{badgeWidth}}" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        {{label}}
      </text>
      <text x="50" y="140" transform="scale(.1)">
        {{label}}
      </text>
      <text x="{{labelPosition}}" y="140" transform="scale(.1)">
        {{value}}
      </text>
    </g>
  </svg>
`;
