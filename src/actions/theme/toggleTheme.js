import { themes } from '../../components/ThemeProducer';
import actionTypes from '../types';

function toggleTheme() {
  const newTheme =
    (localStorage.getItem('theme') || themes.LIGHT) === themes.LIGHT
      ? themes.DARK
      : themes.LIGHT;
  localStorage.setItem('theme', newTheme);
  return {
    type: actionTypes.TOGGLE_THEME,
    payload: newTheme,
  };
}

export { toggleTheme };
