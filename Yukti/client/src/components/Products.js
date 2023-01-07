import React from "react";
import AddProduct from "./AddProduct";
import MyProduct from "./MyProduct";

const Products = () => {
    return (
      <>
        <div className="Product-page">
          <div className="product-line">My Products</div>
          <div className="product-board">
            <div className="col product-board">
                <a className="product-card" href="#"><MyProduct/></a>
                <a className="product-card" href="#"><MyProduct/></a>
                <a className="product-card" href="#"><MyProduct/></a>
                <a className="product-card" href="#"><MyProduct/></a>
                <a className="product-card col-12 addprod" href="/addproduct"><AddProduct/></a>
            </div>
          </div>
        </div>
      </>
    
    );
  };

  export default Products;