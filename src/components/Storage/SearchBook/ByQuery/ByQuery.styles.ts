import { css } from '@emotion/react'

export const style = css`
  display: flex;
  flex-direction: column;
`

export const searchForm = css`
  display: flex;
  margin-top: 1rem;

  > :first-of-type {
    margin-right: 0.5rem;
  }
`

export const content = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 0rem;

  margin: 1.5rem 0;
`

export const contentItem = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
