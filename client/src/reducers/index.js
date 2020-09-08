import { GET_ALL_USERS, GET_FOLLOWERS, GET_FOLLOWING, GET_REPOS } from '../actions';

const initialState = {
    users: [],
    followers: [],
    following: [],
    repos: [],
};


const reducerGitHub = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_FOLLOWERS:
            return {
                ...state,
                followers: action.payload
            };
        case GET_FOLLOWING:
            return {
                ...state,
                following: action.payload
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload
            };

        default:
            return state;
    }
}


export default reducerGitHub;
