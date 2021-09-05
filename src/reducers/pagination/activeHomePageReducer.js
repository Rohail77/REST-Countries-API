import actionTypes from "../../actions/types";

const initialState = 1;

function activeHomePageReducer(state=initialState, action) {
  switch(action.type) {
    case actionTypes.ACTIVATE_PAGE:
      return state = action.payload
    default:
      return state;
  }
}

export default activeHomePageReducer;