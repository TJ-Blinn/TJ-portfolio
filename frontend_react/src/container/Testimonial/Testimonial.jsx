import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };


  // fetching from Sanity
  useEffect(() => {
    const query = '*[_type == "testimonials"]';


    // objects inside the array represent years | each year can have multiple experiences
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

  }, []);

  // return <div>Testimonial</div>;

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            {/* {console.log("Results of testimonials: ", testimonials)} */}

            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          {/* Move accross different testimonials */}
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );

};
// };

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__primarybg");
