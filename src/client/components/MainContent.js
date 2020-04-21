import React from 'react';
import { ProjectsSection, AboutSection, SkillsSection, SectionSwitch, ResumeSection, WindowBorder } from './index';
import { css } from '@emotion/core';
import { expandingTextMediaQueries, mainContentMediaQueries } from '../styles';

const MainContent = ({ currentSection, sectionOptions }) => {
  const { about, projects, resume, skills } = sectionOptions;

  return (
    <main css={[mainContentStyles, mainContentMediaQueries]}>
      <WindowBorder>
        <SectionSwitch sectionToDisplay={currentSection}>
          <AboutSection key={ about.name }/>
          <ProjectsSection key={ projects.name } />
          <ResumeSection key={ resume.name } />
          <SkillsSection key={ skills.name } />
        </SectionSwitch>
      </WindowBorder>
    </main>
  );
};

const mainContentStyles = css({
  width: '800px',
  marginTop: '24px'
});

export default MainContent;
