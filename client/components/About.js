import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('person.png')`}}></div>
        {/* <div id="about=bio">I'm a software developer currently enjoying life in NYC (yes, even the subway). My interest in computing began when I was a kid; my father picked up from desktop computers from curbsides which we disassembled and I would swap the best parts for my computer. However, I only found my passion for coding professionally at my first 'career' job as a tech support representative. At that company I was able to go far beyond my official responsibilities, one of which being content creation for their support website. In order to optimize articles, I decided to dive right into the source code and learn HTML and CSS, at which point I was hooked. I enrolled in a local community college part-time for their computer science curriculum, and after taking a web programming class I approached my CTO about revamping the support website. I developed the front-end from scratch with a focus on easy navigation and launched the official website three months later. The project involved many late night coding sessions but the thrill I got from that convinced me I wanted to code full-time. After some preparation, I decided to make the leap to move NYC and attend the Grace Hopper program at Fullstack Academy. The program taught me so many things aside from fullstack development; the experie</div> */}
        <div id="about-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum libero sit amet arcu imperdiet, eu elementum mauris aliquam. Sed rhoncus tellus eu ornare tristique. Sed rhoncus nisl eget luctus scelerisque. Aliquam pharetra tortor in justo sollicitudin lobortis. Praesent elementum magna et lorem pharetra accumsan. Quisque nec facilisis risus. Etiam pulvinar risus molestie consectetur maximus. Donec aliquet quam vel porta sodales. Aenean placerat faucibus orci quis facilisis. Sed consectetur massa eget augue dictum, eu eleifend odio tempor. Maecenas id diam in lacus condimentum porttitor at eu diam. Praesent malesuada elementum lorem varius auctor. Nulla ultricies mauris non eleifend sagittis. Etiam dictum facilisis odio.
      </div>
      </div>
    </div>
  )
}

export default About;
