import React, { useState } from 'react';

const ACTIVE = 'initial';
const INACTIVE = 'none';

const SingleProject = ({ name, image, url, description, tools, github }) => {
  const [ isActive, setStatus ] = useState(INACTIVE);

  return (
    <div className="project" onMouseOver={() => setStatus(ACTIVE)} onMouseOut={() => setStatus(INACTIVE)}>
      <div className="project-header">
        <div className="project-name">{ name }</div>
      </div>
      <div className="project-image" style={{ backgroundImage: `url(${image.length ? image : "default_proj.png"})`} }></div>
      <div className="project-info" style={{ display: isActive }}>
        <div className="project-wrapper">
          <div className="project-description">{ description }<p>Built with: { tools }</p></div>
          <div className="project-options">
            <a target="_blank" rel="noopener noreferrer" href={ url }>Visit</a>
            <a target="_blank" rel="noopener noreferrer" href={ github }>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

