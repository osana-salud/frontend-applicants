export const GET_ALL_USERS = 'GET_ALL_USERS';


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

