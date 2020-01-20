import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { addDecorator, configure } from '@storybook/react';
import { createBrowserHistory } from 'history';
import { irsiTheme } from '../src/themes';

const history = createBrowserHistory();

addDecorator(storyFn => (
  <ThemeProvider theme={irsiTheme}>
    <Router history={history}>{storyFn()}</Router>
  </ThemeProvider>
));

configure([require.context('../src', true, /\.stories\.tsx$/), require.context('../stories', true, /\.stories\.tsx$/)], module);
