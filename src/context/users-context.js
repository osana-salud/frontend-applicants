import { useState, createContext } from 'react';

export const UserContext = createContext();

const initialState = [];

export const UserContextProvider = (props) => {
  const [users, setusers] = useState(initialState);
  return (
    <UserContext.Provider value={[users, setusers]}>
      {props.children}
    </UserContext.Provider>
  );
};
