import actionTypes from '../../actions/types';

const initialState = [];

export default function countriesReducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}
