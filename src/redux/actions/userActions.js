import * as types from "./actionTypes";

export function updateUserAction(details) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_USER_SUCCESS,
      details,
    });
}

export function updateUserPerferncesAction(preferences) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_USER_PREFERNCES_SUCCESS,
      preferences,
    });
}

export function updateUserCheckAction(checked) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_USER_CHECKED_SUCCESS,
      checked,
    });
}

/* USER TRANSACTIONS*/
export function updateUserTransactionsAction(data) {
  return (dispatch, getState) =>
    dispatch({
      type: types.UPDATE_USER_TRANSACTION_SUCCESS,
      data,
    });
}

/* BELOW WAS FOR TESTING */

export function getUserNameAction(name) {
  return (dispatch, getState) =>
    dispatch({
      type: types.GET_USER_NAME_SUCCESS,
      name,
    });
}

export function getUserAliasAction(alias) {
  return (dispatch, getState) =>
    dispatch({
      type: types.GET_USER_ALIAS_SUCCESS,
      alias,
    });
}
