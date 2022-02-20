import API from '@apis/api'
import apiurl from '../urls'
import { Book, BookForQueryResponse } from './types'

export const getBookForISBN = async ({ isbn }: { isbn: string }) => {
  try {
    const response = await API.get<{ result: Book }>(`${apiurl.books}/${isbn}`)

    return response.data.result
  } catch (err) {
    throw err
  }
}

export const getBookForQuery = async ({ query, start }: { query: string; start?: number }) => {
  try {
    const response = await API.get<{ result: BookForQueryResponse }>(`${apiurl.books}`, {
      params: {
        query,
        start,
      },
    })

    return response.data.result
  } catch (err) {
    throw err
  }
}
