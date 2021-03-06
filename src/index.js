import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0';
import './i18n';
import 'dayjs/locale/en';
import * as dayjs from 'dayjs';

import './styles/main.scss';

dayjs.locale('en');

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
