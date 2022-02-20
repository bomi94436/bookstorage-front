import React from 'react'
import { sizes, style, backgroudImage } from './ProfileImage.styles'

export type ProfileImageProps = {
  src: string
  width?: string
  height?: string
  size: keyof typeof sizes
}

const ProfileImage = ({ src, width, height, size }: ProfileImageProps) => {
  return (
    <div
      css={[
        style,
        backgroudImage(src),
        width && { width },
        height && { height },
        size && sizes[size],
      ]}
    />
  )
}

ProfileImage.defaultProps = {
  size: 'medium',
}

export default ProfileImage
