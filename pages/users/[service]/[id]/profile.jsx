import Card from "../../../../components/card/Card";
import Layout from "../../../../layout/Layout";

const UserProfile = ({ user }) => {
  return (
    <Layout>
      <Card
        avatar={user.avatar_url}
        username={user.login || user.username}
        name={user.login || user.name}
        service={user.service}
        id={user.id}
        profile={user.html_url || user.web_url}
      />
    </Layout>
  );
};

async function getInitialProps({ query }) {
  console.log(query);
  const { username, avatar, name, id, service, profile } = query;
  return {
    user: { username, avatar, name, id, service, profile },
  };
}

UserProfile.getInitialProps = getInitialProps;

export default UserProfile;
