import React, { useState, useEffect }  from 'react';
import { Menu, ProjectsSection, AboutSection, SkillsSection, SectionSwitch, Links, ResumeSection } from './index';
import { navOptions, navKeyCodes, linkKeyCodes, linkOptions } from '../options';

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
    </main>
  );
};

export default MainContent;
