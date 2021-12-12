import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  background: ${theme.color.white};
  color: ${theme.color.gray};
  text-decoration: none;

  svg {
    fill: ${theme.color.black};
  }
  &:hover:enabled {
    filter: brightness(100%);
    background-color: ${theme.color.lightGray};
  }
  &:active:enabled {
    filter: brightness(95%);
  }
`;

export const activeStyle = {
  active: css`
    color: ${theme.color.main};
  `,

  inActive: css``,
};
