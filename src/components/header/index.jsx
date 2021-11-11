import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Person, QrCode, Arrow, Burger, Logo } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';
import { Menu } from './menu';

import { selectMember } from '../../ducks/member/selectors';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.scss';

export const Header = ({ logo, title, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const member = useSelector(selectMember);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  if (logo) {
    return (
      <header className={ cn(style.header, className) }>
        <div className={ style.headerLogo }>
          <Logo className={ cn(style.headerLogoIcon, style.headerLogoIconBig) } />
        </div>
      </header>
    );
  }

  return (
    <header className={ cn(style.header, className) }>
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
        <Link 
          to={ ROUTES.MEMBER_PROFILE_QRCODE.getPath({ memberId: member.id }) }
          className={ style.headerBtn }
        >
          <QrCode className={ style.headerBtnQrCodeIcon } />
        </Link>
        <Link
          to={ ROUTES.MEMBER_PROFILE.getPath({ memberId: member.id }) }
          className={ style.headerBtn }
        >
          <Person className={ style.headerBtnIcon } />
        </Link>
      </div>
      <Menu open={ menuOpen } onClose={ onMenuToggle } />
    </header>
  );
};

export default Header;
