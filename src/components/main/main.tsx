import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { localPath } from '../../constantes';
import Footer from '../footer/footer';
import Header from '../header/header';
import Home from '../home/home';

const main = () => {
  return (
    <div style={{ paddingRight: '30%', paddingLeft: '30%'  }}>
      <Router basename="/"  >
        <Header></Header>
        <Switch  >
          <Route exact path={localPath.ROOT} render={(props) => <Home />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  )
}
export default main;
