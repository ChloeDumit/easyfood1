import React from "react";
import "./navBar.css";
// import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar expand="lg" className='nav_bar'>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/categories">All</Nav.Link>
      <Nav.Link href="/categories/veggie">Veggie</Nav.Link>
      <Nav.Link href="/categories/vegan">Vegan</Nav.Link>
      <Nav.Link href="/categories/gluten_free">Gluten Free</Nav.Link>
      <Nav.Link href="/categories/traditional">Traditional</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;