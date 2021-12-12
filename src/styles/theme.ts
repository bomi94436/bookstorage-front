import { Theme } from '@emotion/react';

export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
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
  defaultSize: {
    button: '80px',
  },
  mq: {
    // media query
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};
