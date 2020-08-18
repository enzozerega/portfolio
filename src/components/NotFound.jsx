import React from "react";
import { motion } from "framer-motion";
import { animation } from "./common/Animations";
import "../style/NotFound.scss";

const NotFound = () => {
  return (
    <motion.section
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="not-found"
    >
      <h1>Oops...</h1>
      <h1>The page you are looking for was not found.</h1>
    </motion.section>
  );
};

export default NotFound;
