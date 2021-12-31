import { colors, sizes, bolded } from './Text.styles';

export type TextProps = {
  /** 텍스트의 크기를 설정합니다. */
  size: keyof typeof sizes;
  /** 텍스트의 색을 설정합니다. */
  color: keyof typeof colors;
  /** 텍스트를 굵게할지를 결정합니다. */
  bold: boolean;
  /** 텍스트 내용 */
  children: React.ReactNode;
};

const Text = ({ size, color, bold, children }: TextProps) => {
  return <span css={[colors[color], sizes[size], bold && bolded]}>{children}</span>;
};

Text.defaultProps = {
  size: 'medium',
  color: 'black',
  bold: false,
  children: 'test',
};

export default Text;
