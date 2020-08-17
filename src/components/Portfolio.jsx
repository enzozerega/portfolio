import React from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/Portfolio.scss";
import PortfolioItem from "./PortfolioItem";

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
        <PortfolioItem
          title="Car Rental"
          description="Register system for a car rental company"
          tags="PHP, MySQL, CSS, JavaScript"
          github="https://github.com/enzozerega/u05-php-car-rental"
          www="http://enzo.zerega.chas.academy/u05-car-rental/"
          img={require("../img/carrental.png")}
          imgScaled="../img/carrental-scaled.png"
        />
        <PortfolioItem
          title="Weather App"
          description="Check the weather"
          tags="React, CSS, The Movie Database API"
          github="https://github.com/enzozerega/u09-react-weather-app"
          www="https://u09-react-weather-app.web.app/"
          img={require("../img/weatherapp.png")}
          imgScaled="../img/weatherapp-scaled.png"
        />
        <PortfolioItem
          title="Movies App"
          description="Find movies and actors"
          tags="Angular, TypeScript, OpenWeatherMap API"
          github="https://github.com/enzozerega/u08-angular-movie-app"
          www="https://u08-angular-movie-app.web.app/"
          img={require("../img/movieapp.png")}
          imgScaled="../img/movieapp-scaled.png"
        />

        <PortfolioItem
          title="Hangman"
          description="A simple game"
          tags="HTML, CSS, JavaScript"
          github="https://github.com/enzozerega/u03-javascript-hangman"
          www="http://enzo.zerega.chas.academy/u03-javascript-hangman/"
          img={require("../img/hangman.png")}
          imgScaled="../img/hangman-scaled.png"
        />
        <PortfolioItem
          title="Speak Out"
          description="T-shirts web store"
          tags="Wordpress, Elementor"
          www="http://enzo.zerega.chas.academy/u07-wordpress/"
          img={require("../img/tshirtsstore.png")}
          imgScaled="../img/tshirtsstore-scaled.png"
        />
        <PortfolioItem
          title="MSc Thesis"
          description="Thesis I wrote to obtain my MSc in Geomatics"
          tags="GIS, Sentinel-2, R, Machine Learning Algorithms"
          www="https://lup.lub.lu.se/student-papers/search/publication/8954922"
          label="Details"
          img={require("../img/geomatics.png")}
          imgScaled="../img/geomatics-scaled.png"
        />
        <PortfolioItem
          title="ArcticDEM data management"
          description="ArcGIS toolbox"
          tags="Python, ArcPy, ArcticDEM, GIS"
          www="https://www.nateko.lu.se/article/students-created-toolbox-for-gis-software"
          label="Details"
          img={require("../img/toolbox.png")}
          imgScaled="../img/toolbox-scaled.png"
        />
        <PortfolioItem
          title="My Portfolio"
          description="My web developer portfolio"
          tags="React, SCSS, Google Cloud"
          www="https://enzozerega.com"
          github="https://github.com/enzozerega/portfolio"
          img={require("../img/portfolio.png")}
          imgScaled="../img/portfolio-scaled.png"
        />
        <PortfolioItem
          title="Magic Crystals"
          description="Online store. My first website ever!"
          tags="HTML, CSS"
          github="https://github.com/enzozerega/u01-static-website"
          www="http://enzo.zerega.chas.academy/u01-static-website/"
          img={require("../img/magic-crystals.png")}
          imgScaled="../img/magic-crystals-scaled.png"
        />
      </div>
    </motion.section>
  );
};

export default Portfolio;
