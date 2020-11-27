import React from "react";
import PropTypes from "prop-types";
import { githubLogo, gitlabLogo } from "../../../assets/svg/svg";
import { Avatar } from "./Avatar";
export const UserCard = ({
  avatar_url,
  followers,
  id,
  name,
  profile_url,
  service,
  username,
}) => {
  const serviceLogo = service === "github" ? githubLogo : gitlabLogo;
  return (
    <article className="user-card">
      <div className="card__header">
        <div className="profile-img">
          <Avatar name={name} avatar_url={avatar_url} />
        </div>
      </div>
      <div className="card__info">
        <h2 className="user__name">
          {name || username} (<span className="user__id">ID: {id}</span>)
        </h2>
        <h3 className="user__username">@{username}</h3>
        {service === "github" && (
          <div className="user__followers">
            {" "}
            Followers: <span>{followers}</span>
          </div>
        )}
        <a
          href={profile_url}
          className="user__profile-link"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          View Profile{serviceLogo}
        </a>
      </div>
    </article>
  );
};

UserCard.defaultProps = {
  avatar_url: "",
  followers: 0,
  id: 0,
  name: "",
  profile_url: "",
  service: "",
  username: "",
};

UserCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  followers: PropTypes.number,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  profile_url: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
