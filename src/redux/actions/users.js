import { getMappedUsers } from "../../helpers/getMappedUsers";
import { usersTypes } from "../types/types";
const githubUsersEndpoint = "https://api.github.com/search/users";
const gitlabUsersEndpoint = "https://gitlab.com/api/v4/users?search";

export const users_SearchByName = (name) => {
  return async (dispatch) => {
    try {
      dispatch(users_StartLoading());
      const [githubResponse, gitlabResponse] = await Promise.all([
        fetch(`${githubUsersEndpoint}?q=${name}`),
        fetch(`${gitlabUsersEndpoint}=${name}`, {
          headers: {
            "PRIVATE-TOKEN": "s4xJZ4fQHV5jD6VrfDDP",
          },
        }),
      ]);
      const [
        { items: githubCollection },
        gitlabCollection,
      ] = await Promise.all([githubResponse.json(), gitlabResponse.json()]);
      const githubUsers = getMappedUsers({
        arr: githubCollection,
        service: "github",
        limit: 5,
      });
      const gitlabUsers = getMappedUsers({
        arr: gitlabCollection,
        service: "gitlab",
        limit: 5,
      });
      if (gitlabCollection.length || gitlabCollection.length) {
        dispatch(users_SaveItems([...githubUsers, ...gitlabUsers]));
      } else {
        dispatch(
          users_SetFetchError(
            `Look's like there is not users by "${name}", please provide a valid name and try to search again.`
          )
        );
      }
    } catch (error) {
      dispatch(
        users_SetFetchError(
          "Oops! an error has ocurred, please check your network connection and try again."
        )
      );
      console.error(error);
    } finally {
      dispatch(users_FinishLoading());
    }
  };
};

const users_SaveItems = (users) => ({
  type: usersTypes.SaveUsers,
  payload: users,
});

const users_StartLoading = () => ({ type: usersTypes.StartLoading });

const users_FinishLoading = () => ({ type: usersTypes.FinishLoading });

const users_SetFetchError = (error) => ({
  type: usersTypes.SetFetchError,
  payload: error,
});
