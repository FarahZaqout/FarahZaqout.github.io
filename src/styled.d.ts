import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      mainLight: string;
      secondaryLight: string;
      mainDark: string;
      secondaryDark: string;
    };
  }
}
