import React from "react";
import "./itemList.css";
import { Col } from "react-bootstrap";
import { Link} from 'react-router-dom'


function ItemList({ name, price, id, info, categ }) {
  // var product_page = useLocation()
  return (
    
    <Col className="mx-auto" xs="12" sm="12" md="4" lg="4" xl="4">
      <div className="itemCard">
        <figure>
          <img
            className="img-item"
            src={`/assets/${name}.jpg`}
            alt={`${name}`}
          ></img>
        </figure>
        <div className="infoBox">
          
          <h1> 
            <Link to={`/item/${id}`} className="ver">{name}</Link></h1>

          <p className="item-info">{info}</p>
          <button
            className="agregar snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url={'/'}
            data-item-name={name}
            data-item-image={`/assets/${name}.jpg`}
            data-item-description={info}
          >
            Add to cart (${price})
          </button>
        </div>
      </div>
    </Col>
  );
}
export default ItemList;
