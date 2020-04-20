import React, { Fragment } from 'react';
import { css } from '@emotion/core';

const SectionSwitch = ({ children, sectionToDisplay }) => {

  const sectionStyles = css({
    fontSize: '26px',
    padding: '24px 0 6px 0'
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
