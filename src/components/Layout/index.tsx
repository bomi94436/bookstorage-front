import React from 'react';
import { useState } from 'react';
import { sideRight, sideRightSizes } from './Layout.styles';
import SideNavbar from './SideNavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <React.Fragment>
      <SideNavbar open={openSidebar} setOpen={setOpenSidebar} />
      <div css={[sideRight, sideRightSizes[openSidebar ? 'opened' : 'closed']]}>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
