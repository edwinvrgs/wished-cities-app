import axios              from 'axios';
import { ENDPOINTS, ENV } from './env';

export const BASE_URL = ENDPOINTS[ENV];

export const APIClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
