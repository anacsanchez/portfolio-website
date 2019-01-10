import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="section dark2-color-bg">
      <div className="section-title">About</div>
      <div id="about-content">
        {/* <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div> */}
        <div id="about-bio">
          <p>I'm a software developer and lifelong New Yorker currently loving Manhattan.</p>
          <p>My interest in computers began when I was a kid; my Dad would pick up computers that were left for recycling and bring them home for me to dissasemble and find the best parts for my PC.</p>
          <p>I found my passion for software development while working in tech support, creating articles for the company support website. I decided to dive right into the source code and learn HTML and CSS; then I was hooked. After taking some programming classes and developing a new version of the support website, I knew I wanted to make the leap into full stack software development as a career and attended the Grace Hopper program at Fullstack Academy.</p>
          <p>Aside from coding, I enjoy playing my violin and guitar, optimizing electronics, fantastic tea, and intermittent bouts of gaming and yoga.</p>
      </div>
      </div>
    </div>
  )
}

export default About;
