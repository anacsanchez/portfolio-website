import React from 'react';
import { Menu, Projects, About, Skills, SectionSwitch, Links, Resume } from './index';

const Main = ({ handleSwitch, currSection, navOptions, menuItems }) => {
  const { about, projects, resume, skills } = navOptions;
  return (
    <main id="home-page">
      <Menu handleClick={ handleSwitch } menuItems={ menuItems } />
      <SectionSwitch sectionToDisplay={currSection}>
        <About key={ about.name }/>
        <Projects key={ projects.name } />
        <Resume key={ resume.name } />
        <Skills key={ skills.name } />
      </SectionSwitch>
      <Links tabIndexStart={menuItems.length+1}/>
    </main>
  )
}

export default Main;