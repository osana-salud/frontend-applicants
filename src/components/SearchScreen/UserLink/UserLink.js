import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { githubLogo, gitlabLogo } from "../../../assets/svg/svg";
export const UserLink = ({ username, id, service }) => {
  return (
    <Link
      title={username}
      to={`/${service}/${username}`}
      className="user__link">
      <div className="user__info">
        <h2 className="user__name">
          {username} ({" "}
          <span className="user__id">
            <span>ID</span>: {id}
          </span>{" "}
          )
        </h2>
      </div>
      <div title={service} className="user__service">
        {service === "github" ? githubLogo : gitlabLogo}
      </div>
    </Link>
  );
};

UserLink.defaultProps = {
  username: "",
  id: 0,
  service: "",
};

UserLink.propTypes = {
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  service: PropTypes.string.isRequired,
};
