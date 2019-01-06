import React from 'react';

const About = () => {
  return (
    <div id="about-section" className="section">
      <div className="section-title">About</div>
      <div id="about-content">
        <div id="about-pic" style={{backgroundImage: `url('person.png')`}}></div>
        <div id="about-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum libero sit amet arcu imperdiet, eu elementum mauris aliquam. Sed rhoncus tellus eu ornare tristique. Sed rhoncus nisl eget luctus scelerisque. Aliquam pharetra tortor in justo sollicitudin lobortis. Praesent elementum magna et lorem pharetra accumsan. Quisque nec facilisis risus. Etiam pulvinar risus molestie consectetur maximus. Donec aliquet quam vel porta sodales. Aenean placerat faucibus orci quis facilisis. Sed consectetur massa eget augue dictum, eu eleifend odio tempor. Maecenas id diam in lacus condimentum porttitor at eu diam. Praesent malesuada elementum lorem varius auctor. Nulla ultricies mauris non eleifend sagittis. Etiam dictum facilisis odio.
      </div>
      </div>
    </div>
  )
}

export default About;
