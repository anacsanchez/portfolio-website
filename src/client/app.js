import React, { Fragment } from 'react';
import { Home } from './components';
import { globalStyles } from './styles';
import { Global } from '@emotion/core';

console.log(globalStyles)

const App = () => {
  return (
    <Fragment>
      <Global styles={globalStyles}/>
      <Home/>
    </Fragment>
  );
};
export default App;
