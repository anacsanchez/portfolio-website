import React from 'react';
import { css } from '@emotion/core';
import { colors, typingAnimationInMs, typingAnimationContentStyles } from '../styles';

const SingleProject = ({ name, url, description, tools, github, index, animationDuration }) => {

  return (
    <li css={[singleProjectStyles, typingAnimationInMs(index, animationDuration)]}>
      <h3 css={[projectTitleStyles, typingAnimationContentStyles]}>
        > { name.toUpperCase() }
      </h3>
      <p css={[projectTextStyles, typingAnimationContentStyles]}>
        { description }
      </p>
      <p css={[projectTextStyles, typingAnimationContentStyles]}>
        Built with: { tools }
      </p>
      <a className="project-url"
        css={projectLinkStyles}
        href={url}
        target='_blank'
        rel="noopener noreferrer"
        tabIndex={0}
      >
         [ VISIT ]
      </a>
    </li>
  );

};

//Emotion CSS
const singleProjectStyles = css({
  wordSpacing: '3px',
  paddingBottom: '12px',
  paddingTop: '10px',
});

const projectLinkStyles = css({
  margin: '8px 0',
  color: colors.neonGreen,
  padding: '0 2px',
  ':hover, :focus': {
    cursor: 'pointer',
    backgroundColor: colors.neonGreen,
    color: colors.black
  }
});

const projectTitleStyles = css({
  fontSize: '28px',
  padding: '2px 0 8px 0',
  color: colors.brightYellow,
});

const projectTextStyles = css({
  letterSpacing: '1px',
  color: colors.white,
  fontSize: '26px',
  lineHeight: '95%'
});

export default SingleProject;

