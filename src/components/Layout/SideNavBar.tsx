import { ButtonGroup, Sidebar } from '@stories'
import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import useWindowDimensions from '@hooks/useWindowDimensions'
import {
  AddBookButton,
  HomeButton,
  UserButton,
  LoginButton,
  StorageButton,
} from '@stories/Sidebar/SidebarButtons'
import { useUser } from '@apis/user/hooks'

interface SideNavBarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const SideNavbar = ({ open, setOpen }: SideNavBarProps) => {
  const { width } = useWindowDimensions()
  const { user } = useUser()

  return (
    <Sidebar open={open} setOpen={setOpen} width={width}>
      <ButtonGroup direction="column" rowAlign={!open ? 'center' : undefined} gap="16px">
        <NavLink to="/">
          <HomeButton open={open} />
        </NavLink>

        <NavLink to="/storage/search/by-barcode">
          <AddBookButton open={open} label="바코드로 책 검색" />
        </NavLink>

        <NavLink to="/storage/search/by-query">
          <AddBookButton open={open} label="이름으로 책 검색" />
        </NavLink>

        {user && (
          <NavLink end to="/storage">
            <StorageButton open={open} />
          </NavLink>
        )}
      </ButtonGroup>

      {user ? (
        <UserButton open={open} data={user} />
      ) : (
        <NavLink to="/login">
          <LoginButton open={open} />
        </NavLink>
      )}
    </Sidebar>
  )
}

export default SideNavbar
