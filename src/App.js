import React         from 'react';
import { Provider }  from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import configureStore from './state/store';

import { BudgetInput, CityList, CountryList } from './components';

import { FULLPAGE_TEST_KEY } from './config/constants';

import 'bulma/bulma.sass';
import './App.css';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ReactFullpage
        licenseKey={FULLPAGE_TEST_KEY}
        scrollingSpeed={1000}
        sectionsColor={['#0798ec', '#282c34', '#ff5f45', '#0798ec']}
        autoScrolling={false}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h3>Welcome to wished cities bucket!</h3>
              <div className="has-text-centered">
                <button
                  className="button is-large is-dark is-centered"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Lets go!
                </button>
              </div>
            </div>
            <div className="section">
              <h3>Select a country</h3>
              <div>
                <CountryList onClick={() => fullpageApi.moveSectionDown()} />
              </div>
            </div>
            <div className="section">
              <h3>Define your budget</h3>
              <BudgetInput onClick={() => fullpageApi.moveSectionDown()} />
            </div>
            <div className="section">
              <h3>Select your wished cities</h3>
              <div>
                <CityList onClick={() => fullpageApi.moveSectionDown()} />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </Provider>
  );
};

export default App;
