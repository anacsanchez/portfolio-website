// export const createMediaQueries = (breakpointsStyles, elements) => (
//   Object.keys(breakpointsStyles).reduce((mediaQueries, currBp) => (
//     `@media only screen and (max-width: ${currBp}px) {
//     ${elements.join(',')} ${breakpointsStyles[currBp]}

//     ${mediaQueries}
//   `),'')
// );

export const createMediaQueries = (breakpointsStyles) => (
  Object.keys(breakpointsStyles).reduce((mediaQueries, currBp) => (
    `@media only screen and (max-width: ${currBp}px)
    ${breakpointsStyles[currBp]}

    ${mediaQueries}
  `),'')
);

// const createTextMediaQueriesObj = () => (
//   Object.keys(breakpointsExpandingText).reduce((mqs, currBp) => {
//     const mediaQuery = `@media only screen and (max-width: ${currBp}px)`;
//     return ({
//       [mediaQuery]: {
//         width: `${breakpointsExpandingText[currBp]}px`
//     }, ...mqs });
//   },{})
// );

