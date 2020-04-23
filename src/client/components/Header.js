import React from 'react';
import { css } from '@emotion/core';
import { typingAnimationInMs, colors, headerMediaQueries } from '../styles';

const Header = ({ headerTypingDuration }) => {
  return (
    <header id="header" css={typingAnimationInMs(0, 0, 80, headerTypingDuration)}>
        <h1 css={[headerBase, headerName, headerMediaQueries]} id="name">
          Ana C Sanchez
        </h1>
        <h2 css={[headerBase, headerTitle, headerMediaQueries]} id="title">
          Software Engineer
        </h2>
    </header>
  );
};

const headerBase = css({
  fontSize: '38px',
  letterSpacing: '0px',
  width: '275px',
  whiteSpace: 'normal',
  paddingLeft: '2px',
});

const headerName = css({
  color: colors.green,
  textShadow: 'hsl(150, 50%,50%,50%) 1px 0 5px',
  fontSize: '46px',
  letterSpacing: '2px',
  textTransform: 'uppercase'
});

const headerTitle = css({
  color: colors.white,
  textShadow: `${colors.whiteShadow} 1px 0 10px`,
});

export default Header;
