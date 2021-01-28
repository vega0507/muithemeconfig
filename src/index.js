import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Paper style={{height:"100vh", width:"100vw", }}>
      <App />
    </Paper>
  </ThemeProvider>,
  document.getElementById('root')
);


