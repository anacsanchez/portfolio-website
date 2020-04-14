import React, { Fragment } from 'react';
import { Header, MainContent } from './index';

const Home = () => (
  <Fragment>
    <Header typingLengthInSeconds={2.3}/>
    <MainContent />
  </Fragment>
);

export default Home;
