import React, { useState, useEffect, Fragment } from 'react';

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
      <div className="section-header">====== RESUME ======</div>
      <ul className="list" id="resume-experience-content">
        {
          workExperience?.length ? workExperience.map((work, index) => {
            const { title, company, location, date, responsibilities } = work;
            return (
              <li className="expanding-item" key={`${company}`} style={{ animationDelay: `${index*180}ms`}}>
                <h3 className="item-title">> { title.toUpperCase() }</h3>
                <h4 className="item-sub-title">{ company }</h4>
                <div className="info-section">
                  <h6 className="item-text">{ location }</h6>
                  <h6 className="item-text">{ date }</h6>
                </div>
                { responsibilities?.map((description,i) =>
                  <p key={`${company}-desc-${i}`} className="item-text" >• {description}</p>)
                }
            </li>
            );
          }) : ''
        }
      </ul>
      <ul className="list" id="resume-education-content">
        {
          education?.length ? education.map((ed,index) => {
            const { title, school, location, date, curriculum } = ed;
            return (
              <li className="expanding-item" key={school} style={{ animationDelay: `${(index+workExperience.length)*180}ms`}}>
                <h3 className="item-title">> {title.toUpperCase()}</h3>
                <h4 className="item-sub-title">{school}</h4>
                <div className="info-section">
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
      <div className="section-footer">======= END ========</div>
    </Fragment>
  );
};

export default ResumeSection;
