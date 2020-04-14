import React from 'react';
import { MenuButton, DelayedListItem } from './index';
import { css } from '@emotion/core';

const Menu = ({ handleSwitch, menuItems }) => {

  const menuStyle = css({
    paddingTop: '28px'
  });

  const menuItemsStyle = css({
    display: 'flex',
    flexDirection: 'column'
  });

  return (
    <nav className="menu" css={menuStyle}>
      <ul className="menu-items" css={menuItemsStyle}>
      {
        menuItems.map((item,index) => (
          <DelayedListItem delay={`${(index+3.1)*250}ms`} key={item}>
            <MenuButton handleClick={handleSwitch} menuItem={item} index={index} />
          </DelayedListItem>
        ))
      }
      </ul>
    </nav>
  );
};

export default Menu;
