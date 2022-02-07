import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  display: inline-block;
  color: ${theme.color.black};
`;

export const levels = {
  1: css`
    margin-bottom: 16px;
    font-size: 32px;
  `,
  2: css`
    margin-bottom: 14px;
    font-size: 24px;
  `,
  3: css`
    margin-bottom: 12px;
    font-size: 18px;
  `,
  4: css`
    margin-bottom: 10px;
    font-size: 16px;
  `,
  5: css`
    margin-bottom: 8px;
    font-size: 14px;
  `,
};
