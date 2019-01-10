import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div id="header">
      <div id="header-layer">
      <div id="header-content">
        {/* <div id="header-pic-small" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div> */}
        <div id="header-details">
          <div id="header-info">
            <div id="header-title-section" className="color3-bg">
              <div id="header-name">Ana C Sanchez</div>
              <div id="header-location">Software Developer | NYC </div>
            </div>
            <div id="header-social" className="color3-bg">
              <a href="https://www.linkedin.com/in/ana-c-sanchez/"><FontAwesomeIcon icon={ faLinkedinIn } size="2x" /></a>
              <a href="https://github.com/anacsanchez"><FontAwesomeIcon icon={ faGithub } size="2x"/></a>
              <a href="https://angel.co/anacsanchez?public_profile=1"><FontAwesomeIcon size="2x" icon={ faAngellist } /></a>
            </div>
            {/* <div id="header-bio" className="color2-bg">I'm a software developer with a background in tech support and a determination to solve any problem I come across.</div> */}
          </div>


        </div>
        <div id="header-section-links" className="dark3-color-font">
          <a>About</a>
          <a>Projects</a>
          {/* <a>Skills</a> */}
          <a>Contact</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;
