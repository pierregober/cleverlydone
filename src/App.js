import React, { Suspense } from "react";

//Custom Components
import Nav from "./components/shared/navbar/Nav";
import Footer from "./components/shared/footer/Footer";
import Landing from "./components/landing/Landing";

//Material
import CircularProgress from "@material-ui/core/CircularProgress";

//Vendor
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//Routes
import AppRoutes from "./routes/AppRoutes";

//CSS
import "./App.css";

//Auth
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  //add a function to toggle darkMode

  return (
    <Router>
      {/* <div className="appContainer"> */}
      {isAuthenticated ? <Nav /> : <></>}
      <Suspense fallback={<CircularProgress />}>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to={"/home"} /> : <Landing />}
        </Route>
        <AppRoutes />
      </Suspense>
      {isAuthenticated ? <Footer /> : <></>}
      {/* </div> */}
    </Router>
  );
}

export default App;
