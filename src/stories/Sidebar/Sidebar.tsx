import React, { Dispatch, SetStateAction } from 'react';
import logo from '@stories/assets/book-storage-logo3.png';
import { navBox, style, topBox } from './Sidebar.styles';
import { Link } from 'react-router-dom';
import Button from '@stories/Button/Button';
import { BsGridFill } from 'react-icons/bs';

export type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Sidebar = ({ open, setOpen, children }: SidebarProps) => {
  return (
    <aside css={[style]}>
      <div css={[topBox]}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <Link to="/">
          <h3 className="logo-title">Book Storage</h3>
        </Link>

        <Button theme="tertiary" size="big" className="close-sidebar" iconOnly>
          <BsGridFill />
        </Button>
      </div>

      <nav css={[navBox]}>{children}</nav>
    </aside>
  );
};

Sidebar.defaultProps = {
  size: 'normal',
  cancelText: '취소',
  confirmText: '확인',
};

export default Sidebar;
