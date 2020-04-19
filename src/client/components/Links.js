import React from 'react';
import { css } from '@emotion/core';
import { CommandKey } from './index';
import { colors, delayedItemAnimation } from '../styles';

const Links = ({ tabIndexStart, links }) => {

  const linksSectionStyles = css({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '32px',
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
    fontSize: '26px'
  });

  return(
    <div className="links-section" css={linksSectionStyles}>
        <div className="links-header" css={[linksHeaderStyles, delayedItemAnimation(tabIndexStart+2, 250)]}>
          Find me on:
        </div>
      {
        links?.map((link, index) =>
            <a tabIndex={tabIndexStart}
              className="link"
              css={[linkStyles, delayedItemAnimation(tabIndexStart+index+3, 250)]}
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

export default Links;
