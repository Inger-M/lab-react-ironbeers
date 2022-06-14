import React from "react";
import { Link } from "react-router-dom";
import navBarPic from "../assets/home-icon-header.png";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <a href="" className="navBarPic">
          <img src={navBarPic} alt="home gif" className="navBarPic" />
        </a>{" "}
      </Link>
    </div>
  );
}

export default Navbar;
