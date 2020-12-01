import React from "react";
import "./UserCard.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../state/actions";
import gitHubLogo from "../../img/gitHubLogo.png";
import gitLabLogo from "../../img/gitLabLogo.png";

export default function UserCard(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const { username, avatar, url, service, id } = props.user;

  const handleOpenInfo = (user) => {
    dispatch(setUserInfo(user));
    history.push(`/user-info/${service}/${username}`);
  };

  return (
    <div
      onClick={() => handleOpenInfo(props.user)}
      className={`user-card ${service}`}
    >
      <img src={avatar} alt="user avatar" />
      <div className="user-card-info">
        <h4>Username: {username}</h4>
        <h4>ID: {id}</h4>
      </div>
      {service === "github" ? (
        <img className="service-logo" src={gitHubLogo} alt="github logo" />
      ) : (
        <img className="service-logo" src={gitLabLogo} alt="github logo" />
      )}
    </div>
  );
}

{
  /* <button onClick={() => openUserInfo(props.user)}>
  A ver los followers che
</button> */
}
