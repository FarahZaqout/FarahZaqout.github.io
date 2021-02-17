import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      mainLight: string;
      secondaryLight: string;
      mainDark: string;
    };

    backgrounds: {
      light: string;
      dark: string;
      secondary: string;
    };
  }
}
