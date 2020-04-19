import React, { useState, Fragment } from 'react';
import ImageModal from './ImageModal';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles, expandingItemAnimationInMs, expandingTextStyles } from '../styles';

const AboutSection = () => {
  const [ showModal, setShowModal ] = useState(false);

  const aboutTextStyles = css({
      '& p': {
        padding: '8px 0',
        wordSpacing: '3px',
        letterSpacing: '1px',
        color: colors.white,
        fontSize: '26px'
      }
    },
    { '& p': expandingTextStyles }
  );

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ======  ABOUT  ======
      </div>
      <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
      <div id="about-bio" css={[
          expandingItemAnimationInMs(0,0),
          aboutTextStyles
        ]}>
        <p className="item-text">
          I'm a software engineer with an excitement for new tech challenges and building projects that leave lasting impressions.
        </p>
        <p className="item-text">
          I've always loved gaming and tinkering with hardware, but found my passion for programming when I edited support articles as a Tech Support Specialist with the built-in knowledgebase content manager. Learning HTML and CSS empowered me to push beyond what was available to me as a user.</p>
        <p className="item-text">
          My professional skills include developing full stack applications in Javascript, Node.js, React, Redux, Postgres and SQL.
        </p>
        <p className="item-text">
          I'm currently typing this at home in NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span>
        </p>
        { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
      </div>
      <div className="section-footer" css={sectionHeaderAndFooterStyles}>
        ======= END =======
      </div>
    </Fragment>
  );
};

export default AboutSection;
