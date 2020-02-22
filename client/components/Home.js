import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Projects, About, Skills, SectionSwitch, Links, Resume } from './index';
import nav from '../options';
const { navOptions, navKeyCodes, linkKeyCodes } = nav;

const menuItems = [ 'projects', 'resume', 'skills', 'about' ];

const Home = () => {

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
  },
  []);

  return (
      <div id="home-page">
        <Menu handleClick={ switchSection } menuItems={ menuItems } />
        <SectionSwitch sectionToDisplay={currSection}>
          <About key={ navOptions.about.name }/>
          <Projects key={ navOptions.projects.name } />
          <Resume key={ navOptions.resume.name } />
          <Skills key={ navOptions.skills.name } />
        </SectionSwitch>
        <Links />
      </div>
  );
};

export default Home;
