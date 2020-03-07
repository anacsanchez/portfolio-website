import React, { useState, useEffect } from 'react';
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
        <ul>
          {
            projects?.length ? projects.map((project,i) =>
              <SingleProject key={ project.name } index={i} {...project} />
            ) : ''
          }
        </ul>
        <div className="section-footer">======== END ========</div>
      </div>
    );
};

export default Projects;
