import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import BackgroundVideo from "./BackgroundVideo";
import anime from "animejs/lib/anime.es.js";
import "../style/Home.scss";
import { Fragment } from "react";

const svgPath = document.querySelectorAll(".path");

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: "alternate",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 700,
  delay: (el, i) => {
    return i * 500;
  },
});

const Home = () => {
  // Progressive image loading.
  // From: https://jmperezperez.com/medium-image-progressive-loading-placeholder/
  // window.onload = function () {
  //   var placeholder = document.querySelector(".placeholder"),
  //     small = placeholder.querySelector(".img-small");
  //   var img = new Image();
  //   img.src = small.src;
  //   img.onload = function () {
  //     small.classList.add("loaded");
  //     small.setAttribute("alt", "");
  //   };
  //   var imgLarge = new Image();
  //   imgLarge.src = placeholder.dataset.large;
  //   imgLarge.onload = function () {
  //     imgLarge.classList.add("loaded");
  //     imgLarge.setAttribute("alt", "");
  //   };
  //   placeholder.appendChild(imgLarge);
  // };
  return (
    <Fragment>
         <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      className="hero"
    >
      <BackgroundVideo />
      <motion.div variants={animation} className="hero-title-container">
        <div className="hero-title-content">
          <div className="title-text">
            <h3>Enzo Zerega</h3>
            <h1>Web Developer</h1>
            <h1>& GIS analyst</h1>
            <div className="cta flend">
              <Link to="/contact">Contact me</Link>
            </div>
          </div>
          <div className="title-shadow" />
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ transition: 0.2 }}
        className="hero-image"
      >
        <div
          className="placeholder"
          data-large={require("../img/portrait-1000.png")}
        >
          <img
            src={require("../img/portrait-scaled.png")}
            className="img-small"
            alt=""
          />
        </div>
      </motion.div> */}
    </motion.section>
    <motion.section
    initial="initial"
    animate="animate"
    exit="exit"
    className="hero-skills"
  >
          <motion.div variants={animation} className="hero-skills-container">
          <div className="hero-skills-content">
            <div>
              React
            </div>
            <div>
              JavaScript
            </div>
            <div>
              Node.js
            </div>
            <div>
              Git
            </div>
            <div>
              ArcGIS
            </div>
          </div>
        </motion.div>
        </motion.section> 
    </Fragment>

  );
};

export default Home;
