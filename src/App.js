import logo from "./logo.svg";
import "./App.css";

import Navbar from "../src/components/shared/navbar/Navbar";

//Vendor
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <AppRoutes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
