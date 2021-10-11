import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { Provider } from 'react-redux';
import store from './store';

import Pages from './pages';

function App({ instance }) {
  return (
    <Router>
      <Provider store={ store }>
          <MsalProvider instance={instance}>
            <Pages instance={instance} />
          </MsalProvider>
      </Provider>
    </Router>
  );
}

export default App;
