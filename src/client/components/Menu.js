import React from 'react';
import { MenuButton } from './index';
import { css } from '@emotion/core';
import { delayedItemAnimationInMs } from '../styles';

const Menu = ({ handleSwitch, menuItems }) => {
  return (
    <nav className="menu" css={menuStyle}>
      <ul className="menu-items" css={menuItemsStyle}>
      {
        menuItems.map((item,index) => (
          <li css={delayedItemAnimationInMs(index+4, 250)} key={item}>
            <MenuButton handleClick={handleSwitch} menuItem={item} index={index} />
          </li>
        ))
      }
      {/* <li css={delayedItemAnimationInMs(0, 250)}>Press [KEY] or [TAB] to navigate.</li> */}
      </ul>
      {/* <p css={{ color: 'white' }}>Press [KEY] or [TAB] to navigate.</p> */}
    </nav>
  );
};

const menuStyle = css({
  paddingTop: '28px'
});

const menuItemsStyle = css({
  display: 'flex',
  flexDirection: 'column'
});

export default Menu;
