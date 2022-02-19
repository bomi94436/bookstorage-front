import API from '@apis/api'
import { IUserInfo, LoginRequest, SignupRequest } from './types'

export const getUser = async () => {
  try {
    const res = await API.get<{ result: IUserInfo }>('/users/me')

    localStorage.setItem('user', JSON.stringify(res.data.result))
    return res.data.result
  } catch (err) {
    throw err
  }
}

export const singup = async (data: SignupRequest) => {
  try {
    // TODO: res 타입 정의 필요
    const res = await API.post('/users', data)

    return res.data
  } catch (err) {
    throw err
  }
}

export const login = async (data: LoginRequest) => {
  try {
    // TODO: res 타입 정의 필요
    const res = await API.post('/auth', data)

    return res.data
  } catch (err) {
    throw err
  }
}
