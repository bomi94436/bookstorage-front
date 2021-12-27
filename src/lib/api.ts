import { BACKEND_URL } from '@config/.';
import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';

const API: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {
    access_token: cookies.get('access_token') ?? '',
  },
});

export default API;
