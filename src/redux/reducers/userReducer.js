import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function user(state = initialState.user, action) {
  switch (action.type) {
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        details: action.details,
      };
    case types.GET_USER_NAME_SUCCESS:
      return {
        ...state,
        name: action.name,
      };
    case types.GET_USER_ALIAS_SUCCESS:
      return {
        ...state,
        alias: action.alias,
      };

    case types.UPDATE_USER_CHECKED_SUCCESS:
      return {
        ...state,
        transactions: action.data,
      };

    case types.UPDATE_USER_TRANSACTION_SUCCESS:
       return {
        ...state,
        transactions: action.data,
      };

    default:
      return state;
  }
}

export default user;
