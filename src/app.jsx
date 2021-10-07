import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { Provider } from 'react-redux';
import store from './store';
import { RouteGuard } from './components/route-guard';

import { ROUTES } from './constants/routes';

import { Auth } from './pages/Auth';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Profile from './pages/Profile';
import GetAccount from './pages/get-account';

const Pages = () => {
  return (
    <Switch>
      <RouteGuard { ...ROUTES.HOME } Component={ Home } />
      <RouteGuard { ...ROUTES.GETACCOUNT } Component={ GetAccount } />
      <RouteGuard { ...ROUTES.REGISTRATION } Component={ Registration } />
      <RouteGuard { ...ROUTES.PROFILE } Component={ Profile } />
      <Route { ...ROUTES.AUTH } >
        <Auth />
      </Route>
    </Switch>
  )
}

function App({ instance }) {
  return (
    <Router>
      <Provider store={ store }>
          <MsalProvider instance={instance}>
            <Pages instance={instance} />
            {/* <Routing /> */}
          </MsalProvider>
      </Provider>
    </Router>
  );
}

export default App;
