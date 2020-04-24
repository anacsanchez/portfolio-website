import { createMediaQueries } from './utils';

const breakpointsTypingAnimationContentStyles = {
  1250: `{
    width: 715px;
  }`,
  1200: `{
    width: 665px;
  }`,
  1150: `{
    width: 615px;
  }`,
  1100: `{
    width: 590px;
  }`,
  1050: `{
    width: 540px;
  }`,
  1000: `{
    width: 490px;
  }`,
  950: `{
    width: 440px;
  }`,
  900: `{
    width: 390px;
  }`,
  850: `{
    width: 340px;
  }`,
  800: `{
    width: 290px;
  }`,
  750: `{
    width: 240px;
  }`,
  700: `{
    width: 400px;
  }`,
  650: `{
    width: 350px;
  }`,
  525: `{
    width: 325px;
  }`,
  475: `{
    width: 300px;
  }`,
  425: `{
    width: 250px;
  }`,
  375: `{
    width: 225px;
  }`,
  350: `{
    width: 200px;
  }`,
  325: `{
    width: 175px;
  }`
};

const breakpointsSidePanelStyles = {
  700: `{
    position: relative;
    min-height: initial;
    margin-top: 25%;
    align-self: center;
  }`,
};

const breakpointsMainWindowStyles = {
  1150: `{
    width: 700px;
  }`,
  1100: `{
    width: 675px;
  }`,
  1050: `{
    width: 625px;
  }`,
  1000: `{
    width: 575px;
  }`,
  950: `{
    width: 525px;
  }`,
  900: `{
    width: 475px;
  }`,
  850: `{
    width: 425px;
  }`,
  800: `{
    width: 400px;
  }`,
  750: `{
    width: 350px;
  }`,
  700: `{
    width: 450px;
  }`,
  525: `{
    width: 400px;
  }`,
  475: `{
    width: 375px;
  }`,
  425: `{
    width: 325px;
  }`,
  375: `{
    width: 300px;
  }`,
  350: `{
    width: 275px;
  }`,
  325: `{
    width: 250px;
  }`
};
// }

const breakPointsHeaderStyles = {
  350: `{
    width: 225px;
  }`,
  250: `{
    width: 225px;
  }`,
  200: `{
    width: 175px;
  }`
};

export const typingAnimationContentMediaQueries = createMediaQueries(
  breakpointsTypingAnimationContentStyles
);

export const headerMediaQueries = createMediaQueries(breakPointsHeaderStyles);

export const sidePanelMediaQueries = createMediaQueries(breakpointsSidePanelStyles);

export const mainWindowMediaQueries = createMediaQueries(breakpointsMainWindowStyles);
