import React from 'react';

const About = () => {
  return (
    <div id="about-section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{ backgroundImage: `url('assets/ana_portfolio.jpg')` }}></div>
        <div id="about-bio">
          <p>I'm a software engineer and lifelong techie currently living in Manhattan.</p>
          <p>I've always loved gaming and tinkering with hardware, but found my passion for programming when I managed web support content as a Tech Support Specialist. Learning HTML and CSS was key to implementing more intuitive knowledgebase articles, and then I wanted to keep learning.</p>
          <p>I'm a self-driven and enthusiastic developer eager to explore new technologies and make user-friendly applications.</p>
          <p>My professional skills include Javascript, Node.js, Postgres, SQL, React, and Redux. I've completed computer science courses in C++, C# and Java.</p>
      </div>
      </div>
    </div>
  );
};

export default About;
