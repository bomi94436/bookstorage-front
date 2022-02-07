import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const inputWrapper = css`
  display: flex;
  align-items: center;

  border: 1px solid ${theme.border.color};
  border-radius: ${theme.border.radius};
  padding: 0.75rem 1rem;
  background-color: white;

  svg {
    margin-right: 0.5rem;
  }
`;

export const style = css`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
`;
