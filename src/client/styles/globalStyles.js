import { css } from '@emotion/core';
import animations from './animations';

export const globalStyles = css`
  color: white;
`;

export const expandingItemAnimation = (delayIndex, baseMs) => css({
  width: '0%',
  // padding: '12px 0',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `500ms steps(100, end) ${animations.typing}`,
  animationFillMode: 'forwards',
  animationDelay: `${ delayIndex * baseMs }ms`
});

export const delayedItemAnimation = (delayIndex, baseMs) => css({
  opacity: 0,
  animation: `0s ${animations.appear}`,
  animationFillMode: 'forwards',
  boxSizing: 'border-box',
  animationDelay: `${ delayIndex * baseMs }ms`
});
