import React from "react";
const MyProduct = (e) => {
    return (
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img height="300px" width="200px" src="http://bit.ly/2tMBBTd"></img>
                </div>
                <div class="product-info">
                    <div class="product-text">
                        <h1>{e.data.product_name}</h1>
                        <p>{e.data.description}</p>
                        <br />
                        <br />
                        <br />
                        <p>Rs    <span>{e.data.price}</span></p>

                    </div>
                    <div class="product-price-btn">
                        <button type="button">see more</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MyProduct;