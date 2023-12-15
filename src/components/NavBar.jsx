import React from "react";
import { NavLink } from "react-router-dom";

const activeMenu = ({ isActive }) => {
  return isActive ? "active-navlink" : "link-style";
};
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={activeMenu} to="/">
            Get
          </NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/about">
            Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
