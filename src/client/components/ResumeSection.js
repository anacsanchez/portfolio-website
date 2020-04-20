import React, { useState, useEffect, Fragment } from 'react';
import {
  sectionHeaderAndFooterStyles,
  itemStyles,
  expandingItemAnimationInMs,
  expandingTextStyles,
  colors
} from '../styles';
import { css } from '@emotion/core';

const ResumeSection = () => {
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
        css={resumeLinkStyles}
      >
        [ DOWNLOAD ]
      </a>
      <ul className="list" id="resume-experience">
        {
          workExperience?.length ? workExperience.map((work, index) => {
            const { title, company, location, date, responsibilities } = work;
            return (
              <li css={[
                  expandingItemAnimationInMs(index, 180),
                  listItemStyles
                ]}
                key={`${company}`}
              >
                <h3 className="item-title">> { title.toUpperCase() }</h3>
                <h4 className="item-sub-title">{ company }</h4>
                <div className="item-text-section">
                  <h6 className="item-text">{ location }</h6>
                  <h6 className="item-text">{ date }</h6>
                </div>
                { responsibilities?.map((description,i) =>
                  <p className="item-text" css={listBodyStyles} key={`${company}-desc-${i}`} >• {description}</p>)
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
                  expandingItemAnimationInMs(index+workExperience.length, 180),
                  listItemStyles
                ]}
                key={school}
              >
                <h3 className="item-title">> {title.toUpperCase()}</h3>
                <h4 className="item-sub-title">{school}</h4>
                <div className="item-text-section">
                  <h6 className="item-text">{ location }</h6>
                  <h6 className="item-text">{ date }</h6>
                </div>
                { curriculum?.map((description, i) => (
                    <p key={`${school}-desc-${i}`} className="item-text">• {description}</p>
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
          expandingItemAnimationInMs(workExperience?.length + education?.length, 180)
        ]}
      >
        ======= END ========
      </div>
    </Fragment>
  );
};

const listItemStyles = css(itemStyles, {
  paddingBottom: '18px',
  paddingTop: '10px',
  '& p, .emphasized-text, .item-text, .item-title': expandingTextStyles
});

const listBodyStyles = css({
  padding: '4px 0'
});

const resumeLinkStyles = css({
  margin: '8px 0',
  color: colors.green,
  padding: '0 2px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: colors.neonGreen,
    color: colors.black
  }
});

export default ResumeSection;

