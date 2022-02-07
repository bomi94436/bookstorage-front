import { getUser } from '@apis/user';
import { ButtonGroup } from '@stories';
import {
  AddBookInBookStorageButton,
  HomeButton,
  LoginButton,
  UserButton,
} from '@stories/Sidebar/SidebarButtons';
import Sidebar from '@stories/Sidebar/Sidebar';
import { Dispatch, SetStateAction } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { IUserInfo } from 'types';
import useWindowDimensions from '@hooks/useWindowDimensions';

interface SideNavBarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SideNavbar = ({ open, setOpen }: SideNavBarProps) => {
  const queryClient = useQueryClient();
  const { width } = useWindowDimensions();

  const { data } = useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
    // onError: (error: Error) => {
    //   if (error.message !== 'Network Error') queryClient.invalidateQueries(['user']);
    // },
  });

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
  );
};

export default SideNavbar;
