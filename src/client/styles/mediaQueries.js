import { createMediaQueries } from './utils';

const breakpointsExpandingTextStyles = {
  1150: `{
    width: 750px;
  }`,
  1100: `{
    width: 700px;
  }`,
  1050: `{
    width: 675px;
  }`,
  1000: `{
    width: 625px;
  }`,
  950: `{
    width: 575px;
  }`,
  900: `{
    width: 525px;
  }`,
  850: `{
    width: 475px;
  }`,
  525: `{
    width: 425px;
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
  525: `{
    position: relative
  }`,
};

const breakpointsMainContentStyles = {
  525: `{
    margin-left: 12px;
    margin-top: 12px;
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
