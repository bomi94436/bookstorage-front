import React, { useCallback, useState } from 'react'
import { Title, Text, Input, Button, Card, ButtonGroup } from '@stories'
import { content, contentItem, searchForm, style } from './ByQuery.styles'
import { useMutation, useQuery } from 'react-query'
import { Book, BookForQueryResponse } from '@apis/book/types'
import { getBookForQuery } from '@apis/book'
import { AxiosError } from 'axios'
import { BsArrowUpRight } from 'react-icons/bs'
import { postStorage } from '@apis/bookStorage'
import { ReadType } from '@apis/bookStorage/type'

const SearchBookByQuery = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [current, setCurrent] = useState<number>(1)
  const [selectedISBN, setSelectedISBN] = useState<string | null>(null)
  const [selectedReadType, setSelectedReadType] = useState<ReadType | null>(null)

  const { data: result, refetch } = useQuery<BookForQueryResponse | undefined, AxiosError>(
    [
      'book',
      {
        query: searchInput,
        start: current,
      },
    ],
    () => getBookForQuery({ query: searchInput!, start: current }),
    {
      enabled: false,
      onSuccess: () => {},
    }
  )

  const { mutate: callAddBook } = useMutation(postStorage, {
    onSuccess: () => {
      alert('책 등록이 완료되었습니다.')
    },
    onError: (err: AxiosError) => {
      if (err.response?.status) {
        alert(err.response?.data.message)
      }
    },
  })

  const onClickReadingStatus = useCallback(
    (book: Book, status: ReadType) => {
      if (selectedISBN === book.isbn && selectedReadType === status) {
        setSelectedReadType(null)
        setSelectedISBN(null)
      } else {
        setSelectedReadType(status)
        setSelectedISBN(book!.isbn)
      }
    },
    [selectedISBN, selectedReadType, setSelectedReadType]
  )

  return (
    <div css={style}>
      <Title>책 검색</Title>
      <Text size="large" color="gray">
        원하는 키워드로 책을 검색하세요.
      </Text>

      <form
        css={searchForm}
        onSubmit={(e) => {
          e.preventDefault()
          refetch()
        }}
      >
        <Input
          name="search-input"
          width="default"
          use="search"
          placeholder="이름, 저자, 출판사 등"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button label="검색" type="submit" />
      </form>

      {result && result.items.length > 0 && (
        <div css={content}>
          {result.items.map((book) => (
            <div key={`search-by-query-book-${book.isbn}`} css={contentItem}>
              <Card imgSrc={book.image}>
                <Title level="3">{book.title}</Title>
                <ButtonGroup rowAlign="space-between">
                  <Button
                    size="small"
                    theme={
                      selectedISBN === book.isbn && selectedReadType === 'NOT_READ'
                        ? 'primary'
                        : 'secondary'
                    }
                    onClick={() => onClickReadingStatus(book, 'NOT_READ')}
                  >
                    읽고싶음
                  </Button>
                  <Button
                    size="small"
                    theme={
                      selectedISBN === book.isbn && selectedReadType === 'READING'
                        ? 'primary'
                        : 'secondary'
                    }
                    onClick={() => onClickReadingStatus(book, 'READING')}
                  >
                    읽는중
                  </Button>
                  <Button
                    size="small"
                    theme={
                      selectedISBN === book.isbn && selectedReadType === 'READ'
                        ? 'primary'
                        : 'secondary'
                    }
                    onClick={() => onClickReadingStatus(book, 'READ')}
                  >
                    읽음
                  </Button>
                </ButtonGroup>

                <ButtonGroup css={{ marginTop: '1rem' }} rowAlign="flex-end">
                  <Button
                    size="small"
                    onClick={() =>
                      callAddBook({ isbn: selectedISBN!, readType: selectedReadType! })
                    }
                    disabled={!(selectedISBN === book.isbn && !!selectedReadType)}
                  >
                    <BsArrowUpRight />
                    Straoge에 추가
                  </Button>
                </ButtonGroup>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBookByQuery
