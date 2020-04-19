import { createMediaQueries } from './utils';

const breakpointsExpandingTextStyles = {
  850: `{
    width: 700px
  }`,
  750: `{
    width: 600px
  }`,
  650: `{
    width: 500px
  }`,
  550: `{
    width: 400px;
  }`,
  450: `{
    width: 300px;
  }`,
  375: `{
    width: 225px;
  }`
};

// export const expandingItemMediaQueries = createMediaQueries(
//   breakpointsExpandingTextStyles,
//   // [ 'p', '.emphasized-text', '.item-text','.item-title' ]
// );

export const expandingTextMediaQueries = createMediaQueries(
  breakpointsExpandingTextStyles
);

// const breakpointsExpandingText = {
//   850: 700,
//   750: 600,
//   650: 500,
//   550: 400,
//   450: 300,
//   375: 225
// };


