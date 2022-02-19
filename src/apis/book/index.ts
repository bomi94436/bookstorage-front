import API from '@apis/api'
import apiurl from '../urls'
import { Book, ReadType, StorageBook } from './types'

export const getBookForISBN = async ({ isbn }: { isbn: string }): Promise<Book> => {
  try {
    const response = await API.get<{ result: Book }>(`${apiurl.books}/${isbn}`)

    return response.data.result
  } catch (err) {
    throw err
  }
}

export const postStorage = async ({ isbn, readType }: { isbn: string; readType: ReadType }) => {
  try {
    const response = await API.post<{ result: StorageBook }>(`${apiurl.usersBooks}`, {
      isbn,
      readType,
    })

    return response.data.result
  } catch (err) {
    throw err
  }
}
