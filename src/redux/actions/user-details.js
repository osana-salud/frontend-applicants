import { getUserProps } from "../../helpers/getUserProps";
import { userDetailsTypes } from "../types/types";
const githubUserEndpoit = "https://api.github.com/users/";
const gitlabUserEndpoit = "https://gitlab.com/api/v4/users?username=";

export const userDetails_fetchUserInfo = (username, service) => {
  const userInfoEndpoint =
    service === "github" ? githubUserEndpoit : gitlabUserEndpoit;
  const headers =
    service === "gitlab" ? { PRIVATE_TOKEN: "s4xJZ4fQHV5jD6VrfDDP" } : {};
  return async (dispatch) => {
    try {
      dispatch(userDetails_StartLoading());
      const response = await fetch(`${userInfoEndpoint}${username}`, {
        headers,
      });
      const userData = await response.json();
      const user = service === "github" ? userData : userData[0];
      console.log(userData);
      if (user) {
        dispatch(userDetails_SaveUser(getUserProps({ user, service })));
      } else {
        dispatch(
          userDetails_SetFetchError(
            "User not found, please provide a valid user name."
          )
        );
      }
    } catch (error) {
      dispatch(
        userDetails_SetFetchError(
          "Oops! an error has ocurred, please check your network connection and try again."
        )
      );
      console.error(error);
    } finally {
      dispatch(userDetails_FinishLoading());
    }
  };
};

const userDetails_StartLoading = () => ({
  type: userDetailsTypes.StartLoading,
});

const userDetails_FinishLoading = () => ({
  type: userDetailsTypes.FinishLoading,
});

const userDetails_SetFetchError = (error) => ({
  type: userDetailsTypes.SetFetchError,
  payload: error,
});

const userDetails_SaveUser = (user) => ({
  type: userDetailsTypes.SaveUser,
  payload: user,
});
