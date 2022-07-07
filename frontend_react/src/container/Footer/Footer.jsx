import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { clinet } from "../../client";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Grab a coffee and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img></img>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
