import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/About.scss";
import { Link } from "react-router-dom";

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
            Thanks for wanting to know more about me. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Minus assumenda accusamus qui
            praesentium, fuga sed a similique veritatis iste perferendis
            corporis cupiditate delectus quidem! Eum incidunt blanditiis quasi
            cum molestiae.
          </p>
        </article>
        <article className="education">
          <h1>Education</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illo
            accusantium voluptatem sit quaerat doloribus, facilis corrupti ad,
            harum rem consequuntur inventore! Corporis pariatur adipisci
            recusandae eligendi eaque iure at.
          </p>
        </article>
        <article className="skills">
          <h1>Skills</h1>
        </article>
        <article className="my-story">
          <h1>My Story</h1>
          <div className="cta">
            <Link to="/contact">Contact me</Link>
          </div>
        </article>
      </motion.section>
    </Fragment>
  );
};

export default About;
