import { createMediaQueries } from './utils';

const breakpointsExpandingTextStyles = {
  850: `{
    width: 700px;
  }`,
  750: `{
    width: 600px;
  }`,
  650: `{
    width: 500px;
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

export const expandingTextMediaQueries = createMediaQueries(
  breakpointsExpandingTextStyles
);
