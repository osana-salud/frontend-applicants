import axios from "axios";

export const getUsers = async (input) => {
  const users = [];
  //GitHub Users
  const gitHubQuery = await axios(
    `https://api.github.com/search/users?q=${input}&per_page=5`,
    {
      headers: {
        authorization: "token 6c3a422c922eca31deab7100197fd8e3d0a072e6 ",
      },
    }
  ).catch((err) => {
    console.log(err);
    return "Something went wrong :(. Please Try again in a few seconds.";
  });

  let gitHubUsers = gitHubQuery.data.items;

  await Promise.all(
    gitHubUsers.map(async (user) => {
      const profileQuery = await axios(
        `https://api.github.com/users/${user.login}`,
        {
          headers: {
            authorization: "token 6c3a422c922eca31deab7100197fd8e3d0a072e6 ",
          },
        }
      ).catch((err) => {
        console.log(err);
        return "Something went wrong :(. Please Try again in a few seconds.";
      });
      let profile = profileQuery.data;

      const modifiedUser = {
        id: profile.id,
        username: profile.login,
        name: profile.name,
        avatar: profile.avatar_url,
        url: profile.html_url,
        service: "github",
        followers: profile.followers,
        following: profile.following,
        bio: profile.bio,
        location: profile.location,
        repos: profile.public_repos,
      };
      users.push(modifiedUser);
    })
  );

  //GitLab Users
  const gitLabQuery = await axios(
    `https://gitlab.com/api/v4/users?search=${input}&per_page=5`,
    { headers: { "PRIVATE-TOKEN": "wX-v7F3s-uCpLuzWWQNQ" } }
  ).catch((err) => {
    console.log(err);
    return "Something went wrong :(. Please Try again in a few seconds.";
  });

  let gitLabUsers = gitLabQuery.data;
  console.log(gitLabUsers);

  await Promise.all(
    gitLabUsers.map(async (user) => {
      const profileQuery = await axios(
        `https://gitlab.com/api/v4/users/${user.id}`,
        { headers: { "PRIVATE-TOKEN": "wX-v7F3s-uCpLuzWWQNQ" } }
      ).catch((err) => {
        console.log(err);
        return "Something went wrong :(. Please Try again in a few seconds.";
      });
      console.log(profileQuery.data);
      const profile = profileQuery.data;

      const modifiedUser = {
        id: profile.id,
        name: profile.name,
        username: profile.username,
        avatar: profile.avatar_url,
        url: profile.web_url,
        bio: profile.bio,
        location: profile.location,
        service: "gitlab",
      };
      users.push(modifiedUser);
    })
  );

  return users;
};
