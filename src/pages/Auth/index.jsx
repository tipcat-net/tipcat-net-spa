import React from "react";
import { Redirect } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './../../authConfig';
import { Button } from "../../components/ui/Button";
import { Header } from './../../components/header';

import style from './styles.module.scss';

export const Auth = () => {
  const { instance } = useMsal();
  const currentAccount = instance.getActiveAccount();

  if (currentAccount) {
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
        <Button onClick={ () => instance.loginRedirect(loginRequest) } primary>Sign in</Button>
      </div>
    </div>
  )
};

export default Auth;