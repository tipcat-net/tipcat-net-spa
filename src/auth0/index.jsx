import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './auth0-config';

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={ authConfig.domain }
      clientId={ authConfig.clientId }
      redirectUri={ authConfig.redirectUri }
      onRedirectCallback={ onRedirectCallback }
      useRefreshTokens={ true }
      audience={ authConfig.audience }
      scope={ authConfig.scope }
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
