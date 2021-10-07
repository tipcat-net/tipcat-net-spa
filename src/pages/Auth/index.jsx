import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from './../../authConfig';

export const Auth = () => {
  const { inProgress, instance } = useMsal();
  const currentAccount = instance.getActiveAccount();

  useEffect(() => {
    if(!currentAccount && inProgress === InteractionStatus.None) {
      instance.loginRedirect(loginRequest);
    }
  }, [instance, inProgress, currentAccount])

  return (
    <>
      {
        currentAccount
          ?
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          :
            null
      }
    </>
  )
};

export default Auth;