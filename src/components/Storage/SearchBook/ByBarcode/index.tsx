import React, { useCallback, useState } from 'react'
import { getBookForISBN, postStorage } from '@apis/book'
import { Card, Divider, Title, Text, ButtonGroup, Button } from '@stories'
import { useMutation, useQuery } from 'react-query'
import BarcodeScanner from './BarcodeScanner'
import { content, contentRight, style } from './BarcodeScanner.styles'
import { Book, ReadType } from '@apis/book/types'
import { AxiosError } from 'axios'

const SearchBookByBarcode = () => {
  const [isbn, setISBN] = useState<string>('9788966262601') // ex - 9788966262601
  const [selectedISBN, setSelectedISBN] = useState<string | null>(null)
  const [selectedReadType, setSelectedReadType] = useState<ReadType | null>(null)

  const { data: book } = useQuery<Book | undefined, AxiosError>(
    ['book', isbn],
    () => {
      return getBookForISBN({ isbn })
    },
    {
      enabled: !!isbn,
      onSuccess: () => {
        setSelectedISBN(null)
      },
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
    (status: ReadType) => {
      if (selectedReadType === status) {
        setSelectedReadType(null)
        setSelectedISBN(null)
      } else {
        setSelectedReadType(status)
        setSelectedISBN(book!.isbn)
      }
    },
    [book, selectedReadType, setSelectedReadType]
  )

  return (
    <div css={[style]}>
      <Title>책 검색</Title>
      <Text size="large" color="gray">
        바코드나 QR코드를 통해 독후감을 작성할 책을 선택하세요.
      </Text>

      <div css={[content]}>
        <div>
          <BarcodeScanner isbn={isbn} setISBN={setISBN} />
        </div>

        <Divider direction="column" />

        <div css={[contentRight]}>
          <Title level="3">검색 결과</Title>

          {book && (
            <Card imgSrc={book.image} active={book.isbn === selectedISBN}>
              <Title level="3">{book.title}</Title>
              <ButtonGroup rowAlign="center" gap="0.5rem">
                <Button
                  size="small"
                  theme={selectedReadType === 'NOT_READ' ? 'primary' : 'secondary'}
                  onClick={() => onClickReadingStatus('NOT_READ')}
                >
                  읽고싶음
                </Button>
                <Button
                  size="small"
                  theme={selectedReadType === 'READING' ? 'primary' : 'secondary'}
                  onClick={() => onClickReadingStatus('READING')}
                >
                  읽는중
                </Button>
                <Button
                  size="small"
                  theme={selectedReadType === 'READ' ? 'primary' : 'secondary'}
                  onClick={() => onClickReadingStatus('READ')}
                >
                  읽음
                </Button>
              </ButtonGroup>
            </Card>
          )}
        </div>
      </div>

      <ButtonGroup css={{ marginTop: '48px' }} rowAlign="flex-end">
        <Button
          onClick={() => callAddBook({ isbn: selectedISBN!, readType: selectedReadType! })}
          disabled={!selectedISBN}
        >
          Straoge에 추가
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SearchBookByBarcode
