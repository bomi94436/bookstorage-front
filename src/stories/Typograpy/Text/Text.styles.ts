import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const sizes = {
  small: css`
    font-size: 0.8rem;
  `,
  medium: css`
    font-size: 1rem;
  `,
  large: css`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  `,
}

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
  red: css`
    color: ${theme.color.red};
  `,
}

export const bolded = css`
  font-weight: bold;
`
