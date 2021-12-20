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
          <Button
            href={ ROUTES.ACCOUNT.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.accountProfile') }</Button>
        </li>
        <li>
          <Button
            href={ ROUTES.ADD_FACILITY.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.addFacility') }</Button>
        </li>
        <li>
          <Button
            href={ ROUTES.ADD_MEMBER.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.addMember') }</Button>
        </li>
        <li>
          <Button
            href={ ROUTES.HOME.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.transaction') }</Button>
        </li>
        <li>
          <Button
            href={ ROUTES.HOME.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.financialAnalityc') }</Button>
        </li>
        <li>
          <Button
            href={ ROUTES.SUPPORT.path }
            borderNone={ true }
            className={ style.menuLink }
          >{ t('header.menu.support') }</Button>
        </li>
        <li>
          <Button
            borderNone={ true }
            className={ style.menuLink }
            onClick={ () => logout({ returnTo: authConfig.logoutUri }) }
          >{ t('header.menu.logout') }</Button>
        </li>
      </ul>
      <div className={ style.menuBottom }>
        <Button
          href={ ROUTES.PRIVACY_POLICY.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.privacyPolicy') }</Button>
        <Button
          href={ ROUTES.TERMS_CONDITIONS.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.termsConditions') }</Button>
        <Button
          href={ ROUTES.ABOUT_TIPCAT.path }
          borderNone={ true }
          className={ style.menuBottomLink }
        >{ t('header.menuBottom.AboutTipCat') }</Button>
      </div>
    </div>
  );
};

export default Menu;
