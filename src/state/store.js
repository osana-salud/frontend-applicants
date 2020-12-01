import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(thunk))
);
