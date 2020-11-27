import './cardUsuarioComponent.css'

export const CardUsuario = (props) => {
    const usuario = props.usuario

    return (
        <div className="card-usuario" onClick={() => irAlUsuario(usuario.nombreDeUsuario)}>
            <div> Username: {usuario.nombreDeUsuario}</div>
            <div> ID: {usuario.id} </div>
        </div>
    )

    function irAlUsuario(nombre) {
        props.history.push('/usuario/' + nombre)
    }
}