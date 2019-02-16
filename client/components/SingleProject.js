import React, { useState } from 'react';

const SingleProject = ({ name, image, url, description, tools, github }) => {
  const [isActive, setStatus] = useState(inactive)
  return (
    <div className="project" onMouseOver={() => setStatus(active)} onMouseOut={() => setStatus(inactive)}>
      <div className="project-header">
        <div className="project-name">{name}</div>
      </div>
      <div className="project-image" style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}></div>
      <div className="project-info" style={isActive}>
        <div className="project-wrapper">
          <div className="project-description">{description}<p>Built with: {tools}</p></div>
          <div className="project-options">
            <a target="_blank" href={url}>Visit</a>
            <a target="_blank" href={github}>Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const active = { display: 'initial' }
const inactive = { display: 'none' }

export default SingleProject;

