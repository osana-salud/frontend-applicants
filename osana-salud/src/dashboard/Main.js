import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import osanaLogo from '../assets/osana-logo.png';
import buttonSearch from '../assets/button-search.png'; 
import userService from '../services/userService';
import ReactPaginate from 'react-paginate';

function Main(){

const [userName, setUserName] = useState('');
const [userFind, setUserFind] = useState('');
const [userList, setUserList] = useState('');

  const getUsersList = () => {
    userService.getUsersList(userList).
    then(res => {
      if(res.status){
        console.log(res.data);
        setUserList(res.data)
      } else {
        alert('Fallo');
      }
    })
  }

  const searchUser = async () => {
    await userService.getUser(userName).
    then(res => {
      if(res.status){
        console.log(res.data);
        setUserFind(res.data);
      } else {
        alert('No se consiguio usuario');
        setUserFind('');
      }
      
    })
  }

  const handleInput = event => {
    setUserName(event.target.value);
  }



        return (
            <div className="container">
                <section id="logo"><img id="osanaLogo" src={osanaLogo}/></section>
                <header id="buscador">
            <input
              placeholder="Buscar Acá..."
              type="text"
              placeholder='Ingrese nombre usuario' 
              onChange={handleInput}
            />
            <button className="imgButton" onClick={searchUser}><img src={buttonSearch}/></button>
            <button className="Button" onClick={getUsersList}>Lista de Usuarios</button>
          </header>
          <section>
              <div className="userList">
                  
                    <li>{userFind ? <a href={userFind.html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userFind.name}`}</h2>
                    <h2 className="space">{`ID Usuario:${userFind.id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}
                    </li>

                     <li>{userList ? <a href={userList.data[1].html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userList.data[1].login}`}</h2>
                    <h2 className="space">{`ID Usuario:${userList.data[1].id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}</li>
                    <li>{userList ? <a href={userList.data[2].html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userList.data[2].login}`}</h2>
                    <h2 className="space">{`ID Usuario:${userList.data[2].id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}</li>
                    <li>{userList ? <a href={userList.data[3].html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userList.data[3].login}`}</h2>
                    <h2 className="space">{`ID Usuario:${userList.data[3].id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}</li>
                    <li>{userList ? <a href={userList.data[4].html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userList.data[4].login}`}</h2>
                    <h2 className="space">{`ID Usuario:${userList.data[4].id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}</li>
                    <li>{userList ? <a href={userList.data[5].html_url} target="_blank">
                    <h2 className="space">{`Nombre de Usuario:${userList.data[5].login}`}</h2>
                    <h2 className="space">{`ID Usuario:${userList.data[5].id}`}</h2>
                    <h2 className="space">Ver Perfil</h2>
                    </a> : null}</li>
                    
                </div>
          </section>
            </div>
        );

}

export default Main;