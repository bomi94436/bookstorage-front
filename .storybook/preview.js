import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/global';
import { MemoryRouter } from 'react-router';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
