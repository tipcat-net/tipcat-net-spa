import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Header from './components/header';
import { ApiTest, Home } from './pages';


function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Header />
        <Switch>
          <Route path="/"
                component={Home}
                exact />
          <Route path="/api-test" component={ApiTest} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
