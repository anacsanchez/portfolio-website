import React from 'react';
import { css } from '@emotion/core';
import { animations, colors } from '../styles';

const Header = () => {

  const headerTypingDuration = 5;

  const headerAnimation = css({
    animation: `${animations.typing} ${headerTypingDuration}s steps(80, end)`
  });

  const headerBase = css({
    fontSize: '38px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    letterSpacing: '0px'
  });

  const headerName = css({
    color: colors.green,
    textShadow: 'hsl(150, 50%,50%,50%) 1px 0 5px'
  });

  const headerTitle = css({
    color: colors.white,
    textShadow: `${colors.whiteShadow} 1px 0 10px`
  });

  return (
    <header id="header">
        <h1 css={[headerBase, headerName, headerAnimation]} id="name">
          Ana C Sanchez
        </h1>
        <h2 css={[headerBase, headerTitle, headerAnimation]} id="title">
          Software Engineer
        </h2>
    </header>
  );
};



export default Header;
