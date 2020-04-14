import React from 'react';
import { css } from '@emotion/core';
import { animations } from '../styles';

const DelayedListItem = ({ delay, children }) => {
  const delayedAnimationStyle = css({
    opacity: 0,
    animation: `0s ${animations.appear}`,
    animationFillMode: 'forwards',
    boxSizing: 'border-box',
    animationDelay: delay
  });

  return (
    <li css={delayedAnimationStyle}>
      { children }
    </li>
  );
};

export default DelayedListItem;
