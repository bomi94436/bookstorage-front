import { style } from './Tag.styles'

export type TagProps = {
  children?: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const Tag = ({ children, onClick }: TagProps) => {
  return (
    <button css={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Tag
