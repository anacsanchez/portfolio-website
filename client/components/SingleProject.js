import React from 'react';

const SingleProject = ({project, handleMouseOver, handleMouseOut, projKey}) => {
  const { name, image } = project;
  return (
    <div className="project" id={`project-${projKey}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="project-header">
          <div className="project-name">{name}</div>
      </div>
      <div className="project-image" style={{backgroundImage: `url(${image.length ? image : "default_proj.png"})`}}>
        <SingleProjectInfo project={project} />
      </div>

    </div>
  )
}

const SingleProjectInfo = ({project}) => {
  const { url, description, tools, github } = project;
  return (
    <div className="project-info hide">
      <div className="project-wrapper">
        <div className="project-description">{description}<p>Built with: {tools}</p></div>
        <div className="project-options">
          <a target="_blank" href={url}>Visit</a>
          <a target="_blank" href={github}>Github</a>
        </div>
      </div>
    </div>
  )
}


export default SingleProject;

