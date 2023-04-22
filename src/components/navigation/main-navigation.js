import React from "react";
import "./main-navigation.css";

//components
import MainHeader from "./main-header";
import NavLinks from "./navigation-links";

export default function MainNavigation() {
  return (
    <div className="main-navigation-container">
      <h1>Gets main navigation</h1>
      <MainHeader />
      <NavLinks />
    </div>
  );
}
