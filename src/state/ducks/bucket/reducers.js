import { initialState } from '../../store';

import types from './types';

const bucket = (state = {}, action) => {
  const { type, payload, error } = action;
  const { selectedCities } = state;
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
    case types.UPDATE_BUDGET: {
      return {
        ...state,
        budget: parseInt(payload),
      };
    }
    case types.SELECT_CITY: {
      return {
        ...state,
        selectedCities: [...selectedCities, payload],
      };
    }
    case types.REMOVE_CITY: {
      const cityIndex = selectedCities.indexOf(payload);
      return {
        ...state,
        selectedCities: [
          ...selectedCities.slice(0, cityIndex),
          ...selectedCities.slice(cityIndex + 1),
        ],
      };
    }
    case types.UPDATE_CITIES: {
      return {
        ...state,
        cities: payload,
      };
    }
    default:
      return state;
  }
};

export default bucket;
