import { SET_ERROR_GET_USERS, SET_LOADING, SET_USERS } from "../actions/user.types";
import { Action } from "../actions/action.interface";
import { User } from "../model/user"
import { Status } from "../services/http";

export interface UserReducerState {
  users: User[],
  stateGet: string,
  msjError?: string,
}

const initialState = {
  users: [],
  stateGet: Status.EXITO
}

export default (state: UserReducerState = initialState, action: Action): UserReducerState => {
  const { type, payload } = action;
  switch (type) {

    case SET_USERS:
      return setUsers(state, payload);

    case SET_LOADING:
      return setLoadingGetUsers(state);


    case SET_ERROR_GET_USERS:
      return setErrorGetUsers(state, payload);
    default:
      return state
  }
}
function setUsers(state: UserReducerState, payload: any) {
  const users = payload.users;
  return { ...state, users, stateGet: Status.EXITO }
}
function setLoadingGetUsers(state: UserReducerState) {
  return { ...state, msjError: undefined, stateGet: Status.LOADING }
}
function setErrorGetUsers(state: UserReducerState, payload: any) {
  const msjError = payload.msjError;
  return { ...state, msjError, stateGet: Status.ERROR }
}