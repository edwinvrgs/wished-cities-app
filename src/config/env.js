export const ENV = 'development';

export const API_VERSION = 'v1';

const { REACT_APP_BACK_PORT } = process.env;

export const ENDPOINTS = {
  development: `http://localhost:${REACT_APP_BACK_PORT}/api`,
  production: '',
  staging: '',
};
