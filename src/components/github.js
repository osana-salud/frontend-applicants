import React, {useState, useEffect} from "react";
import { Form, Card, Icon, Image} from 'semantic-ui-react';
import Swal from "sweetalert2";
import "./Git.css" 

function Github() {
 const [name, setName] = useState('');
 const [userName, setUsername] = useState('');
 const [followers, setFollowers] = useState('');
 const [following, setFollowing] = useState('');
 const [repos, setRepos] = useState('');
 const [avatar, setAvatar] = useState('');
 const [userInput, setUserInput] = useState('');
 const [error, setError] = useState(null);

/// USE EFFECT ///
  useEffect(() => {
   fetch("https://api.github.com/users/example")
   .then(res => res.json())
   .then(data=> {
     setData(data)
   });
  } ,[])
/// USE EFFECT ///

// constante de datos ////
const setData = ({ name, login, followers, following, publicRepos, avatar_url, } ) => {
setName(name)
setUsername(login)
setFollowers(followers)
setFollowing(following)
setRepos(publicRepos)
setAvatar(avatar_url)
}
 /// constante de datos ////
//// HANDLE SEARCH///
const handleSearch = (e) =>{
 setUserInput(e.target.value)

}
//// HANDLE SEARCH///
//// HANDLE SUBMIT ///
if(userInput ==="osana-salud" ){
    Swal.fire(
      'Esta palabra esta bloqueada!',
      'Esta palabra esta bloqueada',
      'error'   )
  }

const handleSubmitGitHub = (e) =>{
  fetch(`https://api.github.com/users/${userInput} ` ) 
  .then(res => res.json())
  .then(data =>{
    if(data.message) {
      setError(data.message)
    }
    else{
      setData(data)
      setError(null);
    }
  setData(data);
  })
}
//// HANDLE SUBMIT ///
  return (
    <div>
    <div className='navbar'> <h1> Buscador de usuarios de GITHUB</h1></div>
    <div className='search'>  
     <Form onSubmit={handleSubmitGitHub}>
          <Form.Group>
            <input  
            placeholder='Buscar  por usuario' 
            name='name'   
            onChange={handleSearch} 
             required
             minLength="4" 
             />
            <Form.Button content='Buscar' />
          </Form.Group>
        </Form></div>
        {error ? (<h1>{error}</h1>): (    <div className="card">  <Card>
    <Image src={avatar}  
       wrapped
        ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{userName}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a href= { `https://github.com/${userInput}?tab=followers` }>
        <Icon name='user' />
       {followers} Seguidores
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href= { `https://github.com/${userInput}?tab=following` }>
        <Icon name='user' />
       {following} Siguiendo
      </a>
    </Card.Content>
    <Card.Content extra>
      <a  href= { `https://github.com/${userInput}?tab=repositories`}>
        <Icon name='user' />
        {repos} Repositorios 
      </a>
    </Card.Content>
  </Card></div>)}
    
    </div>
  );
}

export default Github;
