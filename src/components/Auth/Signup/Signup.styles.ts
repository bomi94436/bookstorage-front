import { css } from '@emotion/react';

export const style = css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const content = css`
  min-width: 300px;
`;

export const field = css`
  margin-bottom: 1rem;

  & > * {
    margin-top: 0.5rem;
  }
`;

export const loginLink = css`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
