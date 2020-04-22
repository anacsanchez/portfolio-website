import React from 'react';
import { CommandKey } from './index';
import { css } from '@emotion/core';
import { colors } from '../styles';

const MenuButton = ({ handleClick, index, menuItem, isActive }) => {
  return (
    <button
      className="menu-button"
      css={[
        menuButtonStyle,
        !isActive && menuButtonHover,
        isActive && menuButtonActive
      ]}
      tabIndex={0}
      onClick={ () => handleClick(menuItem) }
      type="button"
    >
      <CommandKey
        keyName={menuItem}
        keyOptionStyle={menuKeyOptionStyle}
        keyRestStyle={menuKeyRestStyle}
      />
    </button>
  );
};

const menuButtonStyle = css({
  textShadow: `${colors.whiteShadow} 1px 0 10px`,
  background: `repeating-linear-gradient(
    hsl(0, 0%, 10%,40%),
    hsl(0, 0%, 10%,40%) 20px,
    hsl(220, 10%, 80%, 10%) 20px,
    hsl(220, 10%, 80%, 10%) 22px)`,
  fontSize: "30px",
  width: "max-content",
  border: "none",
  fontFamily: "JD Nadia Regular",
  color: colors.white,
  cursor: "pointer"
});

const menuButtonHover = css({
  '&:hover, :focus': {
    color: colors.brightYellow,
    textShadow: `${colors.brightYellowShadow} 1px 0 10px`
  }
});

const menuButtonActive = css({
  color: colors.lightTeal
});

const menuKeyOptionStyle = css({
  fontSize: "30px"
});

const menuKeyRestStyle = css({
  fontSize: "28px",
  letterSpacing: "4px",
  paddingLeft: "2px"
});

export default MenuButton;
