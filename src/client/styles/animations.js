import { css, keyframes } from '@emotion/core';

export const animations = {
  typing: keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `,
  appear: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `
};

export const typingAnimationInMs = (delayIndex, baseMs) => css({
  width: '0%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `1000ms steps(100, end) ${animations.typing}`,
  animationFillMode: 'forwards',
  animationDelay: `${ delayIndex * baseMs }ms`
});

export const delayedDisplayAnimationInMs = (delayIndex, baseMs, delayStart) => css({
  opacity: 0,
  animation: `0s ${animations.appear}`,
  animationFillMode: 'forwards',
  boxSizing: 'border-box',
  animationDelay: `${ (delayIndex * baseMs) + delayStart }ms`
});
