import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import BackgroundVideo from "./BackgroundVideo";
import "../style/Home.scss";

const Home = () => {
  return (
    <Fragment>
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        className="hero"
      >
        <motion.div variants={animation} className="hero-title-container">
          <div className="hero-title-content">
            <div className="title-text">
              <h3>Enzo Zerega</h3>
              <h1>Web Developer</h1>
              <h1>& GIS Analyst</h1>
              <div className="cta flend">
                <Link to="/contact">Contact me</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <BackgroundVideo />
    </Fragment>
  );
};

export default Home;
