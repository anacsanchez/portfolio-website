import React from 'react';
import { css } from '@emotion/core';
import {
  ProjectsSection,
  AboutSection,
  SkillsSection,
  SectionSwitch,
  ResumeSection,
  WindowBorder
} from './index';
import { mainWindowMediaQueries } from '../styles';

const MainWindow = ({ currentSection, sectionOptions }) => {
  const { about, projects, resume, skills } = sectionOptions;

  return (
    <main css={[mainWindowStyles, mainWindowMediaQueries]}>
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

const mainWindowStyles = css({
  width: '800px',
  marginTop: '24px'
});

export default MainWindow;
