import React, { useState } from 'react';
import cn from 'classnames';

import { Person, Loupe, Arrow, Burger, Logo } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';
import { Menu } from './menu';

import style from './styles.module.scss';

export const Header = ({ logo, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  if (logo) {
    return (
      <header className={ style.header }>
        <div className={ style.headerLogo }>
          <Logo className={ cn(style.headerLogoIcon, style.headerLogoIconBig) } />
        </div>
      </header>
    );
  }

  return (
    <header className={ style.header }>
      <div className={ style.headerContainer }>
        <Button clear className={ style.headerBtn }><Arrow className={ style.headerBtnIcon } /></Button>
        <Button clear className={ style.headerBtn } onClick={ onMenuToggle }><Burger className={ style.headerBtnIcon } /></Button>
        {
          title ? <h1 className={ style.headerTitle }>{ title }</h1>
          :
            <div className={ style.headerLogo }>
              <Logo className={ style.headerLogoIcon } />
            </div>
        }
        <Button clear className={ style.headerBtn }><Loupe className={ style.headerBtnIcon } /></Button>
        <Button clear className={ style.headerBtn }><Person className={ style.headerBtnIcon } /></Button>
      </div>
      <Menu open={ menuOpen } onClose={ onMenuToggle } />
    </header>
  );
};

export default Header;
