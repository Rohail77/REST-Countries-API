import React, { useState } from 'react';
import AppRouter from './AppRouter';
import Header from './common/header/Header';

export const ThemeContext = React.createContext();

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

function ThemeProducer() {
  const toggleTheme = () => {
    const newTheme = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || themes.LIGHT
  );

  return (
    <div className={`text-color--${theme}-theme bg--${theme}-theme top-parent`}>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <AppRouter />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProducer;
