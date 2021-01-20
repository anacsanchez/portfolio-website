import React, { useState, useEffect, Fragment } from 'react';
import { SingleProject } from './index';
import { sectionHeaderAndFooterStyles, typingAnimationInMs } from '../styles';

const ProjectsSection = () => {

  const animationDuration = 800;
  const baseDelay = 500;

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
        <div className="section-header" css={ sectionHeaderAndFooterStyles }>
          ======  PROJECTS  ======
        </div>
        <ul> {
          projects?.length ?
            projects.map((project,i) =>
              <SingleProject
                key={ project.name }
                index={ i }
                animationDuration={ animationDuration }
                baseDelay={ baseDelay }
                { ...project }
              />
            )
          : ""
        }
        </ul>
        <div className="section-footer"
          css={[
            sectionHeaderAndFooterStyles,
            typingAnimationInMs((projects.length), baseDelay, 100, animationDuration)
          ]}
        >
          ======== END ========
        </div>
      </Fragment>
    );
};

export default ProjectsSection;
