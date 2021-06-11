import React from "react";
import ItemList from "../itemList/itemList";
import { useState, useEffect } from "react";
import { getFirestore } from "../../db";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { Row, Container } from "react-bootstrap";


function ItemContainer() {
  const [product, setProducts] = useState([]);
  const { categ } = useParams();
  const db = getFirestore();

  const productCall = () => {
    if (categ) {
      db.collection("products")
        .where("category", "==", `${categ}`)
        .get()
        .then((docs) => {
          let arrayProds = [];
          docs.forEach((doc) => {
            arrayProds.push({ id: doc.id, data: doc.data() });
          });
          console.log(arrayProds);
          setProducts(arrayProds);
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(
    () => productCall(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categ]
  );

  return (
    <Container className="container" id="ItemDetailContainer">
      {product.length ? (
        <>
          <Row className="Row">
            {product.map((product) => (
              <ItemList
                key={product.id}
                id={product.id}
                name={product.data.name}
                price={product.data.price}
                info={product.data.info}
                longinfo={product.data.longinfo}
                categ={product.data.category}
                photo={product.data.photo}
              />
            ))}
          </Row>
        </>
      ) : (
        <p className="mensaje">Cargando productos...</p>
      )}

     
    </Container>
  );
}

export default ItemContainer;
