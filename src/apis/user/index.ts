import API from '@apis/api';
import { IUserInfo } from '../../types/index';
import { LoginRequest, SignupRequest } from './types';

export const getUser = async () => {
  try {
    const res = await API.get<{ response: IUserInfo }>('/users');

    localStorage.setItem('user', JSON.stringify(res.data.response));
    return res.data.response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const singup = async (data: SignupRequest) => {
  try {
    // TODO: res 타입 정의 필요
    const res = await API.post('/users', data);

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const login = async (data: LoginRequest) => {
  try {
    // TODO: res 타입 정의 필요
    const res = await API.post('/auth', data);

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};