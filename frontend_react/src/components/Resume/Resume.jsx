import React from "react";
import "./Resume.scss";

function Resume({ title, span }) {
  return (
    <div className="app__resume-title-mn">
      <h2 className="app__resume-title-mn">
        {title}{" "}
        <b>
          <span className="app__resume-title-sp">{span}</span>
        </b>
      </h2>
    </div>
  );
}

export default Resume;
