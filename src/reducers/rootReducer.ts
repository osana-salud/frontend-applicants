import { combineReducers } from 'redux';
import repositoryReducerState, { RepositoryReducerState } from './repository.reducer';
import userReducer, { UserReducerState } from './user.reducer'

export interface ReducersStates {
  userReducer: UserReducerState;
  repositoryReducerState: RepositoryReducerState;
}

export default combineReducers<ReducersStates>({
  userReducer,
  repositoryReducerState
});
