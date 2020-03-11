import React from 'react';

const Links = ({ tabIndexStart }) => {
  return(
    <div className="links-section">
      <div className="links-header" style={{ animationDelay: `${6*250}ms`}}>Find me on:</div>
      <a tabIndex={tabIndexStart} className="link" style={{ animationDelay: `${7*250}ms`}}>
        <span className="link-command-key">[ G ] </span><span className="link-command-rest">ITHUB</span>
      </a>
      <a tabIndex={tabIndexStart+1} className="link" style={{ animationDelay: `${8*250}ms`}}>
        <span className="link-command-key">[ L ] </span><span className="link-command-rest">INKEDIN</span>
      </a>
    </div>
  );
};

export default Links;
