import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './dashboard/Main';
import Test from './dashboard/Test';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>

              <Route exact component={Test} path="/test"/>
              <Route component={Main}/>
            </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
