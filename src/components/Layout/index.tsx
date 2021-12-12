import { useState } from 'react';
import { sideRight, style } from './Layout.styles';
import SideNavbar from './SideNavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div css={[style]}>
      <SideNavbar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div css={[sideRight]}>{children}</div>
    </div>
  );
};

export default Layout;
