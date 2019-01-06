import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const Landing = () => {
  return (
    <div id="landing">
      <div id="name">Ana C Sanchez</div>
      {/* <svg height="10"><line x1="0vw" x2="10vw" y1="1vh" y2="1vh" stroke="white" strokeWidth=".3em" opacity="1"></line></svg> */}
      <div id="name-subtitle">Software Developer | NYC</div>
      <div id="landing-links">
        <a href="https://www.linkedin.com/in/ana-c-sanchez/"><FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
        <a href=""><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
      </div>
    </div>
  )
}

export default Landing;
