import * as types from "./actionTypes";

export function updateAuthAction(bool) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_AUTH_SUCCESS,
      bool,
    });
}
