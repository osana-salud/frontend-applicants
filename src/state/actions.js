import { getUsers } from "../apiClient/client";

export const setUsers = (input) => {
  return async (dispatch) => {
    dispatch({ type: "START_FETCHING" });
    const users = await getUsers(input);
    dispatch({ type: "SET_USERS", payload: users });
    dispatch({ type: "DONE_FETCHING" });
    dispatch({ type: "SEARCH_MADE" });
  };
};

export const setUserInfo = (user) => {
  console.log("DISPATCHING USER INFO");
  return async (dispatch) => {
    console.log(user);
    dispatch({ type: "SET_USER_INFO", payload: user });
  };
};
