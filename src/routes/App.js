import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';

import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';

import Home from '../components/pages/Home';

import ApiState from '../actions/githubActions';

import Navbar from '../components/Navbar';

const App = () => {
  return (
    <ApiState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApiState>
  );
};

export default App;
