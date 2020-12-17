import API from './config';
import USER_ENDPOINTS from './endpoints';

const UserService = {
  getAll: () => new Promise(
    (resolve,reject) => {
      API.get(USER_ENDPOINTS.LIST_USERS)
      .then(
        data => resolve(data)
      )
      .catch(
        err => console.log('este es el error', err)
      )
    }
  ),
  get: (username) => new Promise(
    (resolve,reject) => {
      API.get(USER_ENDPOINTS.USER_DETAIL+username)
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )      
    }
  ),

}

export default UserService;