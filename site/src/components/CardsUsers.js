import React from 'react'

import { BrowseRouter, Route, Redirect } from "react-router-dom";

import './cardsUsers.css'

const CardsUsers = ({users, click, setClick, setUserName, service})=>{

    const setearValores = (user)=>{
        setClick(true);
        if(service == 'github'){
            setUserName(user.login);
        }
        else{
            setUserName(user.username)
        }
        
    }

    return(
        <div className='contenedor-usuarios'>
           {users.map(user=>(
                /* id, nombre de usuario y el servicio al que corresponde. */
                <a 
                key={user.id}
                onClick={(e)=>setearValores(user)}
                >
                    <div>
                        <label>Id del usuario:</label><span> {user.id}</span>
                    </div>
                    <div>
                        <label>Nombre de usuario: </label><span>{
                        service=='github'
                        ?
                        user.login
                        :
                        user.username
                    }</span>
                    </div>
                    <div><label>Servicio:</label><span> {service}</span></div>
                    
                </a>
            ))}
            
        </div>
    )
}

export default CardsUsers;