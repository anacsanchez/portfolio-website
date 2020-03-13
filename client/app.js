import React, { Fragment } from 'react';
import { Header, Home } from './components';
import { globalStyles } from './styles';
import { jsx, css } from '@emotion/core';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home globalCss={ globalStyles }/>
    </Fragment>
  );
};
export default App;
