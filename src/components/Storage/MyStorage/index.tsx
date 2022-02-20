import React, { useEffect } from 'react'
import { Image, Tag, Title } from '@stories'
import { content, contentItem, style } from './MyStorage.styles'
import { useStorage } from '@apis/bookStorage/hooks'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@apis/user/hooks'

const MyStorage = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useUser()
  const { storageBooks } = useStorage()

  useEffect(() => {
    if (!isLoading && !user) {
      alert('로그인이 필요한 서비스입니다.')
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  return (
    <div css={style}>
      <Title>Storage</Title>

      <div css={content}>
        {storageBooks &&
          storageBooks.map((book) => (
            <div key={`storaged-book-${book.id}`} css={contentItem}>
              <Image src={book.image} />

              <div>
                <Tag>읽음</Tag>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyStorage
