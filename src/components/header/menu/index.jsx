import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Button } from '../../ui/Button';
import { authConfig } from '../../../auth0/auth0-config';
import { ROUTES } from '../../../constants/routes';

import style from './styles.module.scss';

export const Menu = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  return (
    <div className={ cn(style.menuWrapper, open ? style.menuWrapperOpen : null) }>
      <ul className={ style.menu }>
        <li>
          <Link to={ ROUTES.ACCOUNT.path } className={ style.menuLink }>{ t('header.menu.accountProfile') }</Link>
        </li>
        <li>
          <Link to={ ROUTES.ADD_FACILITY.path } className={ style.menuLink }>{ t('header.menu.addFacility') }</Link>
        </li>
        <li>
          <Link to={ ROUTES.ADD_MEMBER.path } className={ style.menuLink }>{ t('header.menu.addMember') }</Link>
        </li>
        <li>
          <Link to={ ROUTES.HOME.path } className={ style.menuLink }>{ t('header.menu.transaction') }</Link>
        </li>
        <li>
          <Link to={ ROUTES.HOME.path } className={ style.menuLink }>{ t('header.menu.financialAnalityc') }</Link>
        </li>
        <li>
          <Link to={ ROUTES.SUPPORT.path } className={ style.menuLink }>{ t('header.menu.support') }</Link>
        </li>
        <li>
          <Button
            clear={ true }
            className={ style.menuLink }
            onClick={ () => logout({ returnTo: authConfig.logoutUri }) }
          >{ t('header.menu.logout') }</Button>
        </li>
      </ul>
      <div className={ style.menuBottom }>
        <Button href={ ROUTES.PRIVACY_POLICY } menu={ true } className={ style.menuBottomLink }>{ t('header.menuBottom.privacyPolicy') }</Button>
        <Button href={ ROUTES.TERMS_CONDITIONS } menu={ true } className={ style.menuBottomLink }>{ t('header.menuBottom.termsConditions') }</Button>
        <Button href={ ROUTES.ABOUT_TIPCAT } menu={ true } className={ style.menuBottomLink }>{ t('header.menuBottom.AboutTipCat') }</Button>
      </div>
    </div>
  );
};

export default Menu;
