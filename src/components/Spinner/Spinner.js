import React from "react";
import "./Spinner.css";
import hubLab from "../../img/hubLab.png";

export default function Spinner() {
  return (
    <div className="spinner">
      <img src={hubLab} alt="" />
    </div>
  );
}
