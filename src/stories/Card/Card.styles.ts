import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const activeCard = css`
  border: 1px solid ${theme.color.main};
`

export const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* min-width: 100px;
  max-width: 280px; */
  width: 240px;

  overflow: hidden;
  border: 1px solid ${theme.border.color};
  border-radius: ${theme.border.radius};

  :not(.active):hover {
    border: 1px solid ${theme.color.mainHover};
  }
`

export const content = css`
  display: flex;
  flex-direction: column;

  width: calc(100% - 48px);

  padding: 24px;
  border-top: 1px solid ${theme.border.color};
  background-color: ${theme.color.white};
`
