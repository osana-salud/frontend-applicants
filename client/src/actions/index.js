export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const GET_FOLLOWING = 'GET_FOLLOWING';
export const GET_REPOS = 'GET_REPOS';


export function getAllUsers() {
  return function (dispatch) {
    return fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => {
        dispatch({
          type: GET_ALL_USERS,
          payload: users
        });
      });
  };
}

export function getFollowers(linkFollowers) {
  return function (dispatch) {
    return fetch(linkFollowers)
      .then(response => response.json())
      .then(followers => {
        dispatch({
          type: GET_FOLLOWERS,
          payload: followers
        });
      });
  };
}

export function getFollowing(login) {
  return function (dispatch) {
    return fetch('https://api.github.com/users/' + login + '/following')
      .then(response => response.json())
      .then(following => {
        dispatch({
          type: GET_FOLLOWING,
          payload: following
        });
      });
  };
}

export function getRepos(linkRepos) {
  return function (dispatch) {
    return fetch(linkRepos)
      .then(response => response.json())
      .then(repos => {
        dispatch({
          type: GET_REPOS,
          payload: repos
        });
      });
  };
}


