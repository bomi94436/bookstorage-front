import BarcodeScannerModal from '@components/BarcodeScannerModal';
import ButtonGroup from '@stories/ButtonGroup/ButtonGroup';
import SidebarButton from '@stories/Sidebar/Button/SidebarButton';
import Sidebar from '@stories/Sidebar/Sidebar';
import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

type SideNavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideNavbar = ({ open, setOpen }: SideNavbarProps) => {
  const [oepnBarcodeScannerModal, setOepnBarcodeScannerModal] = useState<boolean>(false);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <ButtonGroup direction="column" gap="16px">
        <SidebarButton>
          <Link to="/">홈</Link>
        </SidebarButton>
        <SidebarButton onClick={() => setOepnBarcodeScannerModal(true)}>독후감</SidebarButton>
      </ButtonGroup>

      {oepnBarcodeScannerModal && (
        <BarcodeScannerModal close={() => setOepnBarcodeScannerModal(false)} />
      )}
    </Sidebar>
  );
};

export default SideNavbar;
