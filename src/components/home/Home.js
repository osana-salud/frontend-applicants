import React, { useState, useRef } from 'react';
import CardList from '../cardList/CardList';
import Header from '../header/Header';
import Data from '../../contexts/Data';
import { getUsersGithub } from '../../services/GithubService';
import { getUsersGitlab } from '../../services/GitlabService';

const Home = () => {
    const [input, setInput] = useState('');
    const [selectOption, setSelectOption] = useState();
    const [githubUsers, setGithubUsers] = useState([]);
    const [gitlabUsers, setGitlabUsers] = useState([]);
    const textInput = useRef();
    const select = useRef();

    const inputValue = e => setInput(e.target.value);

    const selectValue = e => setSelectOption(e.target.value);

    const github = () => {
        const promise = getUsersGithub(input);
        promise.then(data => {
            if(data[0] !== undefined) {
                setGithubUsers(data);
            } else {
                alert("El usuario no se encuentra");
            };
        }); 
    };

    const gitlab = () => {
        const promise = getUsersGitlab(input);
        promise.then(data => {
            if(data[0] !== undefined) {
                setGitlabUsers(data);
            } else {
                alert("El usuario no se encuentra");
            };
        }); 
    };

    const clear = () => {
        textInput.current.value = '';
        select.current.value = '-1';
        setInput('');
        setSelectOption('-1'); 
        setGithubUsers([]);
        setGitlabUsers([]); 
    };

    const validate = () => {
        if(input.length !== 0 && input.length >= 4) {
            search();
        } else {
            alert("Debe ingresar algún nombre de usuario y el mínimo de caracteres es de 4")
        };
    };

    const search = () => {
        if(selectOption === "1") {
            github();  
            setGitlabUsers([]);
        } else if(selectOption === "2") {
            gitlab();
            setGithubUsers([]);
        } else if(selectOption === "3") {
            github();
            gitlab();
        } else {
            alert("Debe seleccionar alguna opción")
        };
    };

    return (
        <Data.Provider value={{githubUsers, gitlabUsers}}>
        <Header />
        <div className="principal-container">
            <h1>Ingresa el nombre de usuario y seleccione el servicio 
                para comenzar la búsqueda</h1>
            <form>
                <input ref={textInput} type="text" onChange={inputValue} placeholder="Nombre de usuario" />
                <select ref={select} defaultValue="-1" onChange={selectValue}>
                    <option value="-1">Servicio</option>
                    <option value="1">Github</option>
                    <option value="2">Gitlab</option>
                    <option value="3">Todos</option>
                </select>
                <button type="button" onClick={validate}>Buscar</button>
                <button type="button" onClick={clear}>Borrar</button>
            </form>

			<CardList />
        </div>
        </Data.Provider>
    );
}

export default Home;
