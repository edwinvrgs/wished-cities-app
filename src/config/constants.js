import axios                     from 'axios';
import { API_VERSION, BASE_URL } from './env';

export const FULLPAGE_TEST_KEY = 'J%j\}BS=/+~RCQG@4&|A>76.ub*q|Jx{I5mp|-a^^;o7PoU5eDalB*!}n~l+i2B.mW87X"';

export const APIClient = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  timeout: 1000,
});
