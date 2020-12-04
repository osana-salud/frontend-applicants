import axios from "axios";

// const PRIVATE_TOKEN = "was3mFoenhyzDXi2me3m";
const PRIVATE_TOKEN = "s4xJZ4fQHV5jD6VrfDDP";

export default class Gitlab {
  static async getUsers(q) {
    const request = await axios.get("https://gitlab.com/api/v4/users", {
      params: {
        search: q
      },
      headers: {
        "PRIVATE-TOKEN": PRIVATE_TOKEN
      }
    });

    // console.log(request.data);

    const users = await request.data.slice(0, 5).map(user => ({
      id: user.id,
      name: user.username,
      avatar_url: user.avatar_url,
      url: user.web_url,
      source: "gitlab"
    }));

    return users;
  }

  static async getUserInfo(id) {
    const request = await axios.get(`https://gitlab.com/api/v4/users/${id}`);

    let userInfo = {
      id: request.data.id,
      name: request.data.name,
      bio: request.data.bio,
      location: request.data.location,
      created_at: request.data.created_at,
      login: request.data.username,
      avatar_url: request.data.avatar_url
    };

    return userInfo;
  }
}
