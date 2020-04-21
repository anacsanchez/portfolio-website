import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../styles';

const WindowBorder = ({ children }) => {
  return (
    <div css={grayOuterBorderStyles}>
      <div css={blackInnerBorderStyles}>
        <div css={grayInnerBorderStyles}>
          <div css={windowBarStyles}></div>
          {children}
        </div>

      </div>
    </div>
  );
};

const grayOuterBorderStyles = css({
  border: `2px solid ${colors.lightGray}`
});

const blackInnerBorderStyles = css({
  border: '1px solid black'
});

const grayInnerBorderStyles = css({
  border: `2px solid ${colors.lightGray}`
});

const windowBarStyles = css({
  background: `repeating-linear-gradient(black 3px, ${colors.fadedBlue} 1px, ${colors.fadedBlue} 6px, black 0px, black 10px)`,
  height: '16px',
  borderBottom: `2px solid ${colors.lightGray}`
});

export default WindowBorder;
