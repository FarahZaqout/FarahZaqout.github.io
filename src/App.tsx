import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { LandingPage } from './components';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
