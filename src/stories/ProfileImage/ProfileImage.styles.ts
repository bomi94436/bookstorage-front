import { css } from '@emotion/react'

export const style = css`
  display: inline-block;
  border-radius: 60%;
`

export const backgroudImage = (url: string) => css`
  background-image: url(${url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const sizes = {
  small: css`
    width: 12px;
    height: 12px;
  `,
  medium: css`
    width: 14px;
    height: 14px;
  `,
  large: css`
    width: 18px;
    height: 18px;
  `,
}
