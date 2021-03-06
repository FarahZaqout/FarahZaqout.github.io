import { createGlobalStyle } from 'styled-components';
import LeagueSpartan from '../assets/leaguespartan-bold.woff';
import Cursor from '../assets/images/cursor.svg';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: LeagueSpartan;
    src: url(${LeagueSpartan}) format('woff');
    font-display: swap;
  }
  html, body, #root, .App {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: LeagueSpartan, Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.backgrounds.dark};
    color: ${({ theme }) => theme.colors.mainLight};
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    cursor: url(${Cursor}), auto;
  }
`;

export default GlobalStyle;
