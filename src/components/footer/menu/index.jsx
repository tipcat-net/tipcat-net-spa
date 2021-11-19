import React from 'react';
import { useTranslation } from "react-i18next";

import { Button } from '../../ui/Button';

import { ROUTES } from '../../../constants/routes';

import style from './styles.module.scss';

export const FooterMenu = () => {
  const { t } = useTranslation();

  return (
    <ul className={ style.footerMenu }>
      <li>
        <Button href={ ROUTES.ABOUT_TIPCAT.path } menu>{ t('footer.menu.aboutUs') }</Button>
      </li>
      <li>
        <Button href={ ROUTES.CONTACTS.path } menu>{ t('footer.menu.contacts') }</Button>
      </li>
      <li>
        <Button href={ ROUTES.TERMS_CONDITIONS.path } menu>{ t('footer.menu.termsConditions') }</Button>
      </li>
      <li>
        <Button href={ ROUTES.PRIVACY_POLICY.path } menu>{ t('footer.menu.privacyPolicy') }</Button>
      </li>
    </ul>
  )
}
