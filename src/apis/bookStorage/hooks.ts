import { useQuery } from 'react-query'
import { StorageBook } from './type'
import { AxiosError } from 'axios'
import { getStorage } from '.'
import { useUser } from '@apis/user/hooks'

export const useStorage = () => {
  const { user } = useUser()

  const { data, isLoading } = useQuery<StorageBook[], AxiosError>(
    ['book-storage'],
    () => getStorage(),
    {
      enabled: !!user,
    }
  )

  return {
    storageBooks: data,
    isLoading,
  }
}
