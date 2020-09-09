import { GET_ALL_USERS } from '../actions';

const initialState = {
    users: [],
};


const reducerGitHub = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
}


export default reducerGitHub;
