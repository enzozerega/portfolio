import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/NavBar.scss";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav>
          <h1>NavBar</h1>
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <NavLink className="navbar-item" to="/about">
            About
          </NavLink>
          <NavLink className="navbar-item" to="/education">
            Education
          </NavLink>
          <NavLink className="navbar-item" to="/skills">
            Skills
          </NavLink>
          <NavLink className="navbar-item" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="navbar-item" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default NavBar;
