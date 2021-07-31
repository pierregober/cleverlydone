import { lazy } from "react";
import { Route } from "react-router-dom";

/* User Screens */
const Home = lazy(() => import("../components/home/views/Home"));
const Interview = lazy(() => import("../components/interview/views/Interview"));
const Investing = lazy(() => import("../components/investing/views/Investing"));
const Coding = lazy(() => import("../components/coding/views/Coding"));
const Productivity = lazy(() =>
  import("../components/productivity/views/Productivity"),
);

const appRoutes = () =>
  [
    {
      Component: Coding,
      name: "Coding",
      path: "/coding",
      title: "Coding",
    },
    {
      Component: Home,
      name: "Home",
      path: "/home",
      title: "Home",
    },
    {
      Component: Interview,
      name: "Interview",
      path: "/interview",
      title: "Interview",
    },
    {
      Component: Investing,
      name: "Investing",
      path: "/investing",
      title: "Investing",
    },

    {
      Component: Productivity,
      name: "Productivity",
      path: "/productivity",
      title: "Productivity",
    },
  ].map(({ Component, ...details }, i) => (
    <Route
      exact
      key={`cd-route-${i}`}
      path={details.path}
      render={(props) => <Component helmet={details} {...props} />}
    />
  ));

export default appRoutes;
