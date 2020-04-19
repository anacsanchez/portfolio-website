import React, { useState, useEffect, Fragment } from 'react';
import { SingleProject } from './index';
import { sectionHeaderAndFooterStyles } from '../styles';

const ProjectsSection = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect (() => {
    const fetchProjects = async() => {
      try {
        const data = await fetch('/api/projects');
        const projectsData = await data.json();
        setProjects(projectsData);
      }
      catch(err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

    return (
      <Fragment>
        <div className="section-header" css={sectionHeaderAndFooterStyles}>
          ======  PROJECTS  ======
        </div>
        <ul>
        {
          projects?.length ?
            projects.map((project,i) =>
              <SingleProject key={ project.name } index={i} {...project} />
            )
          : ''
        }
        </ul>
        <div className="section-footer" css={sectionHeaderAndFooterStyles}>
          ======== END ========
        </div>
      </Fragment>
    );
};

export default ProjectsSection;
