const initialState = {
  usersFound: [],
  isFetching: false,
  searchMade: false,
  userInfo: {},
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "START_FETCHING":
      return { ...state, isFetching: true, searchMade: false };
    case "DONE_FETCHING":
      return { ...state, isFetching: false };
    case "SEARCH_MADE":
      return { ...state, searchMade: true };
    case "SET_USERS":
      return { ...state, usersFound: payload };
    case "SET_USER_INFO":
      return { ...state, userInfo: payload };
    default:
      return state;
  }
};
