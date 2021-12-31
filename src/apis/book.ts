import API from '@apis/api';
import { IBook } from 'types';

export const getBook = ({ isbn }: { isbn: string }): Promise<IBook> =>
  API.get(`/books/isbn/${isbn}`).then((res) => res.data);
