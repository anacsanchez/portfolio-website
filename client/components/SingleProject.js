import React from 'react';
const SingleProject = ({name, image, url}) => {
  return (
    <div className="project">
      <a className="project-url" href={url}>
        <div className="project-header">
          <div className="project-name">{name}</div>
        </div>
        <div className="project-image" style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}></div>
      </a>

    </div>
  )
}

export default SingleProject;

