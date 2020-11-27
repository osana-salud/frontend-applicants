export class Usuario {

    constructor(nombre, nombreDeUsuario, id, avatar, seguidores, seguidos, bio, location, perfilDeGithub) {
        this.nombre = nombre
        this.nombreDeUsuario = nombreDeUsuario
        this.id = id
        this.avatar = avatar
        this.seguidores = seguidores
        this.seguidos = seguidos
        this.bio = bio
        this.location = location
        this.perfilDeGithub = perfilDeGithub
    }

    static fromJSON(usuarioJSON) {
        return new Usuario(
            usuarioJSON.name,
            usuarioJSON.login,
            usuarioJSON.id,
            usuarioJSON.avatar_url,
            usuarioJSON.followers,
            usuarioJSON.following,
            usuarioJSON.bio,
            usuarioJSON.location,
            usuarioJSON.html_url
        )
    }

}