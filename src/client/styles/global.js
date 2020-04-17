import { css } from '@emotion/core';
import jdNadiaWoff2 from './jd_nadia.woff2';
import jdNadiaWoff from './jd_nadia.woff';
import jdNadiaTtf from './jd_nadia.ttf';

const fontColors = {
  white: '#F7F8F8',
}



  //  font-family: 'MyFont';
  //  src:  url('./my-font.woff2') format('woff2'),
  //        url('./my-font.woff') format('woff');
  //  font-weight: 600;
  //  font-style: normal;

const globalStyles = css`
  @font-face:
  {
    font-family: "JD Nadia Regular";
    src: local("JD Nadia Regular"),
      url("./${jdNadiaWoff2}") format("woff2"),
      url("./${jdNadiaWoff}") format("woff"),
      url("./${jdNadiaTtf}") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: "JD Nadia Regular"
  }
`;

export default globalStyles;
