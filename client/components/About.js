import React, { useState } from 'react';
import ImageModal from './ImageModal';

const About = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div id="about-section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
        <div id="about-bio">
          <p>I'm a self-driven and enthusiastic software engineer eager to explore any new tech I can get my hands on.</p>
          <p>I've always loved experimenting with technology, from swapping parts in scrap computers as a kid to trying emulators on every single mobile device I owned. I began to learn programming as a Tech Support Specialist, using HTML and CSS to implement more intuitive support articles than the built-in format. That experience empowered me to express my ideas through coding and branch out as a developer.</p>
          <p>My professional skills include building full stack applications in Javascript, Node.js, React, Redux, Postgres and SQL.</p>
          <p>I'm currently typing this at home in NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span></p>
          { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
      </div>
      </div>
    </div>
  );
};

export default About;
