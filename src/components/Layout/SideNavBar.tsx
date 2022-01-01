import BarcodeScannerModal from '@components/BarcodeScannerModal';
import { BACKEND_URL } from '@config/.';
import { Button, ButtonGroup } from '@stories/.';
import Sidebar from '@stories/Sidebar/Sidebar';
import { Dispatch, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';

type SideNavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideNavbar = ({ open, setOpen }: SideNavbarProps) => {
  const [oepnBarcodeScannerModal, setOepnBarcodeScannerModal] = useState<boolean>(false);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <ButtonGroup direction="column" gap="16px">
        <NavLink to="/">
          <Button width="100%" theme="quaternary">
            홈
          </Button>
        </NavLink>

        <Button width="100%" theme="quaternary" onClick={() => setOepnBarcodeScannerModal(true)}>
          독후감
        </Button>

        <a
          href={`${BACKEND_URL}/oauth2/authorization/naver?redirect_uri=${window.location.origin}/oauth2/redirect`}
        >
          <Button width="100%" theme="quaternary">
            로그인
          </Button>
        </a>
      </ButtonGroup>

      {oepnBarcodeScannerModal && (
        <BarcodeScannerModal close={() => setOepnBarcodeScannerModal(false)} />
      )}
    </Sidebar>
  );
};

export default SideNavbar;
