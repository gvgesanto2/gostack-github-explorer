import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global.styles';
import theme from '../styles/themes/primary.theme';

import Routes from '../routes';
import Header from './components/header/header.component';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
