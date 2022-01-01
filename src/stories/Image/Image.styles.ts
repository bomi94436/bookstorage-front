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
