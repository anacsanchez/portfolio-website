import React from 'react';
import { css } from '@emotion/core';

const SectionSwitch = ({ children, sectionToDisplay }) => {

  const sectionStyles = css({
    fontSize: '26px',
    padding: '24px 0 10px 0'
  });
  return (
      <section id={sectionToDisplay} css={sectionStyles}>
        { sectionToDisplay?.length ?
          children.find(child => child.key === sectionToDisplay)
          : null
        }
      </section>
  );
};

export default SectionSwitch;
