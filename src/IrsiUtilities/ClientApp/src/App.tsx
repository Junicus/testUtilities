import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './AppRouter';

import { configureStore } from './store/configureStore';
import userManager from './store/Auth2/userManager';
import { irsiTheme } from './themes';

const store = configureStore();

console.log(irsiTheme);

export const App: React.FC = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <ThemeProvider theme={irsiTheme}>
        <AppRouter />
      </ThemeProvider>
    </OidcProvider>
  </Provider>
);
