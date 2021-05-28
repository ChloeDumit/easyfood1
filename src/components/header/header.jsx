import React from "react";
import NavBar from "../navBar/navBar";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header-style">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button className="button_header">
        <Link className="buttonLink" to="/categories/">
          ORDER NOW
        </Link>
      </button>
      <div className="NavBar">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
