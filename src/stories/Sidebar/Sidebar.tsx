import React, { Dispatch, SetStateAction, useEffect } from 'react';
import logo from '@stories/assets/book-storage-logo3.png';
import {
  navBox,
  sidebarSize,
  style,
  toggleButton,
  toggleButtonPosition,
  topBox,
  topBoxDisplay,
} from './Sidebar.styles';
import { Link } from 'react-router-dom';
import Button from '@stories/Button/Button';
import { BsGridFill } from 'react-icons/bs';
import { Title, Image } from '@stories/.';
import { size } from '@styles/theme';

export type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  width: number;
};

const Sidebar = ({ open, setOpen, children, width }: SidebarProps) => {
  const opened: 'opened' | 'closed' = open ? 'opened' : 'closed';

  useEffect(() => {
    if (width < size.largest && open) {
      setOpen(false);
    }
  }, [open, setOpen, width]);

  return (
    <aside css={[style, sidebarSize[opened]]}>
      {open ? (
        <>
          <div css={[topBox]}>
            <Link to="/">
              <Image src={logo} width="40px" height="40px" />
            </Link>

            <Link to="/">
              <Title level="3" margin={{ left: '16px', bottom: '0' }}>
                Book Storage
              </Title>
            </Link>
          </div>

          <Button
            theme="tertiary"
            size="large"
            css={[toggleButton, toggleButtonPosition[opened]]}
            iconOnly
            onClick={() => {
              if (width >= size.largest) {
                setOpen((prev) => !prev);
              }
            }}
          >
            <BsGridFill />
          </Button>

          <nav css={[navBox]}>{children}</nav>
        </>
      ) : (
        <>
          <div css={[topBox, topBoxDisplay]}>
            <Link to="/">
              <Image src={logo} width="40px" height="40px" />
            </Link>
          </div>

          {width >= size.largest && (
            <Button
              theme="tertiary"
              size="large"
              css={[toggleButton, toggleButtonPosition[opened]]}
              iconOnly
              onClick={() => {
                if (width >= size.largest) {
                  setOpen((prev) => !prev);
                }
              }}
            >
              <BsGridFill />
            </Button>
          )}

          <nav css={[navBox]}>{children}</nav>
        </>
      )}
    </aside>
  );
};

Sidebar.defaultProps = {
  open: true,
};

export default Sidebar;
