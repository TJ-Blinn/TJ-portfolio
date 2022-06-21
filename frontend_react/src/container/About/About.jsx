import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const Abouts = [
  { title: "Front-end Web Developer", description: "Designing responsive and dynamic apps from wireframe to production!", imgUrl: "" },
  { title: "Back-end Web Developer", description: "Database design with NodeJs, SQL, PostgreSQL and, Sanity", imgUrl: "" },
  { title: "Web Design", description: "Making functional code fun!", imgUrl: "" },
  { title: "Web Animations", description: "Making designs come to life!", imgUrl: "" },
];

const About = () => {
  return (
    // Empty React fragment
    <>
      <h2 className="head-text">
        I know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
