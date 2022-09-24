import React from 'react';
import { useSelector } from 'react-redux';
import AppRouter from './AppRouter';
import Header from './common/header/Header';

export const ThemeContext = React.createContext();

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

function ThemeProducer() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`text-color--${theme}-theme bg--${theme}-theme top-parent`}>
      <ThemeContext.Provider value={theme}>
        <Header />
        <AppRouter />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProducer;
