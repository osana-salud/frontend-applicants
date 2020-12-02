import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from '../reducers/userContext';
import UserReducer from '../reducers/userReducer';
import {
  SEARCH_GL_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_GH_USERS,
} from '../types/types';

const ApiState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Search Users HUB
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&per_page=5`
    );
    dispatch({
      type: SEARCH_GH_USERS,
      payload: res,
    });
  };

  // Search Users LAB
  const searchUsersgl = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://gitlab.com/api/v4/search?scope=users&search=${text}&per_page=5`,
      {
        headers: { 'PRIVATE-TOKEN': 's4xJZ4fQHV5jD6VrfDDP' },
      }
    );
    dispatch({
      type: SEARCH_GL_USERS,
      payload: response,
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        searchUsersgl,
        setLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default ApiState;
