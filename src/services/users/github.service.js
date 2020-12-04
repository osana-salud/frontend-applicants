import axios from "axios";

export default class Github {
  static async getUsers(q) {
    const request = await axios.get("https://api.github.com/search/users", {
      params: {
        q,
        per_page: 5
      }
    });

    const users = await request.data.items.slice(0, 5).map(user => ({
      id: user.id,
      name: user.login,
      avatar_url: user.avatar_url,
      url: user.url,
      source: "github"
    }));

    return users;
  }

  static async getUserInfo(login) {
    const request = await axios.get(`https://api.github.com/users/${login}`);

    let userInfo = {
      id: request.data.id,
      name: request.data.name,
      bio: request.data.bio,
      company: request.data.company,
      location: request.data.location,
      created_at: request.data.created_at,
      login: request.data.login,
      avatar_url: request.data.avatar_url
    };

    const followersList = (
      await axios.get(request.data.followers_url)
    ).data.map(f => ({
      login: f.login,
      avatar_url: f.avatar_url
    }));

    userInfo.followers = {
      total: followersList.length,
      users: followersList.slice(0, 5)
    };

    return userInfo;
  }
}
