import React from "react";
import PropTypes from "prop-types";
import { useLoadImage } from "../../../hooks/useLoadImage";
const loadingAvatarSpinner = (
  <div className="sk-fading-circle">
    <div className="sk-circle1 sk-circle"></div>
    <div className="sk-circle2 sk-circle"></div>
    <div className="sk-circle3 sk-circle"></div>
    <div className="sk-circle4 sk-circle"></div>
    <div className="sk-circle5 sk-circle"></div>
    <div className="sk-circle6 sk-circle"></div>
    <div className="sk-circle7 sk-circle"></div>
    <div className="sk-circle8 sk-circle"></div>
    <div className="sk-circle9 sk-circle"></div>
    <div className="sk-circle10 sk-circle"></div>
    <div className="sk-circle11 sk-circle"></div>
    <div className="sk-circle12 sk-circle"></div>
  </div>
);

export const Avatar = ({ avatar_url, name }) => {
  const [isImgLoaded] = useLoadImage(avatar_url);
  return isImgLoaded ? (
    <img src={avatar_url} alt={name} />
  ) : (
    loadingAvatarSpinner
  );
};

Avatar.defaultProps = {
  avatar_url: "",
  name: "",
};

Avatar.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
};
