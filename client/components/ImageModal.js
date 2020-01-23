import React from 'react';

const ImageModal = ({ assetName, handleClick }) => {
  return (
    <div id="dog-modal" style={{ backgroundImage: `url('assets/${assetName}')` }} onClick={handleClick}>
    </div>
  );
};

export default ImageModal;
