import React from 'react';
import { SingleProject } from './index';

const Projects = ({projects}) => {
  return (
    <div id="projects-section">
      <div className="section-title">Projects</div>
      <div id="projects-list">
        {projects.length ? projects.map((project,i) => <SingleProject key={i} name={project.name} image={project.image} url={project.url} description={project.description} github={project.github}/>) : null}
      </div>
    </div>
  )
}

export default Projects;
