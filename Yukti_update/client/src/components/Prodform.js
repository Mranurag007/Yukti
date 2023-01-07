import React, { useState, useContext, useEffect } from "react";
import { matchRoutes, NavLink, useNavigate, useParams } from "react-router-dom";
const ProductForm = () => {
    const p = useParams();
    const [userData, setUserData] = useState({});
    const [product_name, setproduct_name] = useState(null);
    const [description, setdescription] = useState(null);
    const [image, setimage] = useState(null);
    const [price, setprice] = useState(null);
    const history = useNavigate();
    const savadata = async function (e) {
        e.preventDefault();
        const buisness_id = p.pid;
        const res1 = await fetch("/productdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                buisness_id, product_name, description, price
            })
        });
        history(`/products/${p.pid}`)
    }
    return (
        <>
            <div className="Prod-form">
                <form class="row g-3">
                    <div class="col-12">
                        <label class="form-label">Product Name</label>
                        <input type="text" class="form-control" value={product_name} onChange={(e) => setproduct_name(e.target.value)} />
                    </div>
                    <div class="col-12">
                        <label for="inputPrice" class="form-label">Price</label>
                        <input type="text" class="form-control" id="inputPrice" placeholder="0.0" value={price} onChange={(e) => setprice(e.target.value)} />
                    </div>
                    <div class="col-12">
                        <label for="inputPrice" class="form-label">Image</label>
                        <input type="file" class="form-control" id="inputPrice" name="image" value={image} onChange={(e) => setimage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="inputDescript" class="form-label">Description</label>
                        <input type="text" class="form-control" value={description} onChange={(e) => setdescription(e.target.value)} />
                    </div>
                    <button type="submit" class="frm-btn skip">Skip</button>
                    <button type="submit" class="frm-btn sbmt" onClick={savadata}>Submit</button>
                </form>
            </div>
        </>

    );
};

export default ProductForm;


