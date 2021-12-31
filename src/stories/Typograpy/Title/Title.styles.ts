import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  color: ${theme.color.black};
`;

export const levels = {
  1: css`
    margin-bottom: 16px;
  `,
  2: css`
    margin-bottom: 14px;
  `,
  3: css`
    margin-bottom: 12px;
  `,
  4: css`
    margin-bottom: 10px;
  `,
  5: css`
    margin-bottom: 8px;
  `,
};
