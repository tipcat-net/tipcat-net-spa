import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

import { Header } from './../../components/header';
import Spinner from "../../components/spinner";
import { Button } from "../../components/ui/Button";

import { ROUTES } from "../../constants/routes";

import style from './styles.module.scss';

export const Logout = () => {
  const { t } = useTranslation();
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />
  }

  if (!isAuthenticated) {
    return (
      <Redirect
        to={ ROUTES.AUTH.path }
      />
    )
  }

  return (
    <div className={ style.logout }>
      <Header logo/>
      <div className={ style.logoutContainer }>
        <Button onClick={ () => loginWithRedirect() } primary>{ t("logout.button.logout") }</Button>
      </div>
    </div>
  )
};

export default Logout;
