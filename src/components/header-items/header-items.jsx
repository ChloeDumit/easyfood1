import React from "react";
import NavBar from "../navBar/navBar";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./header-items.css";
import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="header-style">
     
      <div className="NavBar">
        <NavBar />
       </div>
    </header> 
  );
}

export default Header;
