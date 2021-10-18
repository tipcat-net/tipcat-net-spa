import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Header } from './../../components/header';

import { useAuth0 } from '@auth0/auth0-react';

import style from './styles.module.scss';

export const Auth = () => {
  const { loginWithRedirect, user } = useAuth0();

  if (user) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    )
  }

  return (
    <div className={ style.auth }>
      <Header logo/>
      <div className={ style.authContainer }>
        <Button onClick={ () => loginWithRedirect() } primary>Sign in</Button>
      </div>
    </div>
  )
};

export default Auth;