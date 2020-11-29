import { SET_REPOSITORY, SET_VALIDATE_USER_NAME, SET_USER_NAME } from './repository.types';

export const setUserName = (userName: string) => ({
  type: SET_USER_NAME,
  payload: { userName }
})
export const setValidateUserName = (validateUserName: boolean) => ({
  type: SET_VALIDATE_USER_NAME,
  payload: { validateUserName }
})

export const setRepository = (repository: string) => ({
  type: SET_REPOSITORY,
  payload: { repository }
})