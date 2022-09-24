import actionTypes from "../types";

function activatePage(num) {
  return {
    type: actionTypes.ACTIVATE_PAGE,
    payload: num
  }
}

export default activatePage;