import React from 'react'

import { BrowseRouter, Route, Redirect } from "react-router-dom";



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
        <div>
           {users.map(user=>(
                /* id, nombre de usuario y el servicio al que corresponde. */
                <a 
                key={user.id}
                onClick={(e)=>setearValores(user)}
                >
                    <p>{user.id}</p>
                    <p>{
                        service=='github'
                        ?
                        user.login
                        :
                        user.username
                    }</p>
                    <p>{service}</p>
                    
                </a>
            ))}
            
        </div>
    )
}

export default CardsUsers;