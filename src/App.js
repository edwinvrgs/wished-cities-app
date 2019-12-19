import React        from 'react';
import { Provider } from 'react-redux';

import configureStore from './state/store';

import { CountryList } from './scenes';

import 'bulma/bulma.sass';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
};

export default App;
