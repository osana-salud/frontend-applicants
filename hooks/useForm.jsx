import { useState } from "react";
import { GITHUB_URL, GITLAB_USER } from "../constants";
import validateSearch from "../validators/validateSearch";

export default function useForm() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGithubService, setIsGithubService] = useState(false);

  return {
    inputValue,
    username,
    errors,
    isLoading,
    isGithubService,
    // handleChange is like the v-model in Vuejs. Useful to read the input value
    handleChange: (e) => setInputValue(e.target.value),
    searchUser: async () => {
      let url = `${GITHUB_URL}/${inputValue}`;

      // Here we are checking if all of those validations has passed
      const isInvalid = validateSearch(inputValue);
      setErrors(isInvalid);

      // In case the validations has passed, we'll start to fetch the data
      const isValid = Object.keys(errors).length === 0;
      if (isValid) {
        setIsLoading(true);

        try {
          const res = await fetch(url);

          // Depends if the status' request is 200 it'll fetch the Github API service
          if (res.status === 200) {
            const data = await res.json();
            if (typeof data === "object") {
              let user = [];
              user = [...user, data];
              setUsername(user);
            }
            setIsGithubService(true);
          } else {
            // Otherwise it'll fetch the Gitlab service
            url = `${GITLAB_USER}=${inputValue}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data) setUsername(data);
            setIsGithubService(false);
          }
        } catch (error) {
          console.log("error", error);
        } finally {
          setIsLoading(false);
        }
      }
    },
  };
}
