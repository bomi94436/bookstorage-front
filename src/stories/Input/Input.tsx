import { theme } from '@styles/theme';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { inputWrapper, style } from './Input.styles';

export type InputProps = {
  /** placeholder label을 설정합니다. */
  placeholder: string;
  /** input을 사용하는 곳을 설정합니다. */
  use?: 'search';
  /** input의 너비를 임의로 설정합니다. (default: 15rem) */
  width?: 'default' | string;
  /** input의 type */
  type?: 'text' | 'number' | 'password';
  /** input의 value */
  value?: string | number;
  /** input의 value가 변경되었을 때 호출할 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, use, width, type, value, onChange }: InputProps) => {
  return (
    <div css={[inputWrapper, width === 'default' ? { width: '15rem' } : { width }]}>
      {use === 'search' && <FaSearch color={theme.color.semiLightGray} />}

      <input
        type={typeof value === 'number' ? 'number' : type}
        css={[style]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Input;
