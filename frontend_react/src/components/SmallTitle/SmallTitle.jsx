import React from "react";
import "./SmallTitle.scss";

function SmallTitle({ icon, title }) {
  return (
    <div className="app__smallTitle">
      <p className="app__smallTitle-icon">{icon}</p>
      <h3 className="app__smallTitle-heading">{title}</h3>
    </div>
  );
}

export default SmallTitle;
