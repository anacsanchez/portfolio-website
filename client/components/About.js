import React, { useState } from 'react';
import ImageModal from './ImageModal';

const About = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <section id="about">
      <div className="section-header">======  ABOUT  ======</div>
        <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
        <div id="about-bio" className="expanding-item">
          <p className="item-text standalone-text">I'm a software engineer with an excitement for new tech challenges and building projects that leave lasting impressions.</p>
          <p className="item-text standalone-text">I've always loved gaming and tinkering with hardware, but found my passion for programming when I edited support articles as a Tech Support Specialist with the built-in knowledgebase content manager. Learning HTML and CSS empowered me to push beyond what was available to me as a user.</p>
          <p className="item-text standalone-text">My professional skills include developing full stack applications in Javascript, Node.js, React, Redux, Postgres and SQL.</p>
          <p className="item-text standalone-text">I'm currently typing this at home in NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span></p>
          { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
        </div>
        <div className="section-footer">======= END =======</div>
    </section>
  );
};

export default About;
