import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* Redux Integration */
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.href = process.env.REACT_APP_REDIRECT_URL
//   );
// };
// // Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// // for a full list of the available properties on the provider
// const config = getConfig();

//Might have to do it this way for speed
//Mobile app redirect
// if (window.innerWidth < 769 && process.env.NODE_ENV === "production") {
//   window.location.href =
//     "https://app.imstools.us" +
//     window.location.pathname +
//     window.location.search;
// }

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root"),
);
