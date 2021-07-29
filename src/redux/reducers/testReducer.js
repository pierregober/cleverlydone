import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function test(state = initialState.test, action) {
  switch (action.type) {
      case types.GET_USER_ALIAS_SUCCESS:
      return {
        ...state,
        test: action.test,
      };

    default:
      return state;
  }
}

export default test;