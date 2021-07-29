import * as types from "./actionTypes";

export function updateTestAction(name) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_TEST_SUCCESS,
      name,
    });
}

