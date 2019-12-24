export const ENV = process.env.NODE_ENV || 'development';

const { REACT_APP_BACK_PORT } = process.env;

const ENDPOINTS = {
  development: `http://localhost:${REACT_APP_BACK_PORT}/api`,
  production: 'http://wished-cities-server.herokuapp.com/api',
  staging: '',
};

export const API_VERSION = process.env.REACT_API_VERSION || 'v1';

export const BASE_URL = process.env.REACT_APP_BASE_URL || ENDPOINTS[ENV];
