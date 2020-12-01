import React from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import gitHubBanner from "../../img/gitHubBanner.png";
import gitLabBanner from "../../img/gitLabBanner.png";
import gitHubLogo from "../../img/gitHubLogo.png";
import gitLabLogo from "../../img/gitLabLogo.png";
import backButton from "../../img/backButton.png";

export default function UserInfo() {
  const history = useHistory();

  const {
    username,
    name,
    avatar,
    url,
    service,
    id,
    bio,
    repos,
    following,
    followers,
    location,
  } = useSelector((state) => state.userInfo);

  return (
    <div className={`user-info ${service}`}>
      <img
        className="back-button"
        src={backButton}
        alt="back button"
        onClick={() => {
          history.push("/");
        }}
      />
      <div className={`user-info-card ${service}`}>
        <img
          className="banner-img"
          src={service === "github" ? gitHubBanner : gitLabBanner}
          alt="Service Banner"
        />
        <img className="avatar" src={avatar} alt="" />
        <div className="card-body">
          <h4> {name}</h4>
          <div className="username-and-location">
            <h4> {username}</h4>
            {location ? (
              <div className="location">
                <span role="img">
                  <i class="fas fa-map-pin fa-xs"></i>
                </span>
                <span>{location}</span>
              </div>
            ) : null}
          </div>
          <p className="bio">{bio}</p>

          <a
            className="service-link"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <p> Visit profile </p>
            <img
              className="service-logo"
              src={service === "github" ? gitHubLogo : gitLabLogo}
              alt="github logo"
            />
          </a>

          {/* {service === "github" ? (
            <img className="service-logo" src={gitHubLogo} alt="github logo" />
          ) : (
            <img className="service-logo" src={gitLabLogo} alt="github logo" />
          )} */}
        </div>
        {service === "github" ? (
          <div className="repos-and-followers">
            <span className="repos">
              <h5>{repos}</h5>
              <p>Repos</p>
            </span>
            <span className="followers">
              <h5>{followers}</h5>
              <p>Followers</p>
            </span>
            <span className="following">
              <h5>{following}</h5>
              <p>Following</p>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
