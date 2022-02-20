import React from 'react'
import { iconOnlySizes, style } from './Image.styles'

export type ImageProps = {
  src: string
  width?: string
  height?: string
  round?: boolean
  iconOnlySize?: keyof typeof iconOnlySizes
}

const Image = ({ src, width, height, round, iconOnlySize }: ImageProps) => {
  return (
    <img
      src={src}
      alt=""
      css={[
        style,
        width && { width },
        height && { height },
        round && { borderRadius: '60%' },
        iconOnlySize && iconOnlySizes[iconOnlySize],
      ]}
    />
  )
}

Image.defaultProps = {}

export default Image
