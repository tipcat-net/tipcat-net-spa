import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../components/spinner';

import { ROUTES } from '../constants/routes';
import { PageNotFound } from '../pages/PageNotFound'

const ProtectedRoute = ({ component: Component, ...args }) => {
  const { isAuthenticated, isLoading } = useAuth0();

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
