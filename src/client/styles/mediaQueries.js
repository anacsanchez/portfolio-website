import { createMediaQueries } from './utils';

const breakpointsExpandingTextStyles = {
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

const breakpointsSidePanelStyles = {
  725: `{
    position: relative
  }`,
};

const breakpointsMainContentStyles = {
  725: `{
    margin-left: 24px;
    margin-top: 12px;
    width: 500px;
  }`
}

const breakPointsHeaderStyles = {
  250: `{
    width: 225px;
  }`,
  200: `{
    width: 175px;
  }`
};

export const expandingTextMediaQueries = createMediaQueries(
  breakpointsExpandingTextStyles
);

export const headerMediaQueries = createMediaQueries(breakPointsHeaderStyles);

export const sidePanelMediaQueries = createMediaQueries(breakpointsSidePanelStyles);

export const mainContentMediaQueries = createMediaQueries(breakpointsMainContentStyles);
