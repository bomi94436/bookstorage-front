import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const style = css`
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .content .content-right {
    width: 30%;
  }

  .content .content-right .content-right-title {
    margin-bottom: 16px;
    color: ${theme.color.black};
  }
`;
