import React from 'react';

import { sidePanelMediaQueries } from '../styles';

import { css } from '@emotion/core';

const SidePanel = ({ children }) => {

  return (
    <div id="side-panel" css={[sidePanelStyles, sidePanelMediaQueries]}>
      <div id="side-panel-content" css={[sidePanelContentStyles]}>
        {children}
      </div>
    </div>
  );
};

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
