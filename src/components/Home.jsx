import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";
import "../style/Home.scss";

class Home extends Component {
  state = {};
  transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  render() {
    return (
      <Fragment>
        <section className="hero">
          <div className="hero-title-container">
            <motion.div
              exit={{ opacity: 0, translateY: -10 }}
              transition={this.transition}
              className="hero-title-content"
            >
              <h3>Enzo Zerega</h3>
              <h1>Fullstack Web Developer</h1>
              <div className="cta">
                <Link to="/contact">Contact me</Link>
              </div>
            </motion.div>
          </div>
          <div className="hero-image">
            <ProgressiveImage
              src={require("../img/portrait.jpg")}
              placeholder={require("../img/portrait-scaled.jpg")}
            >
              {(src) => (
                <motion.img
                  exit={{ opacity: 0, translateY: -20 }}
                  transition={this.transition}
                  src={src}
                  alt=""
                />
              )}
            </ProgressiveImage>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
