const API = 'https://api.github.com/users'

export function getUsers() {
    return fetch(API)
        .then((res) => res.json())
        .catch(error => console.error('Error ' + error))
}

export function getUser(user) {
    return fetch(API + `/${user}`)
        .then((res) => res.json())
        .catch(error => console.error('Error ' + error))
}


export function getUserRepos(user) {
    return fetch(API + user + '/repos')
        .then((res) => res.json())
        .catch(error => console.error('Error ' + error))
}


export function getUsersByServices(user, repoName, contribuitors) {
    return fetch(API + '/repos' + user + repoName + contribuitors)
        .then((res) => res.json())
        .catch(error => console.error('Error ' + error))
}