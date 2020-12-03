import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './formulario.css'

const Formulario = ({value, setValue, errorInput, setErrorInput, users, setUsers, service, setService})=>{
    
    const [serviceToSend, setServiceToSend] = useState('github');

    const informationFunctionGithub = async()=>{
        try{
            const data = await axios
            .get(`https://api.github.com/search/users?q=${value}+in:user&per_page=5`)
            .then(res=>{
                setUsers(res.data.items)
            });
            
        } catch(e){
            console.log(e)
        }
    };
    
    
    const informationFunctionGitlab = async()=>{
        try{
            const data = await axios
            .get( `https://gitlab.com/api/v4/users?search=${value}&per_page=5`,
            { headers: { "PRIVATE-TOKEN": 'zp2x3erGUPz6ZVVZxeiD' } })
            .then(res=>{
                setUsers(res.data)
            });
            
        } catch(e){
            console.log(e)
        }
    };

    const submitForm = (e)=>{
        e.preventDefault();
        if(value.trim()==='' || value.trim().toLowerCase().match('osana') || value.trim().length < 4){
            setErrorInput(true);
            setValue('');
            return;
        }
        else{
            setErrorInput(false);
            //setService(serviceToSend);
            if(service == 'github'){
                //console.log('servicio github... llamando a la api de github')
                //console.log(service);
                informationFunctionGithub({value});
            }
            else{
                //console.log('el servicio es gitlab llamando a ala api de gitlab')
                informationFunctionGitlab({value});
            }
             
        }
    }

    const handleInput = (e)=>{
        console.log(e.target.value)
        setService(e.target.value);
        console.log(service)
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <label>Ingrese el nombre de usuario</label>
            
            <input
                type='text'
                name='user-name'
                //className={ (value.toLowerCase().match('osana') || (value.trim().length < 4)) ? 'error' : 'no-error' }
                value={value}
                onChange = {e=>setValue(e.target.value)}
            >
            
            </input>
            {
                errorInput
                ?
                <p className='alerta-error'>Ingrese un nombre de usuario válido</p>
                :
                <p></p>
            }
            <select
                name="servicio"
                onChange={handleInput}
            >
                <option value="github">Github</option>
                <option value="gitlab">Gitlab</option>
            </select>
            
            <button
                type='submit'
            >
                Buscar
            </button> 
        </form>

        
        
        </>
        
    )
}

export default Formulario;