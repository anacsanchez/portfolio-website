import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div>
        <div id="about-bio">
          <p>I'm a software developer and lifelong New Yorker currently loving Manhattan.</p>
          <p>My interest in computers began when I was a kid; my Dad would pick up computers that were left for recycling and bring them home for me to dissasemble and find the best parts for my PC.</p>
          <p>I found my passion for software development working in tech support, creating articles for the company support website. I decided to dive right into the source code and learn HTML and CSS, and then I was hooked. This led to my decision to attend the Grace Hopper program at Fullstack Academy for full stack web development.</p>
          <p>Aside from coding, I enjoy playing my violin and guitar, optimizing electronics, fantastic tea, and intermittent bouts of gaming and yoga.</p>
      </div>

      </div>
    </div>
  )
}

export default About;
