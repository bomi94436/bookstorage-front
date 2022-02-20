import { useQuery } from 'react-query'
import { getUser } from '.'
import { IUserInfo } from './types'

export const useUser = () => {
  const { data, isLoading } = useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
  })

  return {
    user: data,
    isLoading,
  }
}
