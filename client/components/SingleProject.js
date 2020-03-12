import React, { useState } from 'react';
import { jsx } from '@emotion/core';

const ACTIVE = 'initial';
const INACTIVE = 'none';

const SingleProject = ({ name, image, url, description, tools, github, index }) => {
  const [ isActive, setStatus ] = useState(INACTIVE);

  return (
    <li css={{ backgroundColor: 'green'}} className="expanding-item" style={{ animationDelay: `${index*180}ms`}}>
      <h3 className="item-title">> { name.toUpperCase() }</h3>
      <p className="item-text">{description}</p>
      <p className="emphasized-text">Built with: { tools }</p>
      <a className="project-url">[ VISIT ]</a>
    </li>
  );

};

export default SingleProject;

