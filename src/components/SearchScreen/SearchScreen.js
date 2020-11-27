import React from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { UsersList } from "./UsersList/UsersList";
export const SearchScreen = () => {
  return (
    <>
      <SearchForm />
      <UsersList />
    </>
  );
};
