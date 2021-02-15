import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>About</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
