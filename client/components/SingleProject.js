import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = ({project, handleMouseOver, handleMouseOut, projKey}) => {
  const { name, image, url, description, tools, github } = project;
  return (
    <div className="project" id={`project-${projKey}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="project-header">
          <div className="project-name">{name}</div>
      </div>
      <div className="project-image" style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}>
        <div className="project-info hide">
          <div className="project-wrapper">
            <div className="project-description">{description}<p>Built with: {tools}</p></div>
            <div className="project-options">
              <a href={url}>Visit</a>
              <a href={github}>Github</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProject;

