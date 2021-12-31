import API from '@apis/api';
import { IUserInfo } from '../types/index';

export const getUser = async (): Promise<IUserInfo> =>
  API.get('/users').then((res) => {
    localStorage.setItem('user', JSON.stringify(res.data.response));
    return res.data.response;
  });
