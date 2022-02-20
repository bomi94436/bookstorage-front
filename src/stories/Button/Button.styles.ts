import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const style = css`
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background: ${theme.color.main};
  color: ${theme.color.white};
  border-radius: ${theme.border.radius};
  line-height: 1;
  font-weight: 600;
  text-decoration: none;

  svg {
    width: 1em;
  }
  /* *:first-of-type:nth-last-of-type(2), */

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
`

export const themes = {
  primary: css`
    background: ${theme.color.main};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.main};
  `,

  secondary: css`
    background: ${theme.color.white};
    color: ${theme.color.main};
    border: 1px solid ${theme.color.main};
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
    border: 1px solid ${theme.color.white};
    &:hover:enabled {
      filter: brightness(100%);
      color: ${theme.color.lightBlack};
    }
    &:active:enabled {
      filter: brightness(95%);
      background-color: ${theme.color.lightGray};
    }
  `,
  quaternary: css`
    background: ${theme.color.white};
    color: ${theme.color.gray};
    border: 1px solid ${theme.color.white};
    &:hover:enabled {
      filter: brightness(100%);
      background-color: ${theme.color.lightGray};
    }
    &:active:enabled {
      filter: brightness(95%);
    }
  `,
}

export const sizes = {
  small: css`
    height: 1.75rem; // 28px
    font-size: 12px;
    padding: 0 0.875rem;
    & > :not(span) {
      margin-right: 0.5em;
    }
  `,
  medium: css`
    height: 2.5rem; // 40px
    font-size: 14px;
    padding: 0 1rem;
    & > :not(span) {
      margin-right: 1em;
    }
  `,
  large: css`
    height: 3rem; // 48px
    font-size: 18px;
    padding: 0 1.5rem;
    & > :not(span) {
      margin-right: 1.2em;
    }
  `,
}

export const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg,
  div,
  img {
    margin: 0;
  }
`

export const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  large: css`
    width: 3rem;
  `,
}
