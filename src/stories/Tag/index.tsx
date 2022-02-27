import { style } from './Tag.styles'

export type TagProps = {
  children?: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
  return <div css={style}>{children}</div>
}

export default Tag
