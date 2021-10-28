import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

export const SignOutButton = () => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  return (
    <button onClick={ () => logout() }>{ t('header.button.logout') }</button>
  );
}
