import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const activeCard = css`
  border: 1px solid ${theme.color.main};
`;

export const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 280px;

  overflow: hidden;
  border: 1px solid ${theme.border.color};
  border-radius: ${theme.border.radius};

  :not(.active):hover {
    border: 1px solid ${theme.color.mainHover};
  }

  :hover {
    cursor: pointer;
  }
`;

export const image = (url: string) => css`
  width: 280px;
  height: 250px;
  background-image: url(${url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const content = css`
  display: flex;
  flex-direction: column;

  width: calc(100% - 48px);

  padding: 24px;
  border-top: 1px solid ${theme.border.color};
  background-color: ${theme.color.white};

  .card-title {
    font-size: 18px;
  }
`;
