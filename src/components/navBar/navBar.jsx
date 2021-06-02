import React from "react";
import "./navBar.css";
// import { Link } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';


function NavBar() {
  return (
    <Container>
    <Navbar>
    <Nav className="nav_bar">
      <Nav.Link className='nav_item' href="/categories">All</Nav.Link>
      <Nav.Link className='nav_item' href="/categories/veggie">Veggie</Nav.Link>
      <Nav.Link className='nav_item' href="/categories/vegan">Vegan</Nav.Link>
      <Nav.Link className='nav_item' href="/categories/gluten_free">Gluten Free</Nav.Link>
      <Nav.Link className='nav_item' href="/categories/traditional">Traditional</Nav.Link>
    </Nav>
    </Navbar> 
    </Container>
  );
}

export default NavBar;