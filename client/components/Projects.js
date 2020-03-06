import React, { useState, useEffect, Fragment } from 'react';
import { SingleProject } from './index';

const Projects = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect (() => {
    const fetchProjects = async() => {
      const projectsData = await fetch('/api/projects').then(data => data.json());
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

    return (
      <div className="section">
        <div className="section-header">======  PROJECTS  ======</div>
          {
            projects.length ? projects.map((project,i) =>
              <SingleProject key={ project.name } index={i} {...project} />
            ) : null
          }
        <div className="section-footer">======== END ========</div>
      </div>
    );
};

export default Projects;
