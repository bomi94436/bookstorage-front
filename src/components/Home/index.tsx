import { Divider, Image, Text } from '@stories';
import {
  card,
  cardHeaderNickname,
  cardHeaderUserInfo,
  content,
  footerItem,
  leftSide,
  style,
  tag,
} from './Home.styles';
import logo from '@stories/assets/book-storage-logo.png';
import { FaRegCommentAlt } from 'react-icons/fa';
import { theme } from '@styles/theme';

const Home = () => {
  return (
    <div css={style}>
      <div css={leftSide}>
        <article css={card}>
          <header>
            <div css={tag}>
              <button>#피드</button>
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
  );
};

export default Home;
