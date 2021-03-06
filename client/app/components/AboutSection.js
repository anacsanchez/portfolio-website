import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors,
  sectionHeaderAndFooterStyles,
  typingAnimationInMs,
  typingAnimationContentStyles
} from '../styles';

const AboutSection = () => {

  const animationDurationMs = 900;
  const animationDelay = 850;

  const aboutHeader = '======  ABOUT  ======';
  const aboutFooter = '======= END =======';

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        {aboutHeader}
      </div>
      <div id="about-bio">
        {
          aboutSectionContent.map((paragraph, index) =>
            <li key={`paragraph-${index}`}
              css={ typingAnimationInMs(index, animationDelay, 100, animationDurationMs) }
            >
              <p css={[
                  aboutTextStyles,
                  typingAnimationContentStyles
                ]}
              >
                {paragraph}
              </p>
            </li>
          )
        }
      </div>
      <div className="section-footer"
        css={[
          sectionHeaderAndFooterStyles,
          typingAnimationInMs(aboutSectionContent.length, animationDelay, 100, animationDurationMs)
        ]}
      >
        {aboutFooter}
      </div>
    </Fragment>
  );
};

const aboutTextStyles = css({
  padding: '16px 0',
  wordSpacing: '4px',
  letterSpacing: '1px',
  color: colors.white,
  fontSize: '28px',
  lineHeight: '85%'
});

const aboutSectionContent = [
  "I'm a software engineer with an excitement for new tech challenges and building projects that leave lasting impressions.",
  "I've always loved experimenting with technology, from swapping parts in scrap computers as a kid to trying emulators on every mobile device I owned.",
  "I began to learn programming as a Tech Support Specialist, using HTML and CSS to implement more intuitive support articles than the built-in format. That experience empowered me to express my ideas through coding and branch out as a developer.",
  "I'm currently living in downtown NYC with two awesome rescue dogs."
];

export default AboutSection;
