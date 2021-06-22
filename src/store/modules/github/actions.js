import axios from "axios";

export default {
	async searchRepoGitHub({commit}, payload) {
		let data; 
		await axios.get(`https://api.github.com/search/users?q=${payload.user}&page=1&per_page=5`).then((result) => {
			data = result.data.items;
			commit("setUserRepoGitHub", data);
			
		})
	}
}