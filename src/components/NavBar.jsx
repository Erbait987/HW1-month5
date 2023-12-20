import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const activeMenu = ({ isActive }) => {
  return isActive ? "active-navlink" : "link-style";
};
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <NavLink className={activeMenu} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/get">
            Get
          </NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/post">
            Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
