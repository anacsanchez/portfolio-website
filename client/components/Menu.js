import React from 'react';

const Menu = ({ handleClick, menuItems }) => {
  return (
    <div className="menu">
      {
        menuItems.map(item => (
          <div className="menu-item" key={item}>
            <span className="command-key" onClick={ () => handleClick(item) }>[ {`${item[0].toUpperCase()}`} ] </span>
            <span className="command-rest" onClick={ () => handleClick(item) }>{`${item.slice(1).toUpperCase()}`}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Menu;
