import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CardUser = ({userName, service})=>{

    const [user, setUser] = useState('');
    const [cantSeguidores, setCantSeguidores] = useState(0);
    //followers_url
    const informationFunction = async()=>{
        try{
            const data = await axios
            .get(`https://api.github.com/search/users?q=${userName}+in:user&per_page=1`)
            .then(res=>{
                setUser(res.data.items[0]);
            });
            
        } catch(e){
            console.log(e)
        }
    };
    const informationFunctionGitlab = async()=>{
        try{
            const data = await axios
            .get( `https://gitlab.com/api/v4/users?search=${userName}&per_page=5`,
            { headers: { "PRIVATE-TOKEN": 'zp2x3erGUPz6ZVVZxeiD' } })
            .then(res=>{
                setUser(res.data[0])
            });
            
        } catch(e){
            console.log(e)
        }
    };
    useEffect(()=>{
        if(service == 'github'){
        informationFunction();}
        else{
            informationFunctionGitlab();
        }
    }, [])

    /*const followersFunction = async()=>{
        try{
            const data = await axios
            .get(user.followers_url)
            .then(res=>{
                //setCantSeguidores(res.data.length)
                setCantSeguidores(res.data.length)
            });
        } catch(e){
            console.log(e)
        }
    };
    useEffect(()=>{
        followersFunction();
    }, [])*/

    return(
        <>
            <h1>Card individual</h1>
            <p>{service}</p>
            <p>Estas buscando al usuario {
                service == 'github'
                ?
                user.login
                :
                user.username
            }</p>
            <img src={user.avatar_url}></img>
            <a href={
                service=='github'
                ?
                user.html_url
                :
                user.web_url    
            } target="_blank">Ir a su perfil</a>
        </>
    )
}

export default CardUser;