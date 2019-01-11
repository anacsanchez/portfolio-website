import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div id="header">
    <div id="header-layer">
      <div id="header-landing">
        <div id="header-info">
          <div id="header-name">Ana C Sanchez</div>
          <div id="header-title">Software Developer | NYC </div>
          <div id="header-social">
            <a href="https://www.linkedin.com/in/ana-c-sanchez/"><FontAwesomeIcon icon={ faLinkedinIn } size="2x" /></a>
            <a href="https://github.com/anacsanchez"><FontAwesomeIcon icon={ faGithub } size="2x"/></a>
            <a href="https://angel.co/anacsanchez?public_profile=1"><FontAwesomeIcon size="2x" icon={ faAngellist } /></a>
          </div>
        </div>
      </div>
      <div id="header-nav">
        <a href="#about-section">About</a>
        <a href="#projects-section">Projects</a>
        <a href="#contact-section">Contact</a>
      </div>
    </div>
    </div>
  )
}

export default Header;
