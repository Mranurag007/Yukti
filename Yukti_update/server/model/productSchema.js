const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    buisness_id:{
        type:String,
        required:[true,"Please Enter product product id"]
    },
    product_name:{
        type:String,
        required:[true,"Please Enter product name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:String,
        required:[true,"Please Enter product price"]
    },

       

})

const Products = mongoose.model('products', productSchema);
module.exports = Products;