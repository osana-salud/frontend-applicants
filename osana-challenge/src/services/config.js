import axios from 'axios';

const BASE_URL = "https://api.github.com/users";

const API = axios.create({
    baseURL = BASE_URL,
})

export default API;