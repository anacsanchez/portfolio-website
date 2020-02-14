import React, { useState } from 'react';

const ACTIVE = 'initial';
const INACTIVE = 'none';

const SingleProject = ({ name, image, url, description, tools, github, index }) => {
  const [ isActive, setStatus ] = useState(INACTIVE);

  return (
    <div className="project" style={{ animationDelay: `${index*180}ms`}}>
      <div className="project-name">> { name.toUpperCase() }</div>
      <div className="project-description">{description}</div>
      <div className="project-tech">Built with: { tools }</div>
      <div className="project-url">[ VISIT ]</div>
    </div>
  );

};

export default SingleProject;

