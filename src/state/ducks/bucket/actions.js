import { createAction } from 'redux-actions';

import types from './types';

const clear = createAction(types.CLEAR);
const updateCountries = createAction(types.UPDATE_COUNTRIES);
const selectCountry = createAction(types.SELECT_COUNTRY);
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

export default {
  clear,
  fetchCountries,
  updateCountries,
  selectCountry,
  selectCity,
  removeCity,
  updateBudget,
  saveBucket,
};
