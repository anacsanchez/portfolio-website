import React, { useState, useEffect, Fragment } from 'react';
import { Header, Main } from './index';
import nav from '../options';
const { navOptions, navKeyCodes, linkKeyCodes } = nav;

const Home = () => {

  const [ currSection, setCurrSection ] = useState('');

  const switchSection = (name) => {
    setCurrSection(name);
  };

  const openLink = (url) => {
    window.open(url,'_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (evt) => {
    const evtKey = evt.key.toLowerCase();

    if(navKeyCodes[evtKey]) {
      switchSection(navKeyCodes[evtKey]);
    }
    else if(linkKeyCodes[evtKey]) {
      openLink(linkKeyCodes[evtKey]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);
  
  const menuItems = [ 'projects', 'resume', 'skills', 'about' ];

  return (
    <Fragment>
      <Header typingLengthInSeconds={2.3}/>
      <Main 
        handleSwitch={switchSection} 
        currSection={currSection}
        navOptions={navOptions}
        menuItems={menuItems}
      />
    </Fragment>
  );
};

export default Home;
