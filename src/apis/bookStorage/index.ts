import API from '@apis/api'
import apiurl from '@apis/urls'
import { ReadType, StorageBook } from './type'

export const postStorage = async ({ isbn, readType }: { isbn: string; readType: ReadType }) => {
  try {
    const response = await API.post<{ result: StorageBook }>(`${apiurl.bookstorage}`, {
      isbn,
      readType,
    })

    return response.data.result
  } catch (err) {
    throw err
  }
}

export const getStorage = async () => {
  try {
    const response = await API.get<{ result: StorageBook[] }>(`${apiurl.bookstorage}`)

    return response.data.result
  } catch (err) {
    throw err
  }
}
