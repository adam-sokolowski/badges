import { generateBadge } from './badgeGenerator';

const mockedGreenBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#97ca00"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Average
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Average
      </text>
      <text x="750" y="140" transform="scale(.1)">
        90.2%
      </text>
    </g>
  </svg>
`;

const mockedYellowBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#dfb317"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Average
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Average
      </text>
      <text x="750" y="140" transform="scale(.1)">
        60.3%
      </text>
    </g>
  </svg>
`;

const mockedBlueBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#007ec6"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Average
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Average
      </text>
      <text x="750" y="140" transform="scale(.1)">
        76.4%
      </text>
    </g>
  </svg>
`;

const mockedRedBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#e05d44"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Average
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Average
      </text>
      <text x="750" y="140" transform="scale(.1)">
        30%
      </text>
    </g>
  </svg>
`;


const mockedRedFunctionBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#e05d44"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Functions
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Functions
      </text>
      <text x="750" y="140" transform="scale(.1)">
        30%
      </text>
    </g>
  </svg>
`;

const mockedRedStatementsBadge = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="116"
    height="20"
  >
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="116" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="70" height="20" fill="#555"/>
      <rect x="70" width="46" height="20" fill="#e05d44"/>
      <rect width="116" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" font-family="Helvetica,Tahoma,Arial" font-size="110">
      <text x="55" y="140" fill="#000" fill-opacity=".3" transform="scale(.1)">
        Statements
      </text>
      <text x="50" y="140" transform="scale(.1)">
        Statements
      </text>
      <text x="750" y="140" transform="scale(.1)">
        30%
      </text>
    </g>
  </svg>
`;

describe('Given an example function', () => {
  describe('When provided with coverage of 90%', () => {
    it('Then it returns green badge', () => {
      expect(generateBadge(90.2)).toBe(mockedGreenBadge);
      expect(generateBadge('90.2')).toBe(mockedGreenBadge);
    });
  });

  describe('When provided with coverage of 70%', () => {
    it('Then it returns blue badge', () => {
      expect(generateBadge(76.4)).toBe(mockedBlueBadge);
      expect(generateBadge('76.4')).toBe(mockedBlueBadge);
    });
  });

  describe('When provided with coverage of 50%', () => {
    it('Then it returns yellow badge', () => {
      expect(generateBadge(60.3)).toBe(mockedYellowBadge);
      expect(generateBadge('60.3')).toBe(mockedYellowBadge);
    });
  });

  describe('When provided with coverage of 30%', () => {
    it('Then it returns green badge', () => {
      expect(generateBadge(30)).toBe(mockedRedBadge);
    });
  });

  describe('When provided with coverage of 30%', () => {
    describe('And functions as a scope', () => {
      it('Then it returns green badge', () => {
        expect(generateBadge(30, 'Functions')).toBe(mockedRedFunctionBadge);
      });
    });

    describe('And statements as a scope', () => {
      it('Then it returns green badge', () => {
        expect(generateBadge(30, 'Statements')).toBe(mockedRedStatementsBadge);
      });
    });
  });

});
