import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Header } from './../../components/header';
import { useTranslation } from "react-i18next";
import { useAuth0 } from '@auth0/auth0-react';
import { ROUTES } from "../../constants/routes";

import style from './styles.module.scss';

export const Auth = () => {
  const { t } = useTranslation();
  const { loginWithRedirect, user } = useAuth0();

  if (user) {
    return (
      <Redirect
        to={ ROUTES.HOME.path }
      />
    )
  }

  return (
    <div className={ style.auth }>
      <Header logo/>
      <div className={ style.authContainer }>
        <Button onClick={ () => loginWithRedirect() } primary>{ t("auth.button.signIn") }</Button>
      </div>
    </div>
  )
};

export default Auth;
