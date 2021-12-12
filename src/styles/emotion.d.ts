import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string;
      mainHover: string;
      black: string;
      lightBlack: string;
      gray: string;
      semiLightGray: string;
      lightGray: string;
      semiWhite: string;
      white: string;
    };
    border: {
      color: string;
      radius: string;
    };
    defaultSize: {
      button: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
