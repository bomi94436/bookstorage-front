import { getUser } from '@apis/user';
import BarcodeScannerModal from '@components/BarcodeScannerModal';
import { BACKEND_URL } from '@config/.';
import { Button, ButtonGroup, Image } from '@stories/.';
import Sidebar from '@stories/Sidebar/Sidebar';
import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import { IUserInfo } from 'types';

type SideNavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideNavbar = ({ open, setOpen }: SideNavbarProps) => {
  const [oepnBarcodeScannerModal, setOepnBarcodeScannerModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { data } = useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
    onError: () => {
      queryClient.invalidateQueries(['user']);
    },
  });

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <ButtonGroup direction="column" gap="16px">
        <NavLink to="/">
          <Button width="100%" theme="quaternary" label="홈" />
        </NavLink>

        <Button
          width="100%"
          theme="quaternary"
          label="독후감"
          onClick={() => setOepnBarcodeScannerModal(true)}
        />
      </ButtonGroup>

      {data ? (
        <Button width="100%" theme="quaternary" label={data.username}>
          <Image src={data.profileImageUrl} width="32px" height="32px" round={true} />
        </Button>
      ) : (
        <a
          href={`${BACKEND_URL}/oauth2/authorization/naver?redirect_uri=${window.location.origin}/oauth2/redirect`}
        >
          <Button width="100%" theme="quaternary" label="로그인" />
        </a>
      )}

      {oepnBarcodeScannerModal && (
        <BarcodeScannerModal close={() => setOepnBarcodeScannerModal(false)} />
      )}
    </Sidebar>
  );
};

export default SideNavbar;
