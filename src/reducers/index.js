import themeReducer from './theme/themeReducer';
import countriesReducer from './countries/countriesReducer';
import activeHomePageReducer from './pagination/activeHomePageReducer' 
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  activeHomePage: activeHomePageReducer,
});

export default allReducers;
