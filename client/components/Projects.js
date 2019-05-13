import React, { useState, useEffect } from 'react';
import { SingleProject } from './index';

const Projects = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect (() => {
    const fetchProjects = async() => {
      const projectsData = await fetch('projects.json').then(data => data.json());
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

    return (
      <div id="projects-section">
        <div className="section-title">Projects</div>
        <div id="projects-list">
          { projects.length ?
              projects.map(project =>
                <SingleProject key={ project.name } {...project} />
              )
              : null
          }
        </div>
      </div>
    );
};

export default Projects;
