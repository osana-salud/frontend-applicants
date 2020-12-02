import axios from 'axios';
import ApiGithub from '../data/ApiGithub';

export const getUsersGithub = async (input) => {
    try {
        const res = await axios.get(`${ApiGithub}${input}`);
        return res.data.items;
    }catch(err) {
        alert(`Error getting users: ${err}`);
    };
}
