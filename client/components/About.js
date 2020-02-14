import React, { useState } from 'react';
import ImageModal from './ImageModal';

const About = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="section">
      <div className="section-header">======  ABOUT  ======</div>
        <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
        <div id="about-bio">
          <p>I'm a self-driven and enthusiastic software developer eager to explore new technologies and make user-friendly applications.</p>
          <p>I've always loved gaming and tinkering with hardware, but found my passion for programming when I managed web support content as a Tech Support Specialist. I wanted to learn HTML and CSS to implement more intuitive knowledgebase articles, and then I was hooked.</p>
          <p>My professional skills include developing full stack applications in Javascript, Node.js, React, Redux, Postgres and SQL.</p>
          <p>I'm currently typing this at home in NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span></p>
          { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
        <div className="section-footer">======= END =======</div>
      </div>
    </div>
  );
};

export default About;
