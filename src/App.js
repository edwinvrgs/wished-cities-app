import React         from 'react';
import { Provider }  from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import configureStore from './state/store';

import { BudgetInput, CityList, CountryList, SaveBucket } from './components';

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
        sectionsColor={['#282c34', '#ff5f45', '#0798ec', '#ff5f45', '#0798ec']}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h3>Welcome to wished cities bucket!</h3>
            </div>
            <div className="section">
              <div>
                <h3>Select a country</h3>
                <CountryList onClick={() => fullpageApi.moveSectionDown()} />
              </div>
            </div>
            <div className="section">
              <h3>Define your budget</h3>
              <BudgetInput onClick={() => fullpageApi.moveSectionDown()} />
            </div>
            <div className="section">
              <h3>Select your wished cities</h3>
              <CityList onClick={() => fullpageApi.moveSectionDown()} />
            </div>
            <div className="section">
              <h3>Save your bucket</h3>
              <SaveBucket />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </Provider>
  );
};

export default App;
