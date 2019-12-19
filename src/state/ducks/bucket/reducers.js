import { initialState } from '../../store';

import types from './types';

const bucket = (state = {}, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case types.CLEAR: {
      return initialState.bucket;
    }
    case types.API_CALL: {
      return {
        ...state,
        error: null,
      };
    }
    case types.START_CALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.END_CALL: {
      return {
        ...state,
        loading: false,
        error: error ? payload : null,
      };
    }
    case types.UPDATE_COUNTRIES: {
      return {
        ...state,
        countries: payload,
      };
    }
    case types.SELECT_COUNTRY: {
      return {
        ...state,
        selectedCountry: payload,
      };
    }
    default:
      return state;
  }
};

export default bucket;
