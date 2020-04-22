export const createMediaQueries = (breakpointsStyles) => (
  Object.keys(breakpointsStyles).reduce((mediaQueries, currBp) => (
    `@media only screen and (max-width: ${currBp}px)
    ${breakpointsStyles[currBp]}

    ${mediaQueries}
  `),'')
);
