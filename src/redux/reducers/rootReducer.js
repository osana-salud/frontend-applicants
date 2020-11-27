import { combineReducers } from "redux";
import { userDetailsReducer } from "./userDetailsReducer";
import { usersReducer } from "./usersReducer";
export const rootReducer = combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer,
});
