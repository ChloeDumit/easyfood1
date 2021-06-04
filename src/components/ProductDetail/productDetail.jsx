import React from "react";

function ProductDetail({ name, price, id, info, categ }) {
    return (
        <section className="row ItemDetail_Container">
            <figure className=" col-12 col-md-6 text-right">
                <img src={`/assets/${name}.jpg`} className="img-fluid ItemDetail_img" alt="campera" />
            </figure>
            <div className="col-12 col-md-6 ItemDetail_contDetalles d-flex align-items-center">
                <div className="ItemDetail_textos">
                    <h1 className="ItemDetail_Nombre">{name}</h1>
                    <span className="ItemDetail_Precio">${price}</span>
                    <p className="ItemDetail_Descrip">{info}</p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;