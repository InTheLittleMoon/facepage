import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation-links.css";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Link 1
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/link2">Link 2</NavLink>
      </li>
      <li>
        <NavLink to="/u1/link3">Link 1</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Sign Up</NavLink>
      </li>
    </ul>
  );
}
