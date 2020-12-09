import { useGitlabContext } from "../context/GitlabContext";
import User from "./User";

function GitlabUsers() {
  const { gitlabUsers } = useGitlabContext();
  const users = gitlabUsers?.map((user) => {
    user.service = "gitlab";
    return user;
  });

  return (
    <section id="gitlab-section" className="container my-16">
      <h2 className="text-center text-2xl font-semibold uppercase underline mb-6">
        Gitlab Users
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {users?.map((user) => (
          <User
            key={user.id}
            username={user.username}
            avatar={user.avatar_url}
            name={user.name}
            id={user.id}
            service={user.service}
          />
        ))}
      </ul>
    </section>
  );
}

export default GitlabUsers;
