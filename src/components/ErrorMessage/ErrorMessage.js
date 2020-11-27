import React from "react";
import { cloudErrorIcon } from "../../assets/svg/svg";
import PropTypes from "prop-types";
export const ErrorMessage = ({ msg }) => {
  return (
    <div className="error-message">
      {cloudErrorIcon}
      <h2>{msg}</h2>
    </div>
  );
};

ErrorMessage.defaultProps = {
  msg: "Failed to load resource, please try again.",
};

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};
