import { SET_USERS, SET_ERROR_GET_USERS, SET_LOADING } from "./user.types"
import { Repository } from '../services/repository.service'
import { User } from "../model/user";
import { nameRepository } from "../reducers/repository.reducer";

export const setLoadingGetUsers = () => ({
  type: SET_LOADING,
})

const setUsers = (payload: any) => ({
  type: SET_USERS,
  payload: { users: payload.users }
})
const setErrorGetUsers = (payload: any) => ({
  type: SET_ERROR_GET_USERS,
  payload: { msjError: payload.msjError }
})

export const getUsers = () => {
  return async (dispatch: any, getState: any) => {
    const typeRepository = getState().repositoryReducerState.repository;
    const userName = getState().repositoryReducerState.userName;
    let users: User[] = [];
    try {
      dispatch(setLoadingGetUsers());
      switch (typeRepository) {
        case nameRepository.GITLAB:
          users = await Repository.getUsersGitLab(userName);
          break;
        case nameRepository.GITHUB:
          users = await Repository.getUsersGitHub(userName);
          break;
        case nameRepository.GITLAB_GITHUB:
          const usersGitLab = await Repository.getUsersGitLab(userName);
          const usersGitHub = await Repository.getUsersGitHub(userName);
          users = [...usersGitLab, ...usersGitHub];
          break;
        default:
          break;
      }
      dispatch(setUsers({ users }));
    } catch (error) {
      const msjError = 'Error en la peticion';
      dispatch(setErrorGetUsers({ msjError }));
    }
  };
}