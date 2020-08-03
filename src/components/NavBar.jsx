import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/NavBar.scss";

class NavBar extends Component {
  state = {};
  transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  render() {
    return (
      <header>
        <nav>
          <Link className="nav-home-link" to="/">
            <motion.div
              whileHover={{ fontStretch: 2, opacity: 0 }}
              transition={this.transition}
              className="nav-logo"
            >
              <div className="img" />
            </motion.div>
          </Link>
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
