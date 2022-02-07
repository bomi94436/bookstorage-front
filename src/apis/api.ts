import { BACKEND_URL } from '@config';
import axios, { AxiosInstance } from 'axios';
import { setConfig } from './interceptor';

const API: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
});

API.interceptors.request.use(setConfig);

export default API;
