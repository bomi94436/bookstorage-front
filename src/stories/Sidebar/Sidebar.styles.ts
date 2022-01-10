import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;

  background-color: ${theme.color.white};

  ${theme.mq.laptop} {
  }

  height: 100%;

  overflow: hidden;
  border-right: 1px solid ${theme.border.color};
`;

export const sidebarSize = {
  opened: css`
    width: 280px;
  `,
  closed: css`
    width: 100px;
  `,
};

export const toggleButton = css`
  position: fixed;
  z-index: 1;
  border: 1px solid ${theme.border.color};
`;

export const toggleButtonPosition = {
  opened: css`
    top: 25px;
    left: 257px;
  `,
  closed: css`
    top: 25px;
    left: 77px;
  `,
};

export const topBox = css`
  display: flex;
  align-items: center;

  height: 50px;
  padding: 24px;
  border-bottom: 1px solid ${theme.border.color};
`;

export const topBoxDisplay = css`
  justify-content: center;
`;

export const navBox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;
  height: calc(100% - 146px);

  .active {
    & > * {
      color: ${theme.color.main};
      background-color: ${theme.color.lightGray};
    }
  }
`;
