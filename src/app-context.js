import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyle';
import initialState from './models/app-state';
import themes from './models/themes';

const AppStateContext = createContext(initialState);
// const AppDispatchContext = createContext(); //TODO: Wire up and find out why this is it's own context

const AppProvider = ({children}) => {
  const [currentTheme, setTheme] = useState(initialState.currentTheme);

  const theme = themes[currentTheme];

  return (
    <AppStateContext.Provider value={{...initialState}}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </AppStateContext.Provider>
  )
}

export { AppProvider, AppStateContext};