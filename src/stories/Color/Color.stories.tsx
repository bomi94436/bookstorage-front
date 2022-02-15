import { palette } from '@styles/theme';
import Color from './Color';
import React from 'react';

export default {
  title: 'components/Color',
  component: Color,
};

export const color = () => {
  return Object.keys(palette).map((name) => (
    <>
      <Color name={name} color={palette[name as keyof typeof palette]} />
      <br />
    </>
  ));
};

color.storyName = 'Default';
