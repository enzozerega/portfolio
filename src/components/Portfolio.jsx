import React from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import getProyects from "../services/Proyects";

const proyectsData = getProyects();

const Portfolio = () => {
  return (
    <motion.section
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="portfolio"
    >
      <article className="portfolio-intro">
        <p>
          Welcome to my portfolio. As I'm still a student, most of the projects
          listed here represent assignments I've made during my training as a
          developer.
        </p>
      </article>
      <div className="articles-container">
        <h1>My Projects</h1>
        {proyectsData.map(
          (data, index) =>
            data.github && (
              <PortfolioItem
                title={data.title}
                description={data.description}
                tags={data.tags}
                github={data.github}
                www={data.www}
                img={require(`../img/${data.img}.png`)}
                key={index}
              />
            )
        )}
        {proyectsData.map(
          (data, index) =>
            data.label && (
              <PortfolioItem
                title={data.title}
                description={data.description}
                tags={data.tags}
                label={data.label}
                www={data.www}
                img={require(`../img/${data.img}.png`)}
                key={index}
              />
            )
        )}
        {proyectsData.map(
          (data, index) =>
            !data.label &&
            !data.github && (
              <PortfolioItem
                title={data.title}
                description={data.description}
                tags={data.tags}
                www={data.www}
                img={require(`../img/${data.img}.png`)}
                key={index}
              />
            )
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
