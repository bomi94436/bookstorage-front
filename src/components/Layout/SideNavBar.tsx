import { getUser } from '@apis/user';
import BarcodeScannerModal from '@components/BarcodeScannerModal';
import { BACKEND_URL } from '@config/.';
import { ButtonGroup } from '@stories/.';
import {
  AddBookInBookStorageButton,
  HomeButton,
  LoginButton,
  UserButton,
} from '@stories/Sidebar/SidebarButtons';
import Sidebar from '@stories/Sidebar/Sidebar';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { IUserInfo } from 'types';

const SideNavbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [openBarcodeScannerModal, setOpenBarcodeScannerModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { data } = useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
    // onError: (error: Error) => {
    //   if (error.message !== 'Network Error') queryClient.invalidateQueries(['user']);
    // },
  });

  return (
    <Sidebar open={openSidebar} setOpen={setOpenSidebar}>
      <ButtonGroup direction="column" gap="16px">
        <NavLink to="/">
          <HomeButton open={openSidebar} />
        </NavLink>

        <AddBookInBookStorageButton
          open={openSidebar}
          onClick={() => setOpenBarcodeScannerModal(true)}
        />
      </ButtonGroup>

      {data ? (
        <UserButton open={openSidebar} data={data} />
      ) : (
        <a
          href={`${BACKEND_URL}/oauth2/authorization/naver?redirect_uri=${window.location.origin}/oauth2/redirect`}
        >
          <LoginButton open={openSidebar} />
        </a>
      )}

      {openBarcodeScannerModal && (
        <BarcodeScannerModal close={() => setOpenBarcodeScannerModal(false)} />
      )}
    </Sidebar>
  );
};

export default SideNavbar;
