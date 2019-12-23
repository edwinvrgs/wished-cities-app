import { createAction } from 'redux-actions';

import types from './types';

const clear = createAction(types.CLEAR);
const updateCountries = createAction(types.UPDATE_COUNTRIES);
const selectCountry = createAction(types.SELECT_COUNTRY);
const updateCities = createAction(types.UPDATE_CITIES);
const selectCity = createAction(types.SELECT_CITY);
const removeCity = createAction(types.REMOVE_CITY);
const updateBudget = createAction(types.UPDATE_BUDGET);
const saveBucket = createAction(types.SAVE_BUCKET);

const fetchCountries = createAction(types.API_CALL, () => ({
  config: {
    url: 'countries',
    method: 'get',
  },
  onSuccess(data, dispatch) {
    dispatch(updateCountries(data));
  },
}));

const fetchCities = createAction(types.API_CALL, (payload) => ({
  config: {
    url: `cities/${payload}`,
    method: 'get',
  },
  onSuccess(data, dispatch) {
    dispatch(updateCities(data));
  },
}));

export default {
  clear,
  fetchCountries,
  updateCountries,
  selectCountry,
  fetchCities,
  selectCity,
  removeCity,
  updateBudget,
  saveBucket,
};
