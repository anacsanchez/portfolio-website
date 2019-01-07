import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('assets/ana_portfolio.jpg')`}}></div>
        <div id="about-bio">I'm a software developer currently enjoying life in NYC. My interest in computing began when I was a kid; my father picked up from desktop computers from curbsides which we disassembled and I would swap the best parts for my computer. I found my passion for coding when creating support article content as a tech support rep. In order to optimize articles, I decided to dive right into the source code and learn HTML and CSS, and then I was hooked.
      </div>
        {/* <div id="about-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum libero sit amet arcu imperdiet, eu elementum mauris aliquam. Sed rhoncus tellus eu ornare tristique. Sed rhoncus nisl eget luctus scelerisque. Aliquam pharetra tortor in justo sollicitudin lobortis. Praesent elementum magna et lorem pharetra accumsan. Quisque nec facilisis risus. Etiam pulvinar risus molestie consectetur maximus. Donec aliquet quam vel porta sodales. Aenean placerat faucibus orci quis facilisis. Sed consectetur massa eget augue dictum, eu eleifend odio tempor. Maecenas id diam in lacus condimentum porttitor at eu diam. Praesent malesuada elementum lorem varius auctor. Nulla ultricies mauris non eleifend sagittis. Etiam dictum facilisis odio.
      </div> */}
      </div>
    </div>
  )
}

export default About;
