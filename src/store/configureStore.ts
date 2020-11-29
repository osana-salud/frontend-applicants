import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
}
