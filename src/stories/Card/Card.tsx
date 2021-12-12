import React from 'react';
import { activeCard, content, image, style } from './Card.styles';

export type CardProps = {
  imgSrc: string;
  children?: React.ReactNode;
  active?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
};

const Card = ({ imgSrc, children, active, onClick }: CardProps) => {
  return (
    <button
      css={[style, active && activeCard]}
      className={`${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <div css={[image(imgSrc)]} />

      <div css={[content]}>{children}</div>
    </button>
  );
};

export default Card;
