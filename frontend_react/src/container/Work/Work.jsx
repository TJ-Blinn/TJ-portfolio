import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // 'pill' styled buttons above the boxes for each portfolio example | categorize the apps
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {/* loop over categories */}
        {["UI/UX", "Web App", "Mobile App", "React Js", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Work;
