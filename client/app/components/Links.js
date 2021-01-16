import React from 'react';
import { css } from '@emotion/core';
import { CommandKey } from './index';
import { colors, delayedDisplayAnimationInMs } from '../styles';

const Links = ({ links, handleLinkEvent, baseDelayMs, startMs }) => {
  return (
    <div className="links-section" css={linksSectionStyles}>
      <div
        className="links-header"
        css={[
          linksHeaderStyles,
          delayedDisplayAnimationInMs(0, baseDelayMs, startMs),
        ]}
      >
        Find me on:
      </div>
      {links?.map((link, index) => (
        <a
          tabIndex={0}
          className="link"
          id={link}
          css={[
            linkStyles,
            delayedDisplayAnimationInMs(index + 1, baseDelayMs, startMs),
          ]}
          key={link}
          onClick={handleLinkEvent}
          onKeyDown={handleLinkEvent}
        >
          <CommandKey
            keyName={link}
            keyOptionStyle={linkCommandKeyStyles}
            keyRestStyle={linkCommandRestStyles}
          />
        </a>
      ))}
    </div>
  );
};

const linksSectionStyles = css({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '28px',
  color: colors.lightBlue,
});

const linkCommandKeyStyles = css({
  fontSize: '30px',
});

const linkCommandRestStyles = css({
  fontSize: '28px',
  letterSpacing: '4px',
  paddingLeft: '5px',
});

const linksHeaderStyles = css({
  fontSize: '28px',
  padding: '6px 0 8px 0',
});

const linkStyles = css({
  boxSizing: 'border-box',
  width: 'max-content',
  fontSize: '26px',
  ':hover': {
    cursor: 'pointer',
    color: colors.teal,
  },
  ':focus': {
    color: colors.teal,
  },
});

export default Links;
