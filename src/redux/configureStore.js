import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default function configureStore(initialState) {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
