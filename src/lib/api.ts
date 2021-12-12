import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';

const API: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    access_token: cookies.get('access_token') ?? '',
  },
});

export default API;
