import React from 'react';

const Links = () => {
  return(
    <div className="links-section">
      <div className="links-header" style={{ animationDelay: `${6*250}ms`}}>Find me on:</div>
      <div className="link" style={{ animationDelay: `${7*250}ms`}}>
        <span className="link-command-key">[ G ] </span><span className="link-command-rest">ITHUB</span>
      </div>
      <div className="link" style={{ animationDelay: `${8*250}ms`}}>
        <span className="link-command-key">[ L ] </span><span className="link-command-rest">INKEDIN</span>
      </div>
    </div>
  );
};

export default Links;
