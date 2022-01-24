import { createGlobalStyle } from 'styled-components';
import { theme } from './lib/styles/theme';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${theme.font.family.secondary || theme.font.family.default};
  }
`;
