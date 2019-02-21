import React from 'react';

const About = () => {
  return (
    <div id="about-section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div>
        <div id="about-bio">
          <p>I'm a software developer and lifelong New Yorker currently programming in Manhattan.</p>
          <p>I found my passion for coding while creating support content as a tech support specialist, learning HTML and CSS to go beyond the capabilities of the WYSIWYG editor.</p>
          <p>My goal as a developer is to ensure projects are efficient with a user-friendly interface. I'm motivated to work with and learn from fantastic engineers on technology that improves the way we approach challenges. </p>
          <p>My skills include building full stack applications in Javascript, Node.js, Postgres, React and Redux. I've also completed computer science courses in C++, C# and Java.</p>
      </div>
      </div>
    </div>
  )
}

export default About;
