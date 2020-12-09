import { createContext, useEffect, useContext, useState } from "react";
import { GITHUB_URL } from "../constants";
import useFetch from "../hooks/useFetch";

export const GithubContext = createContext();

// With React Context with can manage the state of our application. It's like Vuex on Vue.js

export const GithubProvider = ({ children }) => {
  const { getData, loading, response } = useFetch(GITHUB_URL, {
    method: "GET",
  });

  useEffect(() => {
    getData();
  }, []);

  const githubUsers = response.slice(0, 5);

  return (
    <GithubContext.Provider value={{ githubUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export function useGithubContext() {
  const context = useContext(GithubContext);

  if (!context) {
    console.log("Something's wrong with the data...");
  }

  return context;
}

export default useGithubContext;
