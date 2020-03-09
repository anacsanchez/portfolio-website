import React from 'react';

const Menu = ({ handleClick, menuItems }) => {
  return (
    <nav className="menu">
      <ul className="menu-items">
      {
        menuItems.map((item,index) => (
          <div className="menu-item" key={item} style={{ animationDelay: `${(index+2.4)*250}ms`}}>
            <span className="command">
              <span className="command-key" onClick={ () => handleClick(item) }>[ {`${item[0].toUpperCase()}`} ] </span>
              <span className="command-rest" onClick={ () => handleClick(item) }>{`${item.slice(1).toUpperCase()}`}</span>
            </span>
          </div>
        ))
      }
      </ul>
    </nav>
  );
};

export default Menu;
