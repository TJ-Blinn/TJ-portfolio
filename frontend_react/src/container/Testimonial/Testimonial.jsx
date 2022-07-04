import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  // fetching from Sanity
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    // objects inside the array represent years | each year can have multiple experiences
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return <div>Testimonial</div>;
};

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__primarybg");
