import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';
import { animations, colors } from '../styles';

const Header = ({ typingLengthInSeconds }) => {
  console.log(typingLengthInSeconds)
  return (
    <header id="header">
        <h1 css={[headerBase, headerName]} id="name">
          Ana C Sanchez
        </h1>
        <h2 css={[headerBase, headerTitle]} id="title">
          Software Engineer
        </h2>
    </header>
  );
};

const headerBase = css({
  fontSize: '38px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `${animations.typing} ${typingLengthInSeconds}s steps(80, end)`,
  letterSpacing: '0px'
})

const headerName = css({
  color: colors.green,
  textShadow: 'hsl(150, 50%,50%,50%) 1px 0 5px'
});

const headerTitle = css({
  color: colors.white,
  textShadow: `${colors.whiteShadow} 1px 0 10px`
});

export default Header;
