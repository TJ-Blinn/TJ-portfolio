import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";

import "./About.scss";
import { urlFor, client } from "../../client";

// const abouts = [
//   { title: "Front-end Web development", description: "Designing responsive and dynamic apps from wireframe to production!", imgUrl: images.about01 },
//   { title: "Back-end Web development", description: "Database design with NodeJs, SQL, PostgreSQL and, Sanity", imgUrl: images.about02 },
//   { title: "PERN Stack", description: "Full-stack web development with CRUD operations", imgUrl: images.about03 },
//   { title: "Web Animations", description: "Making designs come to life!", imgUrl: images.about04 },
// ];

const About = () => {
  // dynamic data coming from (Sanity) CMS
  const [abouts, setAbouts] = useState([]);

  // only run at the start, once component loads
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    // Empty React fragment
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* Link to sanity function for image fetching */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default AppWrap(About, "about");
