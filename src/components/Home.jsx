import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/Home.scss";

const Home = () => {
  // Progressive image loading.
  // From: https://jmperezperez.com/medium-image-progressive-loading-placeholder/
  window.onload = function () {
    var placeholder = document.querySelector(".placeholder"),
      small = placeholder.querySelector(".img-small");
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
      small.classList.add("loaded");
    };
    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large;
    imgLarge.onload = function () {
      imgLarge.classList.add("loaded");
    };
    placeholder.appendChild(imgLarge);
  };
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      className="hero"
    >
      <motion.div variants={animation} className="hero-title-container">
        <div className="hero-title-content">
          <h3>Enzo Zerega</h3>
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
        <div
          className="placeholder"
          data-large={require("../img/portrait.png")}
        >
          <img
            src={require("../img/portrait-scaled.png")}
            className="img-small"
            alt=""
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
