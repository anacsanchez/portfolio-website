import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Landing = () => {
  return (
    <div id="landing">
      <div id="name">Ana C Sanchez</div>
      <div id="name-subtitle">Software Developer | NYC</div>
      <div id="landing-icons">
        <a href="https://www.linkedin.com/in/ana-c-sanchez/"><FontAwesomeIcon icon={ faLinkedinIn } size="3x" /></a>
        <a href="https://github.com/anacsanchez"><FontAwesomeIcon icon={ faGithub } size="3x"/></a>
        <a href="#contact-section"><FontAwesomeIcon icon={ faEnvelope } size="3x" /></a>
        <a href="https://angel.co/anacsanchez?public_profile=1"><FontAwesomeIcon size="3x" icon={ faAngellist } /></a>
      </div>
    </div>
  )
}

export default Landing;
