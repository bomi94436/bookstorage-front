import { theme } from '@styles/theme'
import { colors, sizes, bolded } from './Text.styles'

export type TextProps = {
  /** 텍스트의 크기를 설정합니다. */
  size: keyof typeof sizes
  /** 텍스트의 색을 설정합니다. */
  color: keyof typeof colors
  /** 텍스트를 굵게할지를 결정합니다. */
  bold: boolean
  /** input과 함께 사용할 때 필수요소임을 표시합니다. */
  required: boolean
  /** 텍스트 내용 */
  children: React.ReactNode
}

const Text = ({ size, color, bold, required, children }: TextProps) => {
  return (
    <p css={[colors[color], sizes[size], bold && bolded]}>
      {children}
      {required && <span style={{ color: theme.color.red }}> *</span>}
    </p>
  )
}

Text.defaultProps = {
  size: 'medium',
  color: 'black',
  bold: false,
  required: false,
  children: 'test',
}

export default Text
