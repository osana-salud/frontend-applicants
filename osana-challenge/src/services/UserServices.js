import API from './config';
import USER_ENDPOINTS from './endpoints';

const UserService = {
  getAll: () => new Promise(
    (resolve,reject) => {
      API.get(USER_ENDPOINTS.LIST_USERS)
      .then(
        res => res.json(data)
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => console.log('este es el error', err)
      )
    }
  ),
  get: (id) => new Promise(
    (resolve,reject) => {
      API.get(USER_ENDPOINTS.USER_DETAIL+id)
      .then(
        res => res.json(data)
      )
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