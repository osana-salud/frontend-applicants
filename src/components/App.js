import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import SearchForm from './FORM/SearchForm'
import UserData from './USERS/UserData'

function App() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/:user" component={UserData} />
                    <Route path="/" component={SearchForm} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
