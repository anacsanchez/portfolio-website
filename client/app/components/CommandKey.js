import React, { Fragment } from 'react';

const CommandKey = ({ keyName, keyOptionStyle, keyRestStyle }) => (
  <Fragment>
    <span className="command-key-option" css={ keyOptionStyle }>
      [ {`${keyName[0].toUpperCase()}`} ]
    </span>
    <span className="command-rest" css={ keyRestStyle }>
      {`${keyName.slice(1).toUpperCase()}`}
    </span>
  </Fragment>
);

export default CommandKey;
