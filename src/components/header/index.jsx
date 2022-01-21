import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import cn from 'classnames';

import { QrCode, ChevronBigLeft, Hamburger, Logo, Home } from '../../components/ui/Icons/';
import { Button } from '../../components/ui/Button';
import { Menu } from './menu';

import { selectMember } from '../../ducks/member/selectors';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.scss';

export const Header = ({ logo, title, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const member = useSelector(selectMember);

  const history = useHistory();

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div className={ style.headerContainerLeft }>
          { member && (
            <Button
              clear={ true }
              className={ style.headerBtn }
              onClick={ history.goBack }
              icon={ <ChevronBigLeft className={ style.headerBtnIcon } /> }
            ></Button>
          ) }
          <Button
            clear={ true }
            className={ cn(style.headerBtn, style.headerBtnBurger) }
            onClick={ onMenuToggle }
            icon={ <Hamburger className={ style.headerBtnIcon } /> }
          ></Button>
        </div>
        <div className={ style.headerContainerCenter }>
          {
            title ?
              <h1
                className={ style.headerTitle }
              >{ title }</h1>
              : (
                <div className={ style.headerLogo }>
                  <Logo className={ style.headerLogoIcon } />
                </div>
              )
          }
        </div>
        <div className={ style.headerContainerRight }>
          {
            member && history.location.pathname === ROUTES.HOME.path ?
              <Button
                to={ ROUTES.MEMBER_PROFILE_QRCODE.getPath({ memberId: member.id }) }
                clear={ true }
                className={ style.headerBtn }
                icon={ <QrCode className={ style.headerBtnQrCodeIcon } /> }
              ></Button>
              : member ?
                <Button
                  to={ ROUTES.HOME }
                  clear={ true }
                  className={ style.headerBtn }
                  icon={ <Home className={ style.headerBtnIcon } /> }
                ></Button>
                : null
          }
        </div>
      </div>
      <Menu open={ menuOpen } history={ history } onClose={ onMenuToggle } />
    </header>
  );
};

export default Header;
