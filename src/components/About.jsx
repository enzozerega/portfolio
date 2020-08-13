import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/About.scss";
import { Link } from "react-router-dom";
import MyStory from "./MyStory";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
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
          <p>
            Hi! My name is Enzo, I’m currently based on
            <strong> Stockholm </strong> and on 2019 I decided to start a career
            on web development. That same year I started a training to become a
            <strong> Full Stack developer </strong>
            at Chas Academy. Currently, and after more than one year of
            training, I’m looking for a company where I can continue growing as
            a developer during a 6-months <strong>internship</strong>.
          </p>
          {/* <p>
            You will find my educational background, skills and a more in-depth
            presentation on the sections bellow. Don’t doubt on contacting me if
            you have any questions.
          </p> */}
        </article>
        <article className="education">
          <h1>Education</h1>
          <Education />
        </article>
        <article className="skills">
          <h1>Skills</h1>
          <Skills />
        </article>
        <article className="my-story">
          <h1>My Story</h1>
          <MyStory />
        </article>
      </motion.section>
    </Fragment>
  );
};

export default About;
