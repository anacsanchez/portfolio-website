import React from 'react';

const Menu = ({ handleClick, menuItems }) => {
  return (
    <nav className="menu">
      <ul className="menu-items">
      {
        menuItems.map((item,index) => (
          <li className="menu-item" key={item} style={{ animationDelay: `${(index+2.4)*250}ms`}} >
            <button className="command" tabIndex={index+1} onClick={ () => handleClick(item) }>
              <span className="command-key">[ {`${item[0].toUpperCase()}`} ] </span>
              <span className="command-rest">{`${item.slice(1).toUpperCase()}`}</span>
            </button>
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default Menu;
