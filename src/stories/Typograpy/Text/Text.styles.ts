import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const sizes = {
  small: css`
    font-size: 12px;
  `,
  medium: css`
    font-size: 14px;
  `,
  large: css`
    font-size: 18px;
  `,
};

export const colors = {
  main: css`
    color: ${theme.color.main};
  `,
  black: css`
    color: ${theme.color.black};
  `,
  gray: css`
    color: ${theme.color.gray};
  `,
  white: css`
    color: ${theme.color.white};
  `,
};

export const bolded = css`
  font-weight: bold;
`;
