import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Route, Switch, Redirect, RouteProps,
} from 'react-router';

import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";

import Spinner from './components/spinner';

import Auth from './pages/Auth';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Members from './pages/Members';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import GetAccount from './pages/get-account';

import { ROUTES } from './constants/routes';
import { loginRequest } from './authConfig';

import { getMember } from './ducks/member/actions';
import { selectMember } from './ducks/member/selectors';

const PrivateRoute = ({
  component: Component,
  member,
  loading,
  access,
  ...rest
}) => {
  const { instance } = useMsal();

  if (!localStorage.getItem('token')) {
    instance.loginRedirect(loginRequest);
    // return <Redirect to={ ROUTES.AUTH.path } />;
  }

  console.log('PrivateRoute member', member);

  if(!member) {
    return <Spinner />
  }

  if (!Component) return <PageNotFound />;

  return (
    <Route
      { ...rest }
      render={ (props) => <Component { ...props } /> }
    />
  );
};

export const Routing = () => {
  const put = useDispatch();
  const member = useSelector(selectMember);
  const token = localStorage.getItem('token');
  const { instance, accounts, inProgress } = useMsal();
  const appAccount = useAccount(accounts[0] || {});

  useEffect(() => {
    console.log('appAccount', appAccount)
    console.log('inProgress', inProgress)
    if (appAccount && inProgress === "none") {
      instance.acquireTokenSilent({
        ...loginRequest,
        account: appAccount
      }).then((response) => {
        console.log('token', response.accessToken)
        console.log('member', member)
        localStorage.setItem("token", response.accessToken);

        if (!member) {
          put(getMember());
        }

      }).catch((error) => {
        console.error('ROUTING', error);
      });
    }
  }, [appAccount, inProgress, instance]);

  return (
    <Switch>
      <Route { ...ROUTES.REGISTRATION } component={ Registration } />
      <Route { ...ROUTES.AUTH } component={ Auth } />
      <PrivateRoute { ...ROUTES.PROFILE } member={ member } component={ Profile } />
      <PrivateRoute { ...ROUTES.HOME } member={ member } component={ Home } />
      <PrivateRoute { ...ROUTES.MEMBERS } member={ member } component={ Members } />
      <PrivateRoute { ...ROUTES.GETACCOUNT } member={ member } component={ GetAccount } />
      <Route component={ PageNotFound } />
    </Switch>
  );
}