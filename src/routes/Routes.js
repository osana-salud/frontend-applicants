import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import CardInfo from '../components/cardInfo/CardInfo';

const Routes = () => {
  	return (
		<Switch>
    		<Route exact path='/' component={Home} />
			<Route exact path='/user:nameUser' component={CardInfo} />
		</Switch>
  	);
}

export default Routes;
