import { IBook } from '@apis/book/types'

export interface StorageBook extends IBook {
  id: number
  createdDate: string // timestamp
  modifiedDate: string // timestamp
}

export type ReadType = 'READ' | 'READING' | 'NOT_READ'

export type BookPostType = 'FEED' | 'REVIEW' | 'SUMMARY'

export interface BookPost {
  id: number
  title: string
  writer: string
  content: string
  count: number
  bookPostType: BookPostType
  createDate: string // timestamp
  modifiedDate: string // timestamp
}

export type PostBookPostsRequrest = {
  title: string
  bookPostType: BookPostType
  content: string
}
