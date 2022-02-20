import { Button, ProfileImage } from '@stories'
import { AiFillHome } from 'react-icons/ai'
import { RiBookFill } from 'react-icons/ri'
import { FaUserCircle, FaDatabase } from 'react-icons/fa'
import { IUserInfo } from '@apis/user/types'

export const HomeButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="홈" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <AiFillHome />
    </Button>
  )

export const AddBookButton = ({ open, label }: { open: boolean; label: string }) =>
  open ? (
    <Button width="100%" theme="quaternary" label={label} />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <RiBookFill />
    </Button>
  )

export const StorageButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="스토리지" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <FaDatabase />
    </Button>
  )

export const UserButton = ({ open, data }: { open: boolean; data: IUserInfo }) =>
  open ? (
    <Button width="100%" theme="quaternary" label={data.nickname}>
      <ProfileImage src={data.profileImageUrl} width="3rem" height="3rem" />
    </Button>
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <ProfileImage src={data.profileImageUrl} size="large" />
    </Button>
  )

export const LoginButton = ({ open }: { open: boolean }) =>
  open ? (
    <Button width="100%" theme="quaternary" label="로그인" />
  ) : (
    <Button size="large" theme="quaternary" iconOnly>
      <FaUserCircle />
    </Button>
  )
