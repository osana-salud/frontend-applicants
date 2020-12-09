import GithubUsers from "../components/GithubUsers";
import GitlabUsers from "../components/GitlabUsers";
import Layout from "../layout/Layout";
import Card from "../components/card/Card";
import useForm from "../hooks/useForm";
import SearchBar from "../components/searchbar/SearchBar";

function HomePage() {
  // With just a line of code we abstract all the logic on the Custom Hook called useForm
  const {
    handleChange,
    searchUser,
    username,
    errors,
    isLoading,
    isGithubService,
  } = useForm();
  const searchByUser = username.map((user) => {
    isGithubService ? (user.service = "github") : (user.service = "gitlab");
    return user;
  });

  return (
    <Layout>
      <div className="py-4 mt-6 mb-8 rounded-full shadow-xl bg-white max-w-5xl m-auto">
        <SearchBar
          handleChange={handleChange}
          searchUser={searchUser}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
      {Object.keys(errors).length === 0
        ? searchByUser?.map((user) => (
            <Card
              key={user.id}
              avatar={user.avatar_url}
              username={user.login || user.username}
              name={user.login || user.name}
              service={user.service}
              id={user.id}
              profile={user.html_url || user.web_url}
            />
          ))
        : null}

      <GitlabUsers />

      <GithubUsers />
    </Layout>
  );
}

export default HomePage;
