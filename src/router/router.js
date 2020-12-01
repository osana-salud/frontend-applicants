import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import HomeView from "../components/HomeView/HomeView";
import UserInfo from "../components/UserInfo/UserInfo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route
          exact
          tpath="/user-info/:service/:username"
          component={UserInfo}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
