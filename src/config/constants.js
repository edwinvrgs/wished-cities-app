import axios                           from 'axios';
import { API_VERSION, ENDPOINTS, ENV } from './env';

export const BASE_URL = process.env.REACT_APP_BASE_URL || ENDPOINTS[ENV];

export const FULLPAGE_TEST_KEY = 'J%j\}BS=/+~RCQG@4&|A>76.ub*q|Jx{I5mp|-a^^;o7PoU5eDalB*!}n~l+i2B.mW87X"';

export const APIClient = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  timeout: 1000,
});
