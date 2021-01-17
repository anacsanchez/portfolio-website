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

export const typingAnimationInMs = (delayIndex, baseMs, steps=100, duration=1000) => css({
  width: '0%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `${duration}ms steps(${steps}, end) ${animations.typing}`,
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
