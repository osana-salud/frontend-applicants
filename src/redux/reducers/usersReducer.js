import { usersTypes } from "../types/types";

const initialState = {
  collection: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case usersTypes.StartLoading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case usersTypes.FinishLoading:
      return {
        ...state,
        loading: false,
      };
    case usersTypes.SaveUsers:
      return {
        ...state,
        collection: payload,
      };
    case usersTypes.SetFetchError:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
