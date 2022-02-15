import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css``;

export const directions = {
  row: css`
    border-bottom: 1px solid ${theme.border.color};
  `,

  column: css`
    border-right: 1px solid ${theme.border.color};
  `,
};
