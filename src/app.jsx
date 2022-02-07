import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Pages from './pages';

export const App = () => {
  return (
    <Provider store={ store }>
      <Pages/>
    </Provider>
  );
};

export default App;
