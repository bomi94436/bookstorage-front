import { css } from '@emotion/react'

export const style = css`
  display: flex;
  flex-direction: column;
`

export const content = css`
  display: flex;
  justify-content: space-between;
  height: 100%;

  & > *:not(:last-child) {
    margin-right: 18px;
  }
`

export const contentRight = css`
  width: 30%;
`
