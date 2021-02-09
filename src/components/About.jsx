import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/About.scss";
import MyStory from "./MyStory";
import Education from "./Education";
import Skills from "./Skills";
import ImagePL from "./common/ImagePL";

const About = () => {
  //Progressive image loading.
  //From: https://jmperezperez.com/medium-image-progressive-loading-placeholder/

  return (
    <Fragment>
      <motion.section
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="about"
      >
        <article className="about-intro">
          <ImagePL />
          <div className="about-intro-text">
            <p>
              <span className="greeting">Hi!</span> I'm Enzo.
            </p>
            <p>
              I’m currently based in <strong>Stockholm</strong>, and in 2019 I
              decided to start a career on web development. Right now, I'm about
              to finish a training to become a{" "}
              <strong>Full stack developer</strong> at Chas Academy. I’m looking
              for a company where I can continue growing as a developer.
            </p>
          </div>
        </article>
        <article className="education">
          <h1>Highlights</h1>
          <Education />
        </article>
        <article className="skills">
          <h1>Skills</h1>
          <Skills />
        </article>
        <article className="my-story">
          <h1>My Story</h1>
          <MyStory />
          <div className="cta">
            <a href="/contact">Contact me</a>
          </div>
        </article>
      </motion.section>
    </Fragment>
  );
};

export default About;
