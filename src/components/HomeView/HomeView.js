import React from "react";
import "./HomeView.css";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import LogoSpinner from "../LogoSpinner/LogoSpinner";
import Spinner from "../Spinner/Spinner";

export default function HomeView() {
  const users = useSelector((state) => state.usersFound);
  const isFetching = useSelector((state) => state.isFetching);
  const searchMade = useSelector((state) => state.searchMade);

  return (
    <div className="home-view">
      <LogoSpinner />
      <h2>Welcome to GitFinder!</h2>
      <SearchBar />
      {isFetching ? <Spinner /> : null}

      {!searchMade ? null : users.length > 0 ? (
        <div className="cards-container">
          {users.map((user, i) => {
            return <UserCard key={i} user={user} />;
          })}
        </div>
      ) : (
        <h3>No users found. Try again!</h3>
      )}
    </div>
  );
}
