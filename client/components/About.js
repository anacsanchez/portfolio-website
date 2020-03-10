import React, { useState } from 'react';
import ImageModal from './ImageModal';

const About = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <section id="about">
      <div className="section-header">======  ABOUT  ======</div>
        <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
        <div id="about-bio">
          <p>I'm a software engineer with an excitement for new technology and a powerful sense of nostalgia.</p>
          <p>I've always loved gaming and tinkering with hardware, but found my passion for programming when I managed web support articles as a Tech Support Specialist with the built-in knowledgebase editor. Learning HTML and CSS empowered me to push beyond what was available to me as a user.</p>
          <p>My professional skills include developing full stack applications in Javascript, Node.js, React, Redux, Postgres and SQL.</p>
          <p>I'm currently typing this at home in NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span></p>
          { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
        <div className="section-footer">======= END =======</div>
      </div>
    </section>
  );
};

export default About;
