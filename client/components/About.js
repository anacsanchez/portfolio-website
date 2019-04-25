import React from 'react';

const About = () => {
  return (
    <div id="about-section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div>
        <div id="about-bio">
          <p>I'm a software engineer and lifelong New Yorker currently living in Manhattan.</p>
          <p>I found my passion for programming when I volunteered to manage web support content as a tech support specialist, learning HTML and CSS to implement more intuitive knowledgebase articles.</p>
          <p>My goal as an engineer is to explore new ways to use technology to serve underprivileged communities and allow everyone to have the same opportunities as those within the tech industry.</p>
          <p>I'm a self-driven and enthusiastic developer who is eager to learn and go beyond job responsibilities to ensure a project is completed.</p>
          <p>My skills include building full stack applications in Javascript, Node.js, Postgres, React and Redux. I've completed computer science courses in C++, C# and Java.</p>
      </div>
      </div>
    </div>
  )
}

export default About;
