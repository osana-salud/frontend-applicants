import { SET_REPOSITORY, SET_VALIDATE_USER_NAME, SET_USER_NAME } from "../actions/repository.types";
import { Action } from "../actions/action.interface";

export interface RepositoryReducerState {
  repository: string,
  userName: string,
  validateUserName: boolean,
}

export const nameRepository = {
  GITLAB_GITHUB: 'GITLAB_GITHUB',
  GITLAB: 'GITLAB',
  GITHUB: 'GITHUB',
}

const initialState = {
  userName: '',
  repository: nameRepository.GITLAB_GITHUB,
  validateUserName: true,
}

export default (state: RepositoryReducerState = initialState, action: Action): RepositoryReducerState => {
  const { type, payload } = action;
  switch (type) {
    case SET_VALIDATE_USER_NAME:
      return setValidateUserName(state, payload);
    case SET_USER_NAME:
      return setUserName(state, payload);
    case SET_REPOSITORY:
      return { ...state, ...payload }
    default:
      return state
  }
}
function setValidateUserName(state: RepositoryReducerState, payload: any) {
  const validateUserName = payload.validateUserName;
  return { ...state, validateUserName }
}
function setUserName(state: RepositoryReducerState, payload: any) {
  const userName = payload.userName;
  return { ...state, userName }
}