import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { localPath } from '../../constantes';
import Footer from '../footer/footer';
import Header from '../header/header';
import Home from '../home/home';
import SearchUserGit from '../search-user-git/searchUserGit'

const main = () => {
  return (
    <div style={{ paddingRight: '30%', paddingLeft: '30%'  }}>
      <Router basename="/"  >
        <Header></Header>
        <Switch  >
          <Route exact path={localPath.ROOT} render={(props) => <Home />} />
          <Route exact path={localPath.SEARCH_GIT} render={(props) => <SearchUserGit />} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  )
}
export default main;
