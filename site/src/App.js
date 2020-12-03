import React, {useState} from 'react';
  
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Formulario from './components/Formulario';
import CardsUsers from './components/CardsUsers';
import CardUser from './components/CardUser';

function App() {

    const[value, setValue] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const [users, setUsers] = useState([]);
    const [click, setClick] = useState(false);
    const [userName, setUserName] = useState('');
    const [service, setService] = useState('github');

  return (
    <Router>
      <div className="App">
        <h1 className="title">Buscador de usuarios</h1>
        <Switch>
          <Route exact path="/">
            <Formulario 
            value={value}
            setValue={setValue}
            errorInput={errorInput}
            setErrorInput = {setErrorInput}
            users={users}
            setUsers={setUsers}
            service = {service}
            setService={setService}
          />
          <CardsUsers 
              users= {users}
              click={click}
              setClick={setClick}
              setUserName={setUserName}
              service={service}
            >
          </CardsUsers>
          </Route>
          <Route path={`/user/${service}/${userName}`}>
            <CardUser 
              userName = {userName}
              service = {service}
            />
          </Route>
        </Switch>
        {click && <Redirect to={`/user/${service}/${userName}`} />}

      </div>
    </Router>

  );
}

export default App;