import React, { useState } from 'react';
import { Person, Loupe, Arrow, Burger } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';
import { Menu } from './menu';

import LogoGrey from './../../assets/logo_grey.svg';

import style from './styles.module.scss';

export const Header = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  if (logo) {
    return (
      <header className={ style.header }>
        <div className={ style.headerLogo }>
          <img src={ LogoGrey } alt="TipCat" className={ style.headerLogo } />
        </div>
      </header>
    );
  }

  return (
    <header className={ style.header }>
      <div className={ style.headerContainer }>
        <Button transparent><Arrow /></Button>
        <Button transparent onClick={ onMenuToggle }><Burger /></Button>
        <h1 className={ style.headerTitle }>Members</h1>
        <Button transparent><Loupe /></Button>
        <Button transparent ><Person /></Button>
      </div>
      <Menu open={ menuOpen } onClose={ onMenuToggle } />
    </header>
  );
};

export default Header;