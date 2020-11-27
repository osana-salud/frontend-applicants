import React from "react";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { UserLink } from "../UserLink/UserLink";

export const UsersList = () => {
  const { collection, loading, error } = useSelector(({ users }) => users);
  return (
    <div className="users-list">
      {!error ? (
        loading ? (
          <LoadingSpinner />
        ) : (
          collection.map((userProps) => (
            <UserLink key={userProps.id} {...userProps} />
          ))
        )
      ) : (
        <ErrorMessage msg={error} />
      )}
    </div>
  );
};
