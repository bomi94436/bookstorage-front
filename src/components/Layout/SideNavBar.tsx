import { getUser } from '@apis/user'
import { ButtonGroup, Sidebar } from '@stories'
import { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { NavLink } from 'react-router-dom'
import useWindowDimensions from '@hooks/useWindowDimensions'
import {
  AddBookInBookStorageButton,
  HomeButton,
  UserButton,
  LoginButton,
} from '@stories/Sidebar/SidebarButtons'
import { IUserInfo } from '@apis/user/types'

interface SideNavBarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const SideNavbar = ({ open, setOpen }: SideNavBarProps) => {
  const { width } = useWindowDimensions()

  const { data } = useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
  })

  return (
    <Sidebar open={open} setOpen={setOpen} width={width}>
      <ButtonGroup direction="column" rowAlign={!open ? 'center' : undefined} gap="16px">
        <NavLink to="/">
          <HomeButton open={open} />
        </NavLink>

        <NavLink to="/storage/search/by-barcode">
          <AddBookInBookStorageButton open={open} />
        </NavLink>
      </ButtonGroup>

      {data ? (
        <UserButton open={open} data={data} />
      ) : (
        <NavLink to="/login">
          <LoginButton open={open} />
        </NavLink>
      )}
    </Sidebar>
  )
}

export default SideNavbar
