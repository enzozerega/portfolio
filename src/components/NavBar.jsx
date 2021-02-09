import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/NavBar.scss";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  const location = useLocation();
  const [specialClass, setSpecialClass] = useState("navbar-item");
  useEffect(() => {
    if (location.pathname !== "/") {
      setSpecialClass("navbar-item-dark");
    } else {
      setSpecialClass("navbar-item");
    }
  }, [location.pathname]);
  return (
    <header>
      <nav>
        <NavLink className="nav-home-link" to="/">
          <motion.div
            whileHover={{ fontStretch: 2, opacity: 0 }}
            transition={transition}
            className="nav-logo-container"
          >
            <img
              src={require("../img/logo-transparent.png")}
              className="nav-logo-img"
              alt=""
            />
          </motion.div>
        </NavLink>
        <ul>
          <li>
            <NavLink className={specialClass} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={specialClass} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className={specialClass} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
