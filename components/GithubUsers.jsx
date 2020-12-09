import { useGithubContext } from "../context/GithubContext";
import User from "./User";

function GithubUsers() {
  const { githubUsers } = useGithubContext();
  const users = githubUsers?.map((user) => {
    user.service = "github";
    return user;
  });

  return (
    <section id="github-section" className="container mb-16">
      <h2 className="text-center text-2xl font-semibold uppercase underline mb-6">
        Github Users
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {users?.map((user) => (
          <User
            key={user.id}
            username={user.login}
            avatar={user.avatar_url}
            name={user.login}
            id={user.id}
            service={user.service}
          />
        ))}
      </ul>
    </section>
  );
}

export default GithubUsers;
