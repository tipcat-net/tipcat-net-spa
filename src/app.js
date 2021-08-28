import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header';
import { ApiTest } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"
              render={() => <h2>Welcome to Tipcat</h2>}
              exact />
        <Route path="/api-test" component={ApiTest} />
      </Switch>
    </Router>
  );
}

export default App;
