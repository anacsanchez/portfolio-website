import React from 'react';
import { linkOptions } from '../options';
import { openLink } from '../utils';
import { colors, sidePanelMediaQueries, delayedItemAnimationInMs } from '../styles';
import { Header, Menu, Links } from './index';
import { css } from '@emotion/core';

const SidePanel = ({ currentSection, handleSwitchSection}) => {

  const handleLinkKeyEnter = (evt) => {
    if (evt.key.toLowerCase() === 'enter') {
      openLink(linkOptions[evt.currentTarget.id].url);
    }
  };

  const handleLinkClick = (evt) => {
    openLink(linkOptions[evt.currentTarget.id].url);
  };

  const menuItems = [ 'projects', 'resume', 'skills', 'about' ];

  return (
    <div id="side-panel" css={[sidePanelStyles, sidePanelMediaQueries]}>
      <div id="side-panel-content" css={sidePanelContentStyles}>
        <Header/>
        <Menu
          handleSwitch={ handleSwitchSection }
          menuItems={ menuItems }
          activeSection={currentSection}
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
    </div>
  );
};

const instructionsStyles = css({
  color: colors.white,
  fontSize: '24px',
  padding: '32px 0 0px 0'
});

const sidePanelStyles = css({
  padding: '0px 16px 0 16px',
  position: 'sticky',
  top: '0px',
  minHeight: '95vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignSelf: 'flex-start'
});

const sidePanelContentStyles = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
});

export default SidePanel;
