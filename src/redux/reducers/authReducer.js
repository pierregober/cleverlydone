import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.UPDATE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.bool,
      };

    default:
      return state;
  }
}

export default auth;
