import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background: ${theme.color.main};
  color: ${theme.color.white};
  border-radius: ${theme.border.radius};
  line-height: 1;
  font-weight: 600;
  svg {
    width: 1em;
    margin-right: 1em;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover:enabled {
    filter: brightness(120%);
    cursor: pointer;
  }
  &:active:enabled {
    filter: brightness(95%);
  }
`;

export const themes = {
  primary: css`
    background: ${theme.color.main};
    color: ${theme.color.white};
    svg {
      fill: ${theme.color.white};
    }
  `,

  secondary: css`
    background: ${theme.color.white};
    color: ${theme.color.main};
    border: 2px solid ${theme.color.main};
    svg {
      fill: ${theme.color.main};
    }
    &:hover:enabled {
      filter: brightness(130%);
    }
    &:active:enabled {
      filter: brightness(95%);
    }
  `,

  tertiary: css`
    background: ${theme.color.white};
    color: ${theme.color.black};
    svg {
      fill: ${theme.color.black};
    }
    &:hover:enabled {
      filter: brightness(100%);
      color: ${theme.color.lightBlack};
    }
    &:active:enabled {
      filter: brightness(95%);
      background-color: ${theme.color.lightGray};
    }
  `,
};

export const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 12px;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 14px;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 18px;
    padding: 0 1.5rem;
  `,
};

export const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

export const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  big: css`
    width: 3rem;
  `,
};
