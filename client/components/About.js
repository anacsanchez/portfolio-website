import React from 'react';

const About = () => {
  return (
    <div id="about-section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div>
        <div id="about-bio">
          <p>I'm a software developer and lifelong New Yorker currently loving Manhattan.</p>
          <p>I found my passion for coding while working in tech support, researching HTML and CSS to create custom content for a company support website.</p>
          <p>I'm dedicated and enthusiastic to learn and explore new technologies that make life simpler. I believe in universal access to tech, regardless of background or experience.</p>
          <p>My skills include building full stack applications in Javascript, Node.js, Postgres, React and Redux. I've completed computer science courses in C++, C# and Java.</p>
      </div>
      </div>
    </div>
  )
}

export default About;
