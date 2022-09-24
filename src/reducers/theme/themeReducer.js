import { themes } from '../../components/ThemeProducer';
import actionTypes from '../../actions/types';

const initialState = localStorage.getItem('theme') || themes.LIGHT;

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return (state = action.payload);
    default:
      return state;
  }
}

export default themeReducer;
