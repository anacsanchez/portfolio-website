import { css } from '@emotion/core';
import animations from './animations';
import colors from './colors';
import { expandingTextMediaQueries } from './mediaQueries';

export const globalStyles = css`
  color: white;
`;

export const sectionHeaderAndFooterStyles = css({
  fontSize: '30px',
  color: colors.green,
  padding: '12px 0 12px 0'
});

export const expandingTextStyles = css`{
  width: 800px;
  white-space: normal;

  ${expandingTextMediaQueries}
}`;

export const itemStyles = css`
  .item-title {
    font-size: 28px;
    padding: 2px 0 8px 0;
    color: ${colors.brightYellow};
    word-spacing: 3px;
  }

  .item-sub-title {
    font-size: 26px;
    padding: 2px 0;
    color: ${colors.teal};
    word-spacing: 3px;
  }

  .item-text {
    word-spacing: 3px;
    letter-spacing: 1px;
    color: ${colors.white};
    font-size: 26px;
    line-height: 90%;
  }

  .item-text-section {
    padding: 8px 0;
  }

  .emphasized-text {
    padding: 10px 0;
    color: ${colors.teal};
    word-spacing: 3px;
  }
`;

export const expandingItemAnimationInMs = (delayIndex, baseMs) => css({
  width: '0%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `500ms steps(100, end) ${animations.typing}`,
  animationFillMode: 'forwards',
  animationDelay: `${ delayIndex * baseMs }ms`
});

export const delayedItemAnimationInMs = (delayIndex, baseMs) => css({
  opacity: 0,
  animation: `0s ${animations.appear}`,
  animationFillMode: 'forwards',
  boxSizing: 'border-box',
  animationDelay: `${ delayIndex * baseMs }ms`
});





