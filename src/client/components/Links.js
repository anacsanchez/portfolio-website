import React from 'react';
import { css } from '@emotion/core';
import { CommandKey } from './index';
import { colors, delayedItemAnimationInMs } from '../styles';

const Links = ({ tabIndexStart, links, handleClick, handleKeyDown }) => {
  return(
    <div className="links-section" css={linksSectionStyles}>
        <div className="links-header"
          css={[linksHeaderStyles, delayedItemAnimationInMs(tabIndexStart+3, 250)]}
        >
          Find me on:
        </div>
      {
        links?.map((link, index) =>
            <a tabIndex={tabIndexStart}
              className="link"
              id={link}
              css={[linkStyles, delayedItemAnimationInMs(tabIndexStart+index+4, 250)]}
              key={link}
              // onClick={handleClick}
              onKeyDown={handleKeyDown}
            >
              <CommandKey
                keyName={link}
                keyOptionStyle={linkCommandKeyStyles}
                keyRestStyle={linkCommandRestStyles}
              />
            </a>
        )
      }
    </div>
  );
};

const linksSectionStyles = css({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '28px',
  color: colors.lightBlue
});

const linkCommandKeyStyles = css({
  fontSize: '28px'
});

const linkCommandRestStyles = css({
  fontSize: '26px',
  letterSpacing: '4px',
  paddingLeft: '1px'
});

const linksHeaderStyles = css({
  fontSize: '28px',
  padding: '6px 0 8px 0'
});

const linkStyles = css({
  boxSizing: 'border-box',
  width: 'max-content',
  fontSize: '26px',
  ':hover': {
    cursor: 'pointer',
    color: colors.teal
  },
  ':focus': {
    color: colors.teal
  }
});

export default Links;
