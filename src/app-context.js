import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import initialState from './models/app-state';
import themes from './models/themes';

const AppStateContext = createContext(initialState);
const AppDispatchContext = createContext({ setTheme: () => {} });

const AppProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState(initialState.currentTheme);

  const theme = themes[currentTheme];

  return (
    <AppStateContext.Provider value={{ ...initialState }}>
      <AppDispatchContext.Provider value={{ setTheme }}>
        <ThemeProvider theme={theme}>
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export { AppProvider, AppStateContext, AppDispatchContext };
