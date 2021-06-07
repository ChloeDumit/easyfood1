import React from "react";
import "./navBar.css";
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown, NavLink, NavItem } from "react-bootstrap";
import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
      <Navbar expand='lg' className='nav_bar'>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav fill className="nav_bar_items">
      <a class="navbar-brand" href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
        <Nav.Item>
      <Nav.Link href="/categories">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/categories/veggie">Veggie</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/categories/vegan">Vegan</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/categories/gluten_free">Gluten Free</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/categories/traditional">Traditional</Nav.Link>
      </Nav.Item>
      <Dropdown as={NavItem}>
  <Dropdown.Toggle as={NavLink}>Contact</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>About Us</Dropdown.Item>
    <Dropdown.Item>Contact Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
      <button className="button_header_items snipcart-checkout">
        <ImCart className="cart" />
        <span class="snipcart-items-count"></span>
      </button>
      <button className="button_header_profile snipcart-customer-signin">
        <CgProfile className="profile" />
      </button>
    </Nav>
    </Navbar.Collapse>
     </Navbar>
  );
}

export default NavBar;
