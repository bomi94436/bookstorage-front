import BarcodeScannerModal from '@components/BarcodeScannerModal';
import API from '@lib/api';
import ButtonGroup from '@stories/ButtonGroup/ButtonGroup';
import SidebarButton from '@stories/Sidebar/Button/SidebarButton';
import Sidebar from '@stories/Sidebar/Sidebar';
import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

type SideNavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideNavbar = ({ open, setOpen }: SideNavbarProps) => {
  const [oepnBarcodeScannerModal, setOepnBarcodeScannerModal] = useState<boolean>(false);

  const { data, refetch } = useQuery(
    'login',
    () =>
      API.get(`/oauth2/authorization/naver?redirect_uri=localhost:3000`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: false,
      enabled: false, // turned off by default, manual refetch is needed
    }
  );

  const handleClick = () => {
    refetch();
  };

  console.log(data);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <ButtonGroup direction="column" gap="16px">
        <SidebarButton>
          <Link to="/">홈</Link>
        </SidebarButton>
        <SidebarButton onClick={() => setOepnBarcodeScannerModal(true)}>독후감</SidebarButton>
        {/* <SidebarButton onClick={handleClick}>로그인</SidebarButton> */}
        <a
          href={
            'http://localhost:8080/oauth2/authorization/naver?redirect_uri=localhost:3000/oauth2/redirect'
          }
        >
          로그인
        </a>
      </ButtonGroup>

      {oepnBarcodeScannerModal && (
        <BarcodeScannerModal close={() => setOepnBarcodeScannerModal(false)} />
      )}
    </Sidebar>
  );
};

export default SideNavbar;
