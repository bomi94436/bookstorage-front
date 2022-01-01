import React from 'react';
import { backgroudImage, style } from './Image.styles';

export type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  round?: boolean;
};

const Image = ({ src, width, height, round }: ImageProps) => {
  return (
    <div
      css={[
        style,
        backgroudImage(src),
        width && { width },
        height && { height },
        round && { borderRadius: '60%' },
      ]}
    />
  );
};

Image.defaultProps = {};

export default Image;
