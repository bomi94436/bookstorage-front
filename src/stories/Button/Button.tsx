import { SerializedStyles } from '@emotion/react';
import React from 'react';
import { iconOnlySizes, iconOnlyStyle, sizes, style, themes } from './Button.styles';

export type ButtonProps = {
  /** 버튼의 생김새를 설정합니다. */
  theme: keyof typeof themes;
  /** 버튼의 크기를 설정합니다. */
  size: keyof typeof sizes;
  /** 버튼의 라벨을 설정합니다. */
  label?: string;
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** 버튼에 css 추가 시 className으로 적용됨 */
  className?: string;
  /** 버튼 안의 내용(텍스트 제외) */
  children?: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  theme,
  size,
  label,
  disabled,
  width,
  iconOnly,
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      className={className ?? ''}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {label && <span>{label}</span>}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

export default Button;
