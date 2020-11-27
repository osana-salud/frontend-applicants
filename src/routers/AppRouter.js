import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import { SearchScreen } from "../components/SearchScreen/SearchScreen";
import { UserScreen } from "../components/UserScreen/UserScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchScreen} />
        <Route exact path="/:service/:username" component={UserScreen} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
