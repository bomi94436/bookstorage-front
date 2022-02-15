import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export const colorBox = css`
  width: 4rem;
  height: 4rem;
  border-radius: ${theme.border.radius};
`;
