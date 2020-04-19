import React from 'react';
import { MenuButton } from './index';
import { css } from '@emotion/core';
import { delayedItemAnimationInMs } from '../styles';

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
          <li css={delayedItemAnimationInMs(index+3, 250)} key={item}>
            <MenuButton handleClick={handleSwitch} menuItem={item} index={index} />
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default Menu;
