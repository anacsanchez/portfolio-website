import React, { useState } from 'react';

const ACTIVE = 'initial';
const INACTIVE = 'none';

const SingleProject = ({ name, image, url, description, tools, github, index }) => {
  const [ isActive, setStatus ] = useState(INACTIVE);

  return (
    <li style={{ animationDelay: `${index*180}ms`}}>
      <h2>> { name.toUpperCase() }</h2>
      <p>{description}</p>
      <p className="emphasize">Built with: { tools }</p>
      <a className="project-url">[ VISIT ]</a>
    </li>
  );

};

export default SingleProject;

