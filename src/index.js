import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 0,
        lineHeight: 2.5,
        paddingBottom: 0,
      },
      head: {
        paddingTop: 12,
        paddingBottom: 12,
      }
    }
  }
})


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));


