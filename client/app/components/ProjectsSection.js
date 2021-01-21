import React, { Fragment } from 'react';
import { SingleProject } from './index';
import { sectionHeaderAndFooterStyles, typingAnimationInMs } from '../styles';
import projects from '../projects.json';

const ProjectsSection = () => {

  const animationDuration = 800;
  const baseDelay = 500;

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
