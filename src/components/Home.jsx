import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/Home.scss";

const Home = () => {
  window.onload = function () {
    var placeholder = document.querySelector(".placeholder"),
      small = placeholder.querySelector(".img-small");

    // 1: load small image and show it
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
      small.classList.add("loaded");
    };

    // 2: load large image
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
        <div class="placeholder" data-large={require("../img/portrait.png")}>
          <img src={require("../img/portrait-scaled.png")} class="img-small" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
