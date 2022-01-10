import React from 'react';
import { backgroudImage, iconOnlySizes, style } from './Image.styles';

export type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  round?: boolean;
  iconOnlySize?: keyof typeof iconOnlySizes;
};

const Image = ({ src, width, height, round, iconOnlySize }: ImageProps) => {
  return (
    <div
      css={[
        style,
        backgroudImage(src),
        width && { width },
        height && { height },
        round && { borderRadius: '60%' },
        iconOnlySize && iconOnlySizes[iconOnlySize],
      ]}
    />
  );
};

Image.defaultProps = {};

export default Image;
