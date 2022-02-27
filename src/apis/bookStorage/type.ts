import { IBook } from '@apis/book/types'

export interface StorageBook extends IBook {
  id: number
  createdDate: string // timestamp
  modifiedDate: string // timestamp
}

export type ReadType = 'READ' | 'READING' | 'NOT_READ'

export type BookPostType = 'FEED' | 'REVIEW' | 'SUMMARY'
