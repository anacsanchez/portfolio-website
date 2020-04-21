import React, { Fragment } from 'react';
import { css } from '@emotion/core';

const SectionSwitch = ({ children, sectionToDisplay }) => {

  const sectionStyles = css({
    fontSize: '26px',
    padding: '16px 16px 16px 16px'
  });
  return (
      <Fragment>
        { sectionToDisplay?.length ?
          <section id={sectionToDisplay} css={sectionStyles}>
            { children.find(child => child.key === sectionToDisplay) }
          </section> : ''
        }
      </Fragment>
  );
};

export default SectionSwitch;
