import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user" render={(props) => <User {...props} />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
