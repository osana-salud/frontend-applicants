import { createStore, applyMiddleware, compose } from "redux";
import reducerGitHub from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducerGitHub, composeEnhancers(applyMiddleware(thunk)));

export default store;
