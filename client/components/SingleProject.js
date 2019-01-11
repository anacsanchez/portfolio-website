import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = ({project, handleMouseOver, handleMouseOut, projKey}) => {
  const { name, image, url, description } = project;
  return (
    <div className="project" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="project-header">
        <a className="project-url" target="_blank" href={url}>
          <div className="project-name">{name}</div>
        </a>
      </div>
      <div className="project-image" id={`image-${projKey}`} style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}></div>
      <div className="project-info hide">
        <div className="project-description">{description}</div>
        <div className="project-options">
          <a href="google.com">Visit</a>
          <a href="">Github</a>
        </div>
      </div>
    </div>
  )
}

export default SingleProject;

