import React, {useState, useEffect } from 'react';
import userService from '../services/userService';

const Test = () => {
  const [userName, setUserName] = useState('');
  const [userFind, setUserFind] = useState('');

  const getUsersList = () => {
    userService.getUsersList().
    then(res => {
      if(res.status){
        console.log(res.data);
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

  const showUserFind = () => {
    if(userFind !== ''){
      return (
        <div>
        <p>{userFind.name}</p>
        <img src={userFind.avatar_url}/>
      </div>
      )
    }
  }

  return(
    <div>
      <button onClick={getUsersList}> Traer todos los usuarios </button>
      <div>
        <input type='text' placeholder='Ingrese nombre usuario' onChange={handleInput} />
        <button onClick={searchUser}>Buscar usuario</button> 
      </div>
      {showUserFind()}
    </div>
  )
}
export default Test;