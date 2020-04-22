import React, { useState, Fragment } from 'react';
import ImageModal from './ImageModal';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles, expandingItemAnimationInMs, expandingTextStyles } from '../styles';

const AboutSection = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ======  ABOUT  ======
      </div>
      <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
      <div id="about-bio" css={ aboutTextStyles }>
        <li css={expandingItemAnimationInMs(0,animationDurationMs)}>
          <p>
            I'm a software engineer with an excitement for new tech challenges and building projects that leave lasting impressions.
          </p>
        </li>
        <li css={expandingItemAnimationInMs(3,animationDurationMs)}>
          <p>
            I've always loved experimenting with technology, from swapping parts in scrap computers as a kid to trying emulators on every single mobile device I owned.
          </p>
        </li>
        <li css={expandingItemAnimationInMs(6,animationDurationMs)}>
          <p>
            I began to learn programming as a Tech Support Specialist, using HTML and CSS to implement more intuitive support articles than the built-in format. That experience empowered me to express my ideas through coding and branch out as a developer.
          </p>
        </li>
        <li css={expandingItemAnimationInMs(9,animationDurationMs)}>
          <p>
            I'm currently living in downtown NYC with <span id="dog-modal-link" onClick={() => setShowModal(!showModal)}>two awesome rescue dogs.</span>
          </p>
        </li>
        { showModal && <ImageModal assetName='tictac_rocket.jpeg' handleClick={() => setShowModal(!showModal)}/>}
      </div>
      <div className="section-footer" css={[sectionHeaderAndFooterStyles, expandingItemAnimationInMs(12,animationDurationMs)]}>
        ======= END =======
      </div>
    </Fragment>
  );
};

const aboutTextStyles = css({
  '& p': {
    padding: '8px 0',
    wordSpacing: '3px',
    letterSpacing: '1px',
    color: colors.white,
    fontSize: '26px',
    lineHeight: '90%'
  }
},
{ '& p': expandingTextStyles }
);

const animationDurationMs = 60;

export default AboutSection;
