import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails_fetchUserInfo } from "../../redux/actions/user-details";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { UserCard } from "./UserCard/UserCard";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useHistory } from "react-router-dom";
export const UserScreen = ({
  match: {
    params: { service, username },
  },
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  const { loading, user, error } = useSelector(
    ({ userDetails }) => userDetails
  );
  useEffect(() => {
    dispatch(userDetails_fetchUserInfo(username, service));
  }, [dispatch, service, username]);
  return (
    <div className="user-details">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      {!error ? (
        loading ? (
          <LoadingSpinner />
        ) : (
          <UserCard {...user} />
        )
      ) : (
        <ErrorMessage msg={error} />
      )}
    </div>
  );
};
