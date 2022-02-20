import { Button, Divider, Image, Tag, Text } from '@stories'
import {
  card,
  cardHeaderNickname,
  cardHeaderUserInfo,
  content,
  footerItem,
  leftSide,
  style,
  tag,
} from './Home.styles'
import logo from '@stories/assets/book-storage-logo.png'
import { FaRegCommentAlt } from 'react-icons/fa'
import { theme } from '@styles/theme'
import { useUser } from '@apis/user/hooks'
import { BsArrowUpRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <div css={style}>
      <div css={leftSide}>
        {!user && (
          <Button onClick={() => navigate('/login')}>
            <BsArrowUpRight />
            로그인하고 글쓰기
          </Button>
        )}
        <article css={card}>
          <header>
            <div css={tag}>
              <Tag>#피드</Tag>
            </div>

            <div css={cardHeaderUserInfo}>
              <Image src={logo} round width="3rem" height="3rem" />

              <div css={cardHeaderNickname}>
                <Text bold>name</Text>
                <Text size="small" color="gray">
                  2022-02-21
                </Text>
              </div>
            </div>
          </header>

          <Divider />

          <div css={content}>
            fjdlsaklfds
            <br />
            fdjskaljfkld
          </div>

          <Divider />

          <footer>
            <div css={footerItem}>
              <FaRegCommentAlt color={theme.color.gray} />
              <Text color="gray">0개</Text>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default Home
