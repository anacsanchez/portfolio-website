import React, { useState, useEffect }  from 'react';
import { Menu, Projects, About, Skills, SectionSwitch, Links, Resume } from './index';
import nav from '../options';
const { navOptions, navKeyCodes, linkKeyCodes } = nav;

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
        <About key={ about.name }/>
        <Projects key={ projects.name } />
        <Resume key={ resume.name } />
        <Skills key={ skills.name } />
      </SectionSwitch>
      <Links tabIndexStart={menuItems.length+1}/>
    </main>
  );
};

export default MainContent;
