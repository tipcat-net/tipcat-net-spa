import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

export const RouteGuard = ({ Component, ...props }) => {

  const { inProgress,instance } = useMsal();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const currentAccount = instance.getActiveAccount();

  useEffect(() => {
    if (currentAccount) {
      setIsAuthorized(true);
    }
  }, [instance, currentAccount]);

  return (
    <>
      {
        isAuthorized
          ?
            <Route {...props} render={routeProps => (
              <Component {...routeProps} />
            ) }/>
          : !isAuthorized && inProgress === InteractionStatus.None ?
            <Redirect
              to={{
                pathname: "/auth",
                state: { origin: props.location.pathname }
              }}
            />
          : null
      }
    </>
  );
};