import http from 'axios';

const config = {
  headers: {
    Authorization: 'Token 8ad144786262b7f39216df03cb50c18864336565'
  }
}

export default class userService {

  static getUsersList = async () => {
    let response = {
      data: {},
      status: true,
    };
    await http
      .get(`https://api.github.com/users?per_page=100`, config)
      .then(res => {
        response.data = res;
      })
      .catch(error => {
        response.data = error;
        response.status = false;
      });
    return response;
  };

  static getUser = async (user) => {
    let response = {
      data: {},
      status: true,
    };
    await http
      .get(`https://api.github.com/users/${user}`, config)
      .then(res => {
        response.data = res.data;
      })
      .catch(error => {
        response.data = error;
        response.status = false;
      });
    return response;
  };
}