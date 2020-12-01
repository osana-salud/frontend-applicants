import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState({});

  const getUser = (data) => {
    setUser(data);
  };

  return (
    <Router>
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home getUser={getUser}/>} />
      <Route exact path="/user/:userId" render={() => <User data={user}/>} />
    </Router>
  );
}

export default App;
