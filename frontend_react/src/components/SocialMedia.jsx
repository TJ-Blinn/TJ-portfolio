import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/anthony-blinn/">{<BsLinkedin />}</a>
      </div>
      <div>
        <a href="https://github.com/TJ-Blinn">{<BsGithub />}</a>
      </div>
    </div>
  );
};

export default SocialMedia;
