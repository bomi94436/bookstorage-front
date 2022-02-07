import { Global, css } from '@emotion/react';
import { theme } from '@styles/theme';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  body {
    background-color: ${theme.color.semiWhite};
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
