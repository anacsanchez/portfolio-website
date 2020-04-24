import React, { useState, useEffect, Fragment } from 'react';
import { css } from '@emotion/core';
import {
  sectionHeaderAndFooterStyles,
  typingAnimationInMs,
  typingAnimationContentStyles,
  colors
} from '../styles';

const ResumeSection = () => {

  const typingAnimationDuration = 200;

  const [ resume, setResume ] = useState({});

  useEffect (() => {
    const fetchResume = async() => {
      try {
        const data = await fetch('/api/resume');
        const resumeData = await data.json();
        setResume(resumeData);
      }
      catch(err) {
        console.error(err);
      }
    };
    fetchResume();
  }, []);

  const { workExperience, education } = resume;

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ====== RESUME ======
      </div>
      <a href="/Ana_Sanchez-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        id="resume-url"
        css={downloadLinkStyles}
      >
        [ DOWNLOAD ]
      </a>
      <ul className="list" id="resume-experience">
        {
          workExperience?.length ? workExperience.map((work, index) => {
            const { title, company, location, date, responsibilities } = work;
            return (
              <li css={[
                  typingAnimationInMs(index, typingAnimationDuration),
                  listItemStyles
                ]}
                key={`${company}`}
              >
                <h3 css={titleStyles}>> { title.toUpperCase() }</h3>
                <h4 css={orgNameStyles}>{ company }</h4>
                <div css={infoSectionStyles}>
                  <h6 css={infoTextStyles}>{ location }</h6>
                  <h6 css={infoTextStyles}>{ date }</h6>
                </div>
                { responsibilities?.map((description,i) =>
                  <p css={listBodyStyles} key={`${company}-desc-${i}`} >• {description}</p>)
                }
            </li>
            );
          }) : ''
        }
      </ul>
      <ul className="list" id="resume-education">
        {
          education?.length ? education.map((ed,index) => {
            const { title, school, location, date, curriculum } = ed;
            return (
              <li
                css={[
                  typingAnimationInMs(index+workExperience.length, typingAnimationDuration),
                  listItemStyles
                ]}
                key={school}
              >
                <h3 css={titleStyles}>> {title.toUpperCase()}</h3>
                <h4 css={orgNameStyles}>{school}</h4>
                <div css={infoSectionStyles}>
                  <h6 css={infoTextStyles}>{ location }</h6>
                  <h6 css={infoTextStyles}>{ date }</h6>
                </div>
                { curriculum?.map((description, i) => (
                    <p css={listBodyStyles} key={`${school}-desc-${i}`}>• {description}</p>
                  ))
                }
              </li>
            );
          }) : ''
        }
      </ul>
      <div className="section-footer"
        css={[
          sectionHeaderAndFooterStyles,
          typingAnimationInMs(workExperience?.length + education?.length, typingAnimationDuration)
        ]}
      >
        ======= END ========
      </div>
    </Fragment>
  );
};

const listItemStyles = css({
  paddingBottom: '18px',
  paddingTop: '10px',
  '& *': typingAnimationContentStyles,
});

const listBodyStyles = css({
  padding: '12px 0',
  color: colors.white,
  letterSpacing: '1px',
  wordSpacing: '3px',
  fontSize: '28px'
});

const downloadLinkStyles = css({
  margin: '8px 0',
  color: colors.green,
  padding: '0 2px',
  fontSize: '32px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: colors.neonGreen,
    color: colors.black
  },
  ':focus': {
    backgroundColor: colors.neonGreen,
    color: colors.black
  }
});

const titleStyles = css({
  padding: '6px 0 10px 0',
  color: colors.brightYellow,
  wordSpacing: '3px',
  fontSize: '30px',
  letterSpacing: '1px'
});

const orgNameStyles = css({
  padding: '2px 0',
  color: colors.teal,
  wordSpacing: '3px',
  fontSize: '28px',
  letterSpacing: '1px'
});

const infoSectionStyles = css({
  padding: '8px 0'
});

const infoTextStyles = css({
  wordSpacing: '3px',
  letterSpacing: '1px',
  color: colors.white,
  lineHeight: '90%',
  fontSize: '28px'
});

export default ResumeSection;

