import React from 'react';
import { css } from '@emotion/core';
import { sidePanelMediaQueries } from '../styles';

const SidePanel = ({ children }) => (
  <div id="side-panel" css={[sidePanelStyles, sidePanelMediaQueries]}>
    <div id="side-panel-content" css={[sidePanelContentStyles]}>
      {children}
    </div>
  </div>
);

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
