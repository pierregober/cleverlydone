import { combineReducers } from "redux";

import auth from "./authReducer";
import user from "./userReducer";
import test from "./testReducer";

const rootReducer = combineReducers({
  auth,
  user,
  test,
});

export default rootReducer;
