import React, { useState, useEffect }  from 'react';
import { css } from '@emotion/core';
import {
  SidePanel,
  MainWindow,
  Header,
  Menu,
  Links,
  Instructions
} from './index';
import navigation from '../navigation';
import { openLink } from '../utils';

const Home = () => {

  const { menu, links } = navigation;

  const [ currSection, setCurrSection ] = useState('');

  const handleKeyDown = (evt) => {
    const evtKey = evt.key.toLowerCase();

    if(menu.keyCodes[evtKey]) {
      setCurrSection(menu.keyCodes[evtKey]);
    }
    else if(links.keyCodes[evtKey]) {
      openLink(links.keyCodes[evtKey]);
    }
  };

  const handleLinkEvent = (evt) => {
    if (evt.key?.toLowerCase() === 'enter' || evt.type === 'click') {
      openLink(links.options[evt.currentTarget.id].url);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);

  const menuItems = Object.keys(menu.options);
  const linksItems = Object.keys(links.options);

  const baseDelayMs = 200;
  const headerDelay = 100;
  const headerAnimationDuration = 900;
  const menuDelay = 50;

  const menuStartMs = headerAnimationDuration + headerDelay + menuDelay;
  const linksStartMs = menuStartMs + (menuItems.length * baseDelayMs);
  const instructionsStartMs = linksStartMs + (linksItems.length * baseDelayMs);

  return (
    <div id="home" css={[homeStyles]}>
      <SidePanel>
        <Header delay={headerDelay} animationDuration={headerAnimationDuration}/>
        <Menu
          handleSwitch={ (name) => setCurrSection(name) }
          menuItems={ menuItems }
          activeSection={ currSection }
          baseDelayMs={ baseDelayMs }
          startMs={ menuStartMs }
        />
        <Links
          links={ linksItems }
          handleLinkEvent={ handleLinkEvent }
          baseDelayMs={ baseDelayMs }
          startMs={ linksStartMs }
        />
        <Instructions
          startMs={ instructionsStartMs }
          baseDelayMs={ baseDelayMs }/>
      </SidePanel>
    { currSection ?
        <MainWindow
          currentSection={ currSection }
          sectionOptions={ menu.options }
        />
      : ''
    }
    </div>
  );
};

const homeStyles = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
});

export default Home;



