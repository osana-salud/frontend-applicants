import React from "react";
import "./LogoSpinner.css";
import gitHubLogo from "../../img/gitHubLogo.png";
import gitLabLogo from "../../img/gitLabLogo.png";

export default function LogoSpinner() {
  return (
    <div className="logo-spinner">
      <img className="img-front" src={gitLabLogo} alt="GitLab Logo" />
      <img className="img-back" src={gitHubLogo} alt="GitHub Logo" />
    </div>
  );
}
