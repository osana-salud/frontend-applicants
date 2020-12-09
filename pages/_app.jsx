import { GitlabProvider } from "../context/GitlabContext";
import { GithubProvider } from "../context/GithubContext";

const App = ({ Component, pageProps }) => {
  return (
    <GitlabProvider>
      <GithubProvider>
        <Component {...pageProps} />
      </GithubProvider>
    </GitlabProvider>
  );
};

export default App;
