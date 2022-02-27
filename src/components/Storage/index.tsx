import React, { useCallback, useEffect, useState } from 'react'
import { Button, Image, SelectItem, SelectList, Tag, Title } from '@stories'
import { content, contentItem, style, writeButtonWrapper } from './Storage.styles'
import { useStorage } from '@apis/bookStorage/hooks'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@apis/user/hooks'
import { BsPencilSquare } from 'react-icons/bs'
import { BookPostType, StorageBook } from '@apis/bookStorage/type'
import PostReviewModal from './Post/PostReviewModal'

const MyStorage = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useUser()
  const { storageBooks } = useStorage()
  const [selectedMoreId, setSelectedMoreId] = useState<number | null>(null)
  const [writeType, setWriteType] = useState<BookPostType | null>(null)
  const [selectedStorageBook, setSelectedStorageBook] = useState<StorageBook | null>(null)

  useEffect(() => {
    if (!isLoading && !user) {
      alert('로그인이 필요한 서비스입니다.')
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  const onClickWriteButton = useCallback(
    (id: number) => {
      if (selectedMoreId && selectedMoreId === id) {
        setSelectedMoreId(null)
      } else {
        setSelectedMoreId(id)
      }
    },
    [selectedMoreId]
  )

  return (
    <div css={style}>
      <Title>Storage</Title>

      <div css={content}>
        {storageBooks &&
          storageBooks.map((book) => (
            <div key={`storaged-book-${book.id}`} css={contentItem}>
              <Image src={book.image} width="8rem" height="10rem" />

              <div>
                <Tag>읽음</Tag>

                <div css={writeButtonWrapper}>
                  <Button size="small" iconOnly onClick={() => onClickWriteButton(book.id)}>
                    <BsPencilSquare />
                  </Button>

                  {book.id === selectedMoreId && (
                    <SelectList
                      position={{ top: '38px', left: '0' }}
                      close={() => setSelectedMoreId(null)}
                    >
                      <SelectItem
                        onClick={() => {
                          setWriteType('REVIEW')
                          setSelectedStorageBook(book)
                        }}
                      >
                        리뷰 쓰기
                      </SelectItem>
                      <SelectItem
                        onClick={() => {
                          setWriteType('FEED')
                          setSelectedStorageBook(book)
                        }}
                      >
                        피드 쓰기
                      </SelectItem>
                      <SelectItem
                        onClick={() => {
                          setWriteType('SUMMARY')
                          setSelectedStorageBook(book)
                        }}
                      >
                        정리하기
                      </SelectItem>
                    </SelectList>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {writeType === 'REVIEW' && selectedStorageBook && (
        <PostReviewModal
          isOpen={Boolean(writeType)}
          close={() => setWriteType(null)}
          title="리뷰 쓰기"
          book={selectedStorageBook}
        />
      )}
    </div>
  )
}

export default MyStorage
