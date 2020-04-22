import React from 'react';
import { css } from '@emotion/core';
import { animations, colors, headerMediaQueries } from '../styles';

const Header = () => {

  const headerTypingDuration = 900;

  const headerAnimation = css({
    width: '0%',
    animation: `${headerTypingDuration}ms steps(80, end) ${animations.typing}`,
    animationFillMode: 'forwards',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    paddingLeft: '2px'
  });

  const headerBase = css({
    fontSize: '38px',
    letterSpacing: '0px',
    width: '275px',
    whiteSpace: 'normal'
  });

  const headerName = css({
    color: colors.green,
    textShadow: 'hsl(150, 50%,50%,50%) 1px 0 5px',
  });

  const headerTitle = css({
    color: colors.white,
    textShadow: `${colors.whiteShadow} 1px 0 10px`,
  });

  return (
    <header id="header" css={headerAnimation}>
        <h1 css={[headerBase, headerName, headerMediaQueries]} id="name">
          Ana C Sanchez
        </h1>
        <h2 css={[headerBase, headerTitle, headerMediaQueries]} id="title">
          Software Engineer
        </h2>
    </header>
  );
};



export default Header;
