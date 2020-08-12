import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/Home.scss";

const Home = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      className="hero"
    >
      <motion.div variants={animation} className="hero-title-container">
        <div className="hero-title-content">
          <h3>Enzo Zerega, MSc</h3>
          <h1>Web Developer</h1>
          <div className="cta">
            <Link to="/contact">Contact me</Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ transition: 0.2 }}
        className="hero-image"
      >
        <ProgressiveImage
          src={require("../img/portrait.jpg")}
          placeholder={require("../img/portrait-scaled.jpg")}
        >
          {(src) => <img src={src} alt="" />}
        </ProgressiveImage>
      </motion.div>
    </motion.section>
  );
};

export default Home;
