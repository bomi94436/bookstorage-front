import { AxiosRequestConfig } from 'axios';

export const setConfig = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  let token = localStorage.getItem('accessToken');

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };

  return config;
};
