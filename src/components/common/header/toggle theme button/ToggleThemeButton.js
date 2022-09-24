import { themes} from '../../../ThemeProducer';
import { toggleTheme } from '../../../../actions/theme/toggleTheme';
import { useDispatch, useSelector } from 'react-redux';

function ToggleThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <button className='toggle-theme-btn' onClick={() => dispatch(toggleTheme())}>
      <img
        src={`/resources/images/${theme === themes.LIGHT ? 'moon' : 'sun'}.svg`}
        alt='moon'
      />
      <span>{theme === themes.LIGHT ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}

export default ToggleThemeButton;
