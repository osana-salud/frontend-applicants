export const getUserProps = ({ user, service }) => ({
  avatar_url: user.avatar_url,
  followers: user.followers,
  id: user.id,
  name: user.name,
  profile_url: user[`${service === "github" ? "html" : "web"}_url`],
  service,
  username: user[`${service === "github" ? "login" : "username"}`],
});
