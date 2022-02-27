import React from 'react'
import { activeCard, content, style } from './Card.styles'
import { Image } from '@stories'

export type CardProps = {
  imgSrc: string
  children?: React.ReactNode
  active: boolean
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void
}

const Card = ({ imgSrc, children, active, onClick }: CardProps) => {
  return (
    <div
      css={[style, active && activeCard]}
      className={`${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <Image src={imgSrc} />

      <div css={[content]}>{children}</div>
    </div>
  )
}

Card.defaultProps = {
  active: false,
}

export default Card
