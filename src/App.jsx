import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import './App.css';
import Routes from './Routes';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit',
  },
});

let ContextProviders = ({ providers = [], children }) => {
  return providers.reverse().reduce((_children, provider) => {
    let [Provider, value] = [].concat(provider);
    return (
      <Provider value={value}>
        {_children}
      </Provider>
    );
  }, children);
};

const history = createBrowserHistory();

export default (props) => {
  return (
    <ContextProviders providers={[
    ]}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes history={history}/>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </ContextProviders>
  );
};
