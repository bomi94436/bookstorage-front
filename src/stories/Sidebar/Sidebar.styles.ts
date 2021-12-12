import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;

  background-color: ${theme.color.white};

  ${theme.mq.laptop} {
    width: 300px;
  }

  height: 100%;

  overflow: hidden;
  border-right: 1px solid ${theme.border.color};
`;

export const topBox = css`
  position: relative;

  display: flex;
  align-items: center;

  height: 50px;
  padding: 24px;
  /* border-bottom: 1px solid ${theme.border.color}; */

  .logo {
    width: 40px;
    height: 40px;
  }

  .logo-title {
    margin-left: 16px;
    color: ${theme.color.black};
  }

  .close-sidebar {
    position: absolute;
    top: 25px;
    right: 12px;
  }
`;

export const navBox = css`
  padding: 24px;
`;
