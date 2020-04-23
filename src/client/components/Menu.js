import React from 'react';
import { MenuButton } from './index';
import { css } from '@emotion/core';
import { delayedDisplayAnimationInMs } from '../styles';

const Menu = ({ handleSwitch, menuItems, activeSection, baseDelayMs, startMs }) => {

  return (
    <nav className="menu" css={menuStyle}>
      <ul className="menu-items" css={menuItemsStyle}> {
        menuItems.map((item,index) => (
          <li css={delayedDisplayAnimationInMs(index, baseDelayMs, startMs)} key={item}>
            <MenuButton
              isActive={activeSection === item}
              handleClick={handleSwitch}
              menuItem={item}
              index={index}
            />
          </li>
        ))
      }
      </ul>
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
