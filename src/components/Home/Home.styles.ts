import { css } from '@emotion/react'
import { theme } from '@styles/theme'

export const style = css`
  overflow: auto;
  display: flex;
  justify-content: center;
`

export const leftSide = css`
  display: flex;
  flex-direction: column;
  > :first-of-type {
    margin-bottom: 1rem;
  }
`

export const card = css`
  width: 40vw;

  border: 1px solid ${theme.border.color};
  border-radius: ${theme.border.radius};
  background: white;

  header {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
  }

  footer {
    display: flex;
    padding: 1.2rem;
  }
`

export const tag = css`
  margin-bottom: 0.5rem;
`

export const cardHeaderUserInfo = css`
  display: flex;
`

export const cardHeaderNickname = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 1rem;
`

export const footerItem = css`
  display: flex;
  align-items: center;

  *:first-child {
    margin-right: 0.5rem;
  }
`

export const content = css`
  padding: 1.2rem;
  color: ${theme.color.black};
`
