import { css } from '@emotion/react'

export const style = css`
  display: flex;
  flex-direction: column;
`

export const content = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 0rem;

  margin: 2rem 0;
`

export const contentItem = css`
  display: flex;

  > :first-of-type {
    margin-right: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const writeButtonWrapper = css`
  position: relative;
`
