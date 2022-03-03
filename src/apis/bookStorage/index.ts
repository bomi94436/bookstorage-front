import API from '@apis/api'
import apiurl from '@apis/urls'
import { BookPost, PostBookPostsRequrest, ReadType, StorageBook } from './type'

export const postStorage = async ({ isbn, readType }: { isbn: string; readType: ReadType }) => {
  try {
    const response = await API.post<{ result: StorageBook }>(`${apiurl.bookStorage}`, {
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
    const response = await API.get<{ result: StorageBook[] }>(`${apiurl.bookStorage}`)

    return response.data.result
  } catch (err) {
    throw err
  }
}

export const postBookPosts = async ({
  bookstorageId,
  data,
}: {
  bookstorageId: number
  data: PostBookPostsRequrest
}) => {
  try {
    const response = await API.post<{ result: BookPost }>(
      `${apiurl.bookStorage}/${bookstorageId}${apiurl.bookPosts}`,
      data
    )

    return response.data.result
  } catch (err) {
    throw err
  }
}
