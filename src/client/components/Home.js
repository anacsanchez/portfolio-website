import React, { useState, useEffect }  from 'react';
import { SidePanel, MainContent } from './index';
import { navOptions, navKeyCodes, linkKeyCodes } from '../options';
import { openLink } from '../utils';
import { css } from '@emotion/core';
import { pageMediaQueries } from '../styles';

const Home = () => {
  const [ currSection, setCurrSection ] = useState('');

  const switchSection = (name) => {
    setCurrSection(name);
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

  return (
    <div id="page" css={[pageStyles, pageMediaQueries]}>
      <SidePanel
        currentSection={currSection}
        handleSwitchSection={switchSection}
      />
      {
        currSection ?
          <MainContent
            currentSection={currSection}
            sectionOptions={navOptions}
          />
        : ''
      }
    </div>
  );
};

export default Home;

const pageStyles = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
});


