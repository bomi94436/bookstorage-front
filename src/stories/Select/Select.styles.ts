import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const list = css`
  position: absolute;

  min-width: 120px;
  background-color: ${theme.color.white};
  padding: 8px 0;
  box-sizing: content-box;

  border: 1px solid ${theme.border.color};
  border-radius: ${theme.border.radius};

  display: flex;
  flex-direction: column;
`

export const item = css`
  background-color: ${theme.color.white};
  border: none;
  padding: 8px 10px;
  flex-grow: 1;

  :hover {
    background-color: ${theme.color.lightGray};
    cursor: pointer;
  }
`
