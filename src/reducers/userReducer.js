import {
  SEARCH_GH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_GL_USERS,
} from '../types/types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_GH_USERS:
      return {
        ...state,
        users: action.payload.data.items,
        loading: false,
      };
    case SEARCH_GL_USERS:
      return {
        ...state,
        users: action.payload.data,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
