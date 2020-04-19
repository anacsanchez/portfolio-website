import React, { useState } from 'react';
import { expandingItemAnimation } from '../styles';

const ACTIVE = 'initial';
const INACTIVE = 'none';

const SingleProject = ({ name, image, url, description, tools, github, index }) => {
  const [ isActive, setStatus ] = useState(INACTIVE);

  return (
    <li css={expandingItemAnimation(index, 180)} className="expanding-item">
      <h3 className="item-title">> { name.toUpperCase() }</h3>
      <p className="item-text">{description}</p>
      <p className="emphasized-text">Built with: { tools }</p>
      <a className="project-url">[ VISIT ]</a>
    </li>
  );

};

export default SingleProject;

