import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Spinner from './components/spinner';
import { ROUTES } from './constants/routes';
import { PageNotFound } from './pages/PageNotFound';
import { getMember } from './ducks/member/actions';
import { selectMember } from './ducks/member/selectors';

const ProtectedRoute = ({ component: Component, ...args }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const put = useDispatch();
  const member = useSelector(selectMember);

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        const token = await getAccessTokenSilently();
        localStorage.setItem('token', token);
        put(getMember());
      };
        
      getToken();
    }
  }, [isAuthenticated]);

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

  if (member && !member.accountId && args.path !== ROUTES.REGISTRATION.path) {
    return (
      <Redirect
        to={ ROUTES.REGISTRATION.path }
      />
    )
  }

  if (!Component) {
    return <PageNotFound />
  }

  return (
    <Route
      { ...args }
      render={ (props) => <Component { ...props } /> }
    />
  )
};

export default ProtectedRoute;
