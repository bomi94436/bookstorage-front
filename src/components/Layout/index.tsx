import { sideRight, style } from './Layout.styles';
import SideNavbar from './SideNavBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={[style]}>
      <SideNavbar />
      <div css={[sideRight]}>{children}</div>
    </div>
  );
};

export default Layout;
