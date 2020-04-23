import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors,
  sectionHeaderAndFooterStyles,
  typingAnimationInMs,
  typingAnimationContentStyles
} from '../styles';

const AboutSection = () => {

  const animationDurationMs = 200;

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ======  ABOUT  ======
      </div>
      <div id="about-bio" css={ aboutTextStyles }>
        {
          aboutSectionContent.map((paragraph, index) =>
            <li key={`paragraph-${index}`} css={ typingAnimationInMs(index * 3,animationDurationMs) }>
              <p>{paragraph}</p>
            </li>
          )
        }
      </div>
      <div className="section-footer" css={[ sectionHeaderAndFooterStyles, typingAnimationInMs(aboutSectionContent.length * 3,animationDurationMs) ]}>
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
    fontSize: '32px',
    lineHeight: '90%'
  }
},
{ '& p': typingAnimationContentStyles }
);

const aboutSectionContent = [
  "I'm a software engineer with an excitement for new tech challenges and building projects that leave lasting impressions.",
  "I've always loved experimenting with technology, from swapping parts in scrap computers as a kid to trying emulators on every single mobile device I owned.",
  "I began to learn programming as a Tech Support Specialist, using HTML and CSS to implement more intuitive support articles than the built-in format. That experience empowered me to express my ideas through coding and branch out as a developer.",
  "I'm currently living in downtown NYC with two awesome rescue dogs."
];

export default AboutSection;
