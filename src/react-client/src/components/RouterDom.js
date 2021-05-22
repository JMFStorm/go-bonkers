import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Search from "../pages/Search";
import Register from "../components/Register";
import ViewLocations from "../pages/ViewLocations";
import NotFound from "../pages/NotFound";
import Header from "./Header";
import ViewDetails from "./ViewDetails";
import UserProfile from "../pages/UserProfile";
import Footer from "./Footer";
import Tiimi from "./Tiimi";

const RouterDom = () => {
  return (
    <div className={"container"}>
      <Router>
        {/*{process.env.NODE_ENV === "development" && <NavbarDebug />}*/}

        <Header />
        {/*<img src={frontpageImage}></img>*/}

        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/locations">
            <ViewLocations />
          </Route>

          <Route path="/details">
            <ViewDetails />
          </Route>

          <Route path="/user-profile">
            <UserProfile />
          </Route>

          <Route path="/tiimi">
            <Tiimi />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default RouterDom;
