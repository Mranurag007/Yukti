import React from "react";
const ProductForm = () => {
    return (
        <>
        <div className="Prod-form">
            <form class="row g-3">
                <div class="col-12">
                    <label class="form-label">Product Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-12">
                    <label class="form-label">Product ID</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-12">
                    <label for="img" class="form-label">Product Image : </label>
                    <input type="file" id="img" name="img" accept="image/*" class="form-control" />
                </div>
                <div class="col-12">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input type="number" class="form-control" id="inputPrice" placeholder="0.0" />
                </div>
                <div class="mb-3">
                    <label for="inputDescript" class="form-label">Description</label>
                    <textarea class="form-control" id="inputDescript" rows="4"></textarea>
                </div>
                <button type="submit" class="col-2 btn btn-sbmt">Submit</button>
            </form>
        </div>
        </>

    );
};

export default ProductForm;


