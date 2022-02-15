import React from 'react';
import { style, colorBox } from './Color.styles';
import { Button } from '@stories';

export type ColorProps = {
  name: string;
  color: string;
};

const Color = ({ name, color }: ColorProps) => {
  return (
    <div css={style}>
      <div css={[colorBox, { background: color }]} />
      <Button
        label={name}
        theme="quaternary"
        onClick={() => {
          const textArea = document.createElement('textarea');
          textArea.value = color;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
          alert(`${name} 색상이 복사되었습니다.`);
        }}
      />
    </div>
  );
};

Color.defaultProps = {
  active: false,
};

export default Color;
