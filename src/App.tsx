import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { LandingPage } from './components';

const App: FC = () => {
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    window.screen.orientation.addEventListener('change', () => {
      if (window.screen.orientation.type.includes('landscape')) {
        setLandscape(true);
        // TODO: alert iphone users to switch back to portrait
      }
    });
  }, []);

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
