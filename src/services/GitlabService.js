import axios from 'axios';
import ApiGitlab from '../data/ApiGitLab';

export const getUsersGitlab = async (input) => {
    try {
        const res = await axios.get(`${ApiGitlab}${input}`, {
            headers: {
                "PRIVATE-TOKEN": "MVNZBg673exuuEhbx724",
            }
        });
        return res.data;
    }catch(err) {
        alert(`Error getting users: ${err}`);
    };
}
