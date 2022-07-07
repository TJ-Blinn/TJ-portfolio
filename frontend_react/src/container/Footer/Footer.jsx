import React, { useState } from "react";

import { images } from "../../constants/index";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

// Footer here is also the Contact Form
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Grab a coffee and chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:anthony.j.blinn@gmail.com" className="p-text">
            anthony.j.blinn@gmail.com
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name={name} value={name} onChange={handleChangeInput} />
        </div>

        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name={email} value={email} onChange={handleChangeInput} />
        </div>

        <div>
          <textarea className="p-text" placeholder="Your Message" value={message} name={message} onChange={handleChangeInput} />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
