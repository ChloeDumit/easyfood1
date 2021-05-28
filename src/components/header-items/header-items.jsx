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
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button className="button_header_items snipcart-checkout">
        <ImCart className="cart" />
        <span class="snipcart-items-count"></span>
      </button>
      <button className="button_header_profile snipcart-customer-signin">
        <CgProfile className="profile" />
      </button>
      <div className="NavBar">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
