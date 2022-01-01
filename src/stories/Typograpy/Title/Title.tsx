import { levels, style } from './Title.styles';

export type TitleProps = {
  /** 제목의 크기를 결정합니다.(h1 ~ h5) */
  level: '1' | '2' | '3' | '4' | '5';
  /** margin custom 설정 */
  margin?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  /** 제목 안의 내용 */
  children: React.ReactNode;
};

const Title = ({ level, margin, children }: TitleProps) => {
  const css = [
    style,
    levels[level],
    margin?.top && {
      marginTop: margin?.top,
    },
    margin?.right && {
      marginRight: margin?.right,
    },
    margin?.bottom && {
      marginBottom: margin?.bottom,
    },
    margin?.left && {
      marginLeft: margin?.left,
    },
  ];

  switch (level) {
    case '1':
      return <h1 css={css}>{children}</h1>;
    case '2':
      return <h2 css={css}>{children}</h2>;
    case '3':
      return <h3 css={css}>{children}</h3>;
    case '4':
      return <h4 css={css}>{children}</h4>;
    case '5':
      return <h5 css={css}>{children}</h5>;
  }
};

Title.defaultProps = {
  level: '1',
  children: 'test',
};

export default Title;
