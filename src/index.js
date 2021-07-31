import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { getConfiguration } from "./auth/config";
import history from "./utils/history";

/* Redux Integration */
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

//Auth
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : (window.location.href = "http://localhost:3000/home"),
  );
};

const config = getConfiguration();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Auth0Provider>,
  document.getElementById("root"),
);
