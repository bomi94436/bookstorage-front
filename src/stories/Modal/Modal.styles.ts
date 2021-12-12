import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

export const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const whiteBox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  border-radius: ${theme.border.radius};
  width: 400px;
  background: ${theme.color.semiWhite};
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 32px;

  .modal-title {
    font-size: 24px;
    color: ${theme.color.black};
    margin-top: 0;
    margin-bottom: 18px;
  }

  .modal-description {
    font-size: 18px;
    margin: 0;
    color: ${theme.color.gray};
    margin-bottom: 12px;
  }

  .modal-contents {
    overflow-y: scroll;
  }
`;

export const sizes = {
  normal: css`
    width: 400px;
  `,
  fullscreen: css`
    width: 85vw;
    height: 85vh;
  `,
};
