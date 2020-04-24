import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors } from '../styles';

const SectionSwitch = ({ children, sectionToDisplay }) => {
  return (
      <Fragment>
        { sectionToDisplay?.length ?
          <section id={sectionToDisplay} css={[sectionStyles, scrollbarStyles]}>
            { children.find(child => child.key === sectionToDisplay) }
          </section> : ''
        }
      </Fragment>
  );
};

const sectionStyles = css({
  fontSize: '26px',
  padding: '16px 16px 16px 32px',
  height: '70vh',
  overflowY: 'scroll',
});

const scrollbarStyles = css`
& ::-webkit-scrollbar {
  width: 10px;
}
& ::-webkit-scrollbar-track {
  background: #3f3f3f;
}
& ::-webkit-scrollbar-thumb {
  background-color: #929292;
  border-radius: 2px;
  border: 1px solid #818A93;
}
`;

export default SectionSwitch;
