import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger                                                     from 'redux-logger';

import { api }       from './middlewares';
import * as reducers from './ducks';

export const initialState = {
  bucket: {
    countries: [],
    cities: [],
    selectedCountry: null,
    selectedCities: [],
    budget: 0,
    loading: false,
    error: null,
  },
};

const configureStore = (preloadedState = initialState) => {
  const devOnlyMiddlewares = [logger];
  const middlewares = [
    ...(process.env.NODE_ENV === 'development' ? devOnlyMiddlewares : []),
    ...api,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const rootReducer = combineReducers(reducers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./ducks', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;
