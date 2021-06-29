import React from "react";
import {useParams} from "react-router-dom";
import "../styles/product.css";
function Product() {
  const {id} = useParams();

  return (
    <div className="outofnameswow">
      <div className="product_outer"></div>
    </div>
  );
}

export default Product;
