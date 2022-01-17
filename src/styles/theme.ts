import { Theme } from '@emotion/react';

export const size = {
  largest: 1200, // 1200px
  large: 900, // 900px
  medium: 600, // 600px
  small: 500, // 500px
  smallest: 400, // 400px
};

const color: Theme['color'] = {
  main: '#3d6e59',
  mainHover: '#a1b2aa',
  black: '#343a40',
  lightBlack: '#5f666e',
  gray: '#777e85',
  semiLightGray: '#cad0d9',
  lightGray: '#e9edf2',
  semiWhite: '#f7f8fd',
  white: '#ffffff',
};

export const theme: Theme = {
  color,
  border: {
    color: color.semiLightGray,
    radius: '10px',
  },
  mq: {
    // media query
    laptop: `@media only screen and (min-width: ${size.largest}px)`,
    tablet: `@media only screen and (min-width: ${size.large}px)`,
    mobile: `@media only screen and (min-width: ${size.small}px)`,
  },
};
