import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Usuario } from "../../dominio/usuario";
import axios from 'axios';
import './perfilUsuarioComponent.css'

export const PerfilUsuario = () => {
    const [usuario, setUsuario] = useState(new Usuario("", ""))
    const { nombre } = useParams()

    useEffect(() => {
        const traerUsuario = async () => {
            await axios.get('https://api.github.com/users/' + nombre).then((result) => {
                const usuarioJSON = result.data
                setUsuario(usuarioJSON)
            })
        }
        traerUsuario()
    }, [])

    return (
        <div className="perfil-container">
            <div className="perfil">
                <div className="cabecera">
                    <img className="avatar" src={usuario.avatar_url}></img>
                </div>
                <div className="info">
                    <span>{usuario.name}</span>
                    {/* <div>ID: {usuario.id}</div> */}
                    <div>Locación: {usuario.location}</div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>Seguidores: {usuario.followers}</div>
                        <div>Seguidos: {usuario.following}</div>
                    </div>
                    <div>Bio: {usuario.bio}</div>
                    <a href={usuario.html_url}>Perfil de GitHub</a>
                </div>
            </div>
        </div>
    )

}