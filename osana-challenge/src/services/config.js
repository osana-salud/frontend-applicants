import axios from 'axios';

const BASE_URL = "https://api.github.com";

const API = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    auth: {
        username: 'adivianahd',
        password: '685155b83e74ffab77f505d6899d285754280854'
      },
})

export default API;