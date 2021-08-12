import ToggleThemeButton from './toggle theme button/ToggleThemeButton';
import { ThemeContext } from '../../ThemeProducer';
import { useContext } from 'react';

function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <header className={`elements-bg--${theme}-theme`}>
      <div className='wrapper'>
        <div className='flex'>
          <h2>Where in the world?</h2>
          <ToggleThemeButton toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
