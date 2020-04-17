import React, { Fragment } from 'react';

const SectionSwitch = ({ children, sectionToDisplay }) => {
  return (
    <Fragment>
      { sectionToDisplay?.length ? 
        children.find(child => child.key == sectionToDisplay) 
        : null 
      }
    </Fragment>
  );
};

export default SectionSwitch;
