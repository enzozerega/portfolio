import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { animation } from "./common/Animations";

const AboutMenu = () => {
  return (
    <motion.nav
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      className="about-submenu"
    >
      <ul>
        <li>
          <NavLink to="/about/my-story" className="about-link">
            My Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/education" className="about-link">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/skills" className="about-link">
            Skills
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default AboutMenu;
