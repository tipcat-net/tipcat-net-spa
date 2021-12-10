import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

import Spinner from '../../components/spinner';
import { Button } from '../../components/ui/Button';
import { Logo } from '../../components/ui/Icons';

import { authConfig } from '../../auth0/auth0-config';
import { ROUTES } from '../../constants/routes';

import style from './styles.module.scss';

export const Logout = () => {
  const { t } = useTranslation();
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    logout({ returnTo: authConfig.logoutUri });
  }

  return (
    <div className={ style.logout }>
      <Logo className={ style.logoutLogo } />
      <div className={ style.logoutTitle }>{ t('logout.title') }</div>
      <div className={ style.logoutText }>{ t('logout.text') }</div>
      <Button
        transparent={ true }
        onClick={ () => loginWithRedirect() }
        className={ style.logoutBtnLogin  }
      >{ t('logout.buttonLogin') }</Button>
      <Button
        menu={ true }
        href={ ROUTES.ABOUT_TIPCAT.path }
        className={ style.logoutLinkAbout  }
      >{ t('logout.LinkAbout') }</Button>
    </div>
  );
};

export default Logout;
