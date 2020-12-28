import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import themeDefault from '../components/particles/themeDefault';
import GlobalStyles from '../components/particles/globalStyles';

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
