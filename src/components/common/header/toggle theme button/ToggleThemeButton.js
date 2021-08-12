import { useContext } from 'react';
import { themes, ThemeContext } from '../../../ThemeProducer';

function ToggleThemeButton({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <button className='toggle-theme-btn' onClick={toggleTheme}>
      <img
        src={`/resources/images/${theme === themes.LIGHT ? 'moon' : 'sun'}.svg`}
        alt='moon'
      />
      <span>{theme === themes.LIGHT ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}

export default ToggleThemeButton;
