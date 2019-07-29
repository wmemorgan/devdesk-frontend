import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizing.l};
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #454f4f;
  }  
`;

export default GlobalStyle;
