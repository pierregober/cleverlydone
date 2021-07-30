import React, { Suspense } from "react";

import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/shared/navbar/Nav";
import Footer from "./components/shared/footer/Footer";
import Landing from "./components/landing/Landing";

//Vendor
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Spinner } from "@blueprintjs/core";

//Routes
import AppRoutes from "./routes/AppRoutes";

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      {isAuthenticated ? <Nav /> : <></>}
      <Suspense fallback={<Spinner />}>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to={"/Home"} /> : <Landing />}
        </Route>
        <AppRoutes />
      </Suspense>
      {isAuthenticated ? <Footer /> : <></>}
    </Router>
  );
}

export default App;
