import { userDetailsTypes } from "../types/types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userDetailsTypes.StartLoading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userDetailsTypes.FinishLoading:
      return {
        ...state,
        loading: false,
      };
    case userDetailsTypes.SaveUser:
      return {
        ...state,
        user: payload,
      };
    case userDetailsTypes.SetFetchError:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
