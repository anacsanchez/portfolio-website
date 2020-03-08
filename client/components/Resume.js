import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [ resume, setResume ] = useState({});

  useEffect (() => {
    const fetchResume = async() => {
      const resumeData = await fetch('/api/resume').then(data => data.json());
      setResume(resumeData);
    };
    fetchResume();
  }, []);

  const { workExperience=[], education=[] } = resume;

  return (
    <div className="section">
      <div className="section-header">====== RESUME ======</div>
      <ul className="resume-experience-content">
        {
          workExperience?.length ? workExperience.map((work, index) => {
            const { title, company, location, date, responsibilities } = work;
            return (
              <li key={`${company}`} style={{ animationDelay: `${index*180}ms`}}>
                <h1>> { title.toUpperCase() }</h1>
                <h2>{ company }</h2>
                <div className="info-section">
                  <h4>{ location }</h4>
                  <h4>{ date }</h4>
                </div>
                { responsibilities?.map((description,i) =>
                  <p key={`${company}-desc-${i}`} >• {description}</p>)
                }
            </li>
            );
          }) : ''
        }
      </ul>
      <ul className="resume-education-content">
        {
          education?.length ? education.map((ed,index) => {
            const { title, school, location, date, curriculum } = ed;
            return (
              <li key={school} style={{ animationDelay: `${(index+workExperience.length)*180}ms`}}>
                <h1>> {title.toUpperCase()}</h1>
                <h3>{school}</h3>
                <div className="info-section">
                  <h4>{ location }</h4>
                  <h4>{ date }</h4>
                </div>
                { curriculum?.map((description, i) => (
                    <p key={`${school}-desc-${i}`}>• {description}</p>
                  ))
                }
              </li>
            );
          }) : ''
        }
      </ul>
      <div className="section-footer">======= END ========</div>
    </div>
  );
};

export default Resume;
