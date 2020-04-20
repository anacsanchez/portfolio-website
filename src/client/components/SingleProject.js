import React from 'react';
import { css } from '@emotion/core';
import { colors, expandingItemAnimationInMs, expandingTextStyles } from '../styles';

const SingleProject = ({ name, image, url, description, tools, github, index }) => {

  return (
    <li css={[expandingItemAnimationInMs(index, 180), singleProjectStyles]}>
      <h3 className="item-title">
        > { name.toUpperCase() }
      </h3>
      <p className="item-text">
        {description}
      </p>
      <p className="emphasized-text">
        Built with: { tools }
      </p>
      <a className="project-url"
        css={projectLinkStyles}
        href={url}
        target='_blank'
        rel="noopener noreferrer"
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

  '& .item-title': {
    fontSize: '28px',
    padding: '2px 0 8px 0',
    color: colors.brightYellow,
  },
  '& .item-text': {
    letterSpacing: '1px',
    color: colors.white,
    fontSize: '26px',
    lineHeight: '95%'
  },
  '& .emphasized-text': {
    padding: '10px 0',
    color: colors.teal,
    lineHeight: '95%'
  }
},{ '& .item-title, .item-text, .emphasized-text': expandingTextStyles});

const projectLinkStyles = css({
  margin: '8px 0',
  color: colors.neonGreen,
  padding: '0 2px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: colors.neonGreen,
    color: colors.black
  }
});

export default SingleProject;

