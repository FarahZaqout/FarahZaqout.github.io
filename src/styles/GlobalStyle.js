import { createGlobalStyle } from 'styled-components';
import LeagueSpartan from '../assets/leaguespartan-bold.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: LeagueSpartan;
    src: url(${LeagueSpartan}) format('woff');
  }
  html, body, #root, .App {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: LeagueSpartan;
    background-color: ${({ theme }) => theme.backgrounds.dark};
    color: ${({ theme }) => theme.colors.mainLight};
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
