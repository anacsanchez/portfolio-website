import React from 'react';
import { css } from '@emotion/core';
import { colors, delayedDisplayAnimationInMs } from '../styles';

const Instructions = ({ baseDelayMs, startMs }) => (
  <div css={[
      delayedDisplayAnimationInMs(1, baseDelayMs, startMs),
      instructionsStyles
    ]}
  >
    Press [KEY] or [TAB] to navigate.
  </div>
);

const instructionsStyles = css({
  color: colors.white,
  fontSize: '24px',
  padding: '32px 0 0px 0'
});

export default Instructions;
