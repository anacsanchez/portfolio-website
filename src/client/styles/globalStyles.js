import { css } from '@emotion/core';
import colors from './colors';
import { typingAnimationContentMediaQueries } from './mediaQueries';

export const globalStyles = css`
  color: white;
`;

export const sectionHeaderAndFooterStyles = css({
  fontSize: '32px',
  color: colors.green,
  padding: '12px 0 12px 0'
});

export const typingAnimationContentStyles = css`{
  width: 750px;
  white-space: normal;

  ${typingAnimationContentMediaQueries}
}`;



