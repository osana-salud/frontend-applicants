import { createContext, useEffect, useContext, useState } from "react";
import { GITLAB_URL } from "../constants";
import useFetch from "../hooks/useFetch";

export const GitlabContext = createContext();

// With React Context with can manage the state of our application. It's like Vuex on Vue.js

export const GitlabProvider = ({ children }) => {
  const { getData, loading, response } = useFetch(GITLAB_URL, {
    method: "GET",
  });

  useEffect(() => {
    getData();
  }, []);

  const gitlabUsers = response.slice(0, 5);

  return (
    <GitlabContext.Provider value={{ gitlabUsers }}>
      {children}
    </GitlabContext.Provider>
  );
};

export function useGitlabContext() {
  const context = useContext(GitlabContext);

  if (!context) {
    console.log("Something's wrong with the data...");
  }

  return context;
}

export default useGitlabContext;
