import { css } from '@emotion/react';

export type AlignType = 'flex-start' | 'center' | 'flex-end';

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼의 가로정렬 */
  rowAlign?: AlignType;
  /** 버튼의 세로정렬 */
  colAlign?: AlignType;
  /** 버튼과 버튼 사이의 간격을 설정합니다. */
  gap: number | string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /** 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
const ButtonGroup = ({
  direction,
  rowAlign,
  colAlign,
  children,
  gap,
  className,
}: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rowAlign && alignStyle(direction, 'row', rowAlign),
        colAlign && alignStyle(direction, 'column', colAlign),
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '5',
};

// direction 에 따라 margin-left 또는 margin-top 설정
const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    '*:not(span) + *:not(span)': {
      [marginType]: gap,
    },
  });
};

const alignStyle = (
  direction: 'row' | 'column',
  alignDirection: 'row' | 'column',
  align: string
) => {
  const directionType = direction === alignDirection ? 'justify-content' : 'align-items';

  return css({
    [directionType]: align,
  });
};

export default ButtonGroup;
