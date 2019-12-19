export const ENV = 'development';

const { REACT_APP_BACK_PORT } = process.env;

export const ENDPOINTS = {
  development: `http://localhost:${REACT_APP_BACK_PORT}/api`,
  production: '',
  staging: '',
};
