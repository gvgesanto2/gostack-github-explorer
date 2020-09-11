import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppLayout, AppContent } from './App.styles';

import GlobalStyles from '../styles/global.styles';
import theme from '../styles/themes/primary.theme';

import Routes from '../routes';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

const App: React.FC = () => {
  console.log('@@App/rendered');
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Header />
        <Sidebar />

        <AppContent>
          <Routes />
        </AppContent>
      </AppLayout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
