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

export type BookForQueryResponse = {
  lastBuildDate: string // timestamp
  total: number
  start: number
  display: number
  items: Book[]
}
