import React, { useState, useEffect }  from 'react';
import { Header, MainContent, Menu, Links } from './index';
import { navOptions, navKeyCodes, linkKeyCodes, linkOptions } from '../options';
import { delayedItemAnimationInMs, colors, sidePanelMediaQueries } from '../styles';
import { css } from '@emotion/core';

const Home = () => {
  const [ currSection, setCurrSection ] = useState('projects');

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

  const handleLinkKeyEnter = (evt) => {
    if (evt.key.toLowerCase() === 'enter') {
      openLink(linkOptions[evt.currentTarget.id].url);
    }
  };

  const handleLinkClick = (evt) => {
    openLink(linkOptions[evt.currentTarget.id].url);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);

  const menuItems = [ 'projects', 'resume', 'skills', 'about' ];

  return (
    <div id="page" css={pageStyles}>
      <div id="side-panel" css={[sidePanelStyles, sidePanelMediaQueries]}>
        <Header/>
        <Menu
          handleSwitch={ switchSection }
          menuItems={ menuItems }
          activeSection={currSection}
        />
        <Links
          tabIndexStart={menuItems.length+1}
          links={Object.keys(linkOptions)}
          handleClick={handleLinkClick}
          handleKeyDown={handleLinkKeyEnter}
        />
        <div css={[
          delayedItemAnimationInMs(menuItems.length+Object.keys(linkOptions).length+5, 250),
          instructionsStyles
          ]}
        >
          Press [KEY] or [TAB] to navigate.
        </div>
      </div>
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

const instructionsStyles = css({
  color: colors.white,
  fontSize: '24px',
  padding: '32px 0 8px 0'
});

const pageStyles = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center'
});

const sidePanelStyles = css({
  padding: '22px 16px 0 16px',
  position: 'fixed',
  top: '15%'
});
