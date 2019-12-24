export const ENV = process.env.NODE_ENV || 'development';

export const API_VERSION = 'v1';

const { REACT_APP_BACK_PORT } = process.env;

export const ENDPOINTS = {
  development: `http://localhost:${REACT_APP_BACK_PORT}/api`,
  production: 'http://wished-cities-server.herokuapp.com/api',
  staging: '',
};
