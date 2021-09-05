import ToggleThemeButton from './toggle theme button/ToggleThemeButton';
import { useSelector } from 'react-redux';

function Header({ toggleTheme }) {
  const theme = useSelector(state => state.theme);

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
