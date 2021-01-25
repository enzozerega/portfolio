import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/NavBar.scss";

class NavBar extends Component {
  transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  render() {
    return (
      <header>
        <nav>
          <a className="nav-home-link" href="/">
            <motion.div
              whileHover={{ fontStretch: 2, opacity: 0 }}
              transition={this.transition}
              className="nav-logo-container"
            >
              <img
                src={require("../img/logo-transparent.png")}
                className="nav-logo-img"
              />
            </motion.div>
          </a>
          <ul>
            <li>
              <NavLink className="navbar-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
