import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/user/:userId" render={() => <User />} />
    </Router>
  );
}

export default App;
