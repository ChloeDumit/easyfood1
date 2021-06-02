import React from "react";
import "./itemList.css";
import { Col } from "react-bootstrap";

function ItemList({ name, price, id, info, categ }) {
  return (
    <Col className="mx-auto" xs="12" sm="12" md="4" lg="4" xl="4">
      <div className="itemCard">
        <figure>
          <img
            className="img-item"
            src={`/assets/${name}.jpg`}
            alt={`${name} food"`}
          ></img>
        </figure>
        <div className="infoBox">
          <h1>{name}</h1>

          <p className="item-info">{info}</p>
          <p className="item-precio">${price}</p>
          <button
            className="agregar snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url={`/categories/${categ}/${id}`}
            data-item-name={name}
            data-item-image={`/assets/${name}.jpg`}
            data-item-description={info}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Col>
  );
}
export default ItemList;
