import axios from "axios";

let header = {
	PRIVATE_TOKEN: 'dNcRN-432vxmhyrCmANE'
}

export default {
	async searchRepoGitLab({commit}, payload) {
		let data; 
		await axios.get(`https://gitlab.com/api/v4/search?scope=users&search=${payload.user}&private_token=dNcRN-432vxmhyrCmANE`).then((result) => {
			data = result.data;
			commit("setUserRepoGitLab", data);
		})
	}
}