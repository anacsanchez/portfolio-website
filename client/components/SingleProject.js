import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = ({name, image, url, description}) => {
  return (
    <div className="project">
      <a className="project-url" target="_blank" href={url}>
        <div className="project-header dark1-color-bg">
          <div className="project-name">{name}</div>
          {/* <div className="project-github"><FontAwesomeIcon icon={ faGithub }/></div> */}
        </div>
          {/* <div className="project-description">{description}</div> */}
        <div className="project-image" style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}></div>
      </a>

    </div>
  )
}

export default SingleProject;

