import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { useDispatch, useSelector } from "react-redux";
import { selectMember } from "../../ducks/member/selectors";
import { getMember } from "../../ducks/member/actions";

import PageNotFound from "../../pages/PageNotFound";
import { ROUTES } from "../../constants/routes";

const CheckMember = ({ Component, ...props }) => {
  const put = useDispatch();
  const member = useSelector(selectMember);
  const checkRegistrationPage = props.path === ROUTES.REGISTRATION.path;
  
  useEffect(() => {
    put(getMember());
  }, []);
  
  if ((member && member.accountId) || (checkRegistrationPage && member && !member.accountId)) {
    if (!Component) return <PageNotFound />;

    return (
      <Route { ...props } render={routeProps => (
        <Component {...routeProps} />
      ) }/>
    )
  } else if (member && !member.accountId) {
    return (
      <Redirect
        to={ ROUTES.REGISTRATION.path }
      />
    );
  }

  return null;
}

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
            <CheckMember { ...props } Component={ Component }/>
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