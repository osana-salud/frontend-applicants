import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route
} from 'react-router-dom';

import GithubList from '../views/containers/GithubList/main';
import LandingPage from '../views/containers/LandingPage/main';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route 
						path='/landingPage'
						component={ LandingPage }
					/>
					<Route 
						path='/githubList'
						component={ GithubList }
					/>
					<Redirect to='/landingPage'/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
