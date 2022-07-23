import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { ResumeItem } from "../../components";
// import { BsFillBriefcaseFill } from "react-icons/bs";

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
      <h2 className="head-text">Skills & Experience Snapshot</h2>

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
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" item={experience.year} key={index}>
              <ResumeItem year={experience.year} />
              {/* <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div> */}

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
                      <ResumeItem placeName={work.name} subTitle={work.company} text={work.desc} />
                    </motion.div>

                    {/* <ReactTooltip id={work.name} place="bottom" effect="solid" arrowColor="#fff" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button link to CV */}
        <a href="https://resume.creddle.io/resume/4vq8ksqldw">
          <motion.button
            className="app__resume-button app__flex"
            whileHover={{
              scale: 1.2,
              // textShadow: "0px 0px 8px #030303",
              boxShadow: "0px 0px 5px #030303",
            }}
          >
            Click for full CV
          </motion.button>
        </a>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
