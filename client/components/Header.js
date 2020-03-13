import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';
import { animations, colors } from '../styles';

const headerBase = css`
  font-size: 38px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${animations.typing} 2.3s steps(80, end);
  letter-spacing: 0px;
`;

const headerName = css`
  color: ${colors.green};
  text-shadow: hsl(150, 50%,50%,50%) 1px 0 5px;
`;

const headerTitle = css`
  color: ${colors.white};
  text-shadow: ${colors.whiteShadow} 1px 0 10px;
`;

const Header = () => {
  return (
    <header id="header">
        <h1 css={[headerBase, headerName]} id="name">
          Ana C Sanchez
        </h1>
        <h2 css={[headerBase, headerTitle]}id="title">
          Software Engineer
        </h2>
    </header>
  );
};

export default Header;
