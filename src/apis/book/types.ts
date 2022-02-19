export interface IBook {
  title: string
  link: string
  isbn: string
  image: string
  author: string
  publisher: string
}

export interface Book extends IBook {
  description: string
  discount: string
  price: string
  pubdate: string
}

export interface StorageBook extends IBook {
  id: number
  createdDate: string // timestamp
  modifiedDate: string // timestamp
}

export type ReadType = 'READ' | 'READING' | 'NOT_READ'
