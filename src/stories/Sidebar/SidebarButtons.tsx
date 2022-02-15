import { Button, Image } from '@stories';
import { IUserInfo } from 'types';
import { AiFillHome } from 'react-icons/ai';
import { RiBookFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';

export const HomeButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="홈" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <AiFillHome />
    </Button>
  );

export const AddBookInBookStorageButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="책 검색" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <RiBookFill />
    </Button>
  );

export const UserButton = ({ open, data }: { open: boolean; data: IUserInfo }) =>
  open ? (
    <Button width="100%" theme="quaternary" label={data.nickname}>
      <Image src={data.profileImageUrl} width="3rem" height="3rem" round={true} />
    </Button>
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <Image src={data.profileImageUrl} iconOnlySize="large" round={true} />
    </Button>
  );

export const LoginButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="로그인" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <FaUserCircle />
    </Button>
  );
