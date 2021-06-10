import React from "react";
import NavBar from "../navBar/navBar";
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import "./header-items.css";
// import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BsFillBagFill } from "react-icons/bs";

function Header() {
  return (
    <header className="header-style">
     
      <div className="NavBar">
      <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        <NavBar />
        
       </div>
    </header> 
  );
}

export default Header;
