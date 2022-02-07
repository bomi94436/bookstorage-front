import { css } from '@emotion/react';

export const sideRight = css`
  padding: 35px;
  height: calc(100vh - 70px);
`;

export const sideRightSizes = {
  opened: css`
    margin-left: 280px;
  `,
  closed: css`
    margin-left: 100px;
  `,
};
