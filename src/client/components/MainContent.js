import React, { useState, useEffect }  from 'react';
import { Menu, ProjectsSection, AboutSection, SkillsSection, SectionSwitch, Links, ResumeSection } from './index';
import { navOptions, navKeyCodes, linkKeyCodes, linkOptions } from '../options';
import { delayedItemAnimationInMs, colors } from '../styles';
import { css } from '@emotion/core';

const MainContent = () => {

  const [ currSection, setCurrSection ] = useState('');

  const switchSection = (name) => {
    setCurrSection(name);
  };

  const openLink = (url) => {
    window.open(url,'_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (evt) => {
    const evtKey = evt.key.toLowerCase();

    if(navKeyCodes[evtKey]) {
      switchSection(navKeyCodes[evtKey]);
    }
    else if(linkKeyCodes[evtKey]) {
      openLink(linkKeyCodes[evtKey]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[]);

  const menuItems = [ 'projects', 'resume', 'skills', 'about' ];

  const { about, projects, resume, skills } = navOptions;

  return (
    <main>
      <Menu handleSwitch={ switchSection } menuItems={ menuItems } />
      <SectionSwitch sectionToDisplay={currSection}>
        <AboutSection key={ about.name }/>
        <ProjectsSection key={ projects.name } />
        <ResumeSection key={ resume.name } />
        <SkillsSection key={ skills.name } />
      </SectionSwitch>
      <Links tabIndexStart={menuItems.length+1} links={Object.keys(linkOptions)}/>
      <div css={[
        delayedItemAnimationInMs(menuItems.length+Object.keys(linkOptions).length+5, 250), instructionsStyles
        ]}
      >
        Press [KEY] or [TAB] to navigate.
      </div>
    </main>
  );
};

const instructionsStyles = css({
  color: colors.white,
  fontSize: '24px',
  padding: '32px 0 8px 0'
});

export default MainContent;
