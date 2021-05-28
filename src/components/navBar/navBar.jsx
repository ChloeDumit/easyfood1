import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav_bar">
      <li>
        <Link className="nav-item" to={"/categories/"}>
          All
        </Link>
      </li>
      <li>
        <Link className="nav-item" to={"/categories/veggie"}>
          Veggie
        </Link>
      </li>
      <li>
        <Link className="nav-item" to={"/categories/vegan"}>
          Vegan
        </Link>
      </li>
      <li>
        <Link className="nav-item" to={"/categories/gluten_free"}>
          Gluten Free
        </Link>
      </li>
      <li>
        <Link className="nav-item" to={"/categories/traditional"}>
          Traditional
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;

// return ["md"].map((breakpoint, idx) => (
//   <div className="nav_bar">
//     <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
//       <ListGroup.Item>Veg</ListGroup.Item>
//       <ListGroup.Item>renders horizontally</ListGroup.Item>
//       <ListGroup.Item>on {breakpoint}</ListGroup.Item>
//       <ListGroup.Item>and above!</ListGroup.Item>
//     </ListGroup>
//   </div>
// ));
// <ListGroup horizontal>
//   <ListGroup.Item>This</ListGroup.Item>
//   <ListGroup.Item>ListGroup</ListGroup.Item>
//   <ListGroup.Item>renders</ListGroup.Item>
//   <ListGroup.Item>horizontally!</ListGroup.Item>
// </ListGroup>
// <div className="nav-bar">
//   <Menu className="menu">
//     <a id="all" className="menu-item" href="/categories/">
//       All
//     </a>
//     <a id="veggie" className="menu-item" href="/categories/veggie">
//       Veggie
//     </a>
//     <a id="vegan" className="menu-item" href="/categories/vegan">
//       Vegan
//     </a>
//     <a
//       id="gluten_free"
//       className="menu-item"
//       href="/categories/gluten_free"
//     >
//       Gluten Free
//     </a>
//     <a
//       id="traditional"
//       className="menu-item"
//       href="/categories/traditional"
//     >
//       Traditional
//     </a>
//   </Menu>
// </div>
