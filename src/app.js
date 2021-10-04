import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import { Routing } from './routes';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
