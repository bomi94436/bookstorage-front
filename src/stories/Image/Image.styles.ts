import { css } from '@emotion/react';

export const style = css`
  display: inline-block;
`;

export const backgroudImage = (url: string) => css`
  width: 280px;
  height: 250px;
  background-image: url(${url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const iconOnlySizes = {
  small: css`
    width: 12px;
    height: 12px;
  `,
  medium: css`
    width: 14px;
    height: 14px;
  `,
  large: css`
    width: 18px;
    height: 18px;
  `,
};
