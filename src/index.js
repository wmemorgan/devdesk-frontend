import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styled-components/theme';
import GlobalStyle from './styled-components/GlobalStyles';
import App from './App';

// implement withRouter HOC?

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
