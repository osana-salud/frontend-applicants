import { React, useState } from "react"
import axios from 'axios';
import "./busquedaDeUsuariosComponent.css"
import { contieneTexto } from "../../utils";
import { CardUsuario } from "../cardUsuario/cardUsuarioComponent";
import { Usuario } from "../../dominio/usuario";

export const BusquedaUsuariosComponent = (props) => {
    const [usuarios, setUsuarios] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [error, setError] = useState('')
    const limiteDeUsuarios = 5

    const traerUsuarios = async () => {
        let usuarios
        setError("")
        validarBusqueda()
        await axios.get('https://api.github.com/users').then((result) => {
            const usuariosJSON = result.data
            const usuariosGit = usuariosJSON.map((usuario) => Usuario.fromJSON(usuario))
            usuarios = usuariosGit
        })
        if (!!busqueda && !error) {
            const coincidentes = usuarios.filter((usuario) => contieneTexto(usuario.nombreDeUsuario, busqueda)).slice(0, limiteDeUsuarios)
            if (coincidentes.length !== 0) {
                setUsuarios(coincidentes)
            } else {
                setError("No hay ningún usuario que coincida con ese nombre.")
                setUsuarios([])
            }
        }
        else if (hayUsuarios()) {
            setUsuarios([])
        }
    }

    function hayUsuarios() {
        return !(usuarios.length === 0)
    }

    function validarBusqueda() {
        if (busqueda.length < 4) {
            setError("El usuario buscado debe tener al menos 4 caracteres.")
        }
        if (contieneTexto(busqueda, "osana-salud")) {
            setError("Está prohibido buscar al usuario 'osana-salud'.")
        }
    }



    return (
        <div className="container">
            <div className="busqueda">
                <h1>Búsqueda de usuarios</h1>
                <div>
                    <input placeholder="Ingrese un nombre de usuario..." onChange={(event) => setBusqueda(event.target.value)}></input>
                    <button onClick={traerUsuarios}>Buscar</button>
                </div>
            </div>
            <div className="resultados-container">
                {(!hayUsuarios() && !error) ? <div style={{ textAlign: 'center', margin: '1rem', fontWeight: "bold" }}>Aquí apareceran los usuarios una vez realizada la búsqueda.</div> : null}
                {(error) ? <div style={{ textAlign: 'center', margin: '1rem', fontWeight: "bold", color: "red" }}>{error}</div> : null}
                {(!error) ? [...usuarios].map((usuario) => <CardUsuario key={usuario.id} usuario={usuario} history={props.history} />) : null}
            </div>
        </div>
    );
}