import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          about
          </Route>
        <Route path="/">
          <HomePage/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
