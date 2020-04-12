import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <div id="header">
    <div id="header-layer">
      <div id="header-landing">
        <div id="header-info">
          <div id="header-name">Ana C Sanchez</div>
          <div id="header-title">Software Engineer</div>
          <div id="header-social">
            <a href="https://www.linkedin.com/in/ana-c-sanchez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="3x" /></a>
            <a href="https://github.com/anacsanchez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="3x"/></a>
            <a href="https://angel.co/anacsanchez?public_profile=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="3x" icon={ faAngellist } /></a>
            <a href="https://anacsanchez.com/Ana_Sanchez-Resume.pdf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="3x" icon={ faFileAlt } /></a>
            <div id="header-location-icon"><FontAwesomeIcon size="3x" icon={faBuilding} /><div id="header-location-name">NYC</div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-nav">
        <a href="#projects-section">Projects</a>
        <a href="#about-section">About</a>
        <a href="#contact-section">Contact</a>
      </div>
    </div>
    </div>
  );
};

export default Header;
