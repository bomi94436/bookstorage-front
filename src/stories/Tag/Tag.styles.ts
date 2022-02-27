import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const style = css`
  border: none;
  border-radius: ${theme.border.radius};
  background: ${theme.color.lightGray};
  color: ${theme.color.gray};
  padding: 0.25rem 0.6rem;
  font-weight: 700;
  font-size: 0.75rem;
`
