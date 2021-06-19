import axios from "axios";

let header = {
	PRIVATE_TOKEN: 'dNcRN-432vxmhyrCmANE'
}

export default {
	async searchRepoGitLab({commit}, payload) {
		console.log('searchRepoGitLab',payload)
		let data; 
		
		/*await axios.get(`https://gitlab.com/api/v4/users?search=${payload.user}&page=1&per_page=5?private_token=dNcRN-432vxmhyrCmANE`).then((result) => {
			data = result.data;
			console.log(data)
			commit("setUserRepoGitHub", data);
		})*/
		await axios.get(`https://gitlab.com/api/v4/search?scope=users&search=${payload.user}&private_token=dNcRN-432vxmhyrCmANE`).then((result) => {
			data = result.data;
			console.log(data)
			commit("setUserRepoGitLab", data);
		})
	}
}