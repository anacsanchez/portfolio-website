import React, { useState, useEffect }  from 'react';
import { SidePanel, MainWindow, Header, Menu, Links, Instructions } from './index';
import navigation from '../navigation';
import { openLink } from '../utils';
import { css } from '@emotion/core';

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
    if (evt.key.toLowerCase() === 'enter' || evt.type === 'click') {
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
  const headerTypingDuration = 900;

  const menuStartDelay = headerTypingDuration + 25;
  const linksStartDelay = menuStartDelay + (menuItems.length * baseDelayMs);
  const instructionsStartDelay = linksStartDelay + (linksItems.length * baseDelayMs);

  return (
    <div id="home" css={[homeStyles]}>
      <SidePanel>
        <Header duration={headerTypingDuration}/>
        <Menu
          handleSwitch={() => setCurrSection(name)}
          menuItems={ menuItems }
          activeSection={currSection}
          baseDelayMs={baseDelayMs}
          startMs={menuStartDelay}
        />
        <Links
          links={linksItems}
          handleLinkEvent={handleLinkEvent}
          baseDelayMs={baseDelayMs}
          startMs={linksStartDelay}
        />
        <Instructions
          startMs={instructionsStartDelay}
          baseDelayMs={baseDelayMs}/>
      </SidePanel>
    { currSection ?
        <MainWindow
          currentSection={currSection}
          sectionOptions={menu.options}
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



