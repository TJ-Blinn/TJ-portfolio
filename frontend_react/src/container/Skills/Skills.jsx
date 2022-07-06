import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  // fetching from Sanity
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // objects inside the array represent years | each year can have multiple experiences
    client.fetch(query).then((data) => {
      // console.log(data);
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* fetch Skills from Sanity CMS and map over them*/}
          {skills?.map((skill, index) => (
            <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" item={skill.name} key={index}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* loop over all the experiences */}
        <motion.div className="app__skills-exp">
          {/* {console.log("----- skills-exp:", experience.works)} */}
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" item={experience.year} key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* 1st loops of year, then loop over the experiences contained within */}
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      item={work.name}
                      key={index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <ReactTooltip id={work.name} place="bottom" effect="solid" arrowColor="#fff" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
