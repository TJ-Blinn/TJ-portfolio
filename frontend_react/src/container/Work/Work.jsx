import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  // state for changing animations on the portoflio cards
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  // fetching from Sanity
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
