const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    buisness_name: {
        type: String,
        required: [true, "Please Enter business name"]
    },
    ceo_name: {
        type: String,
        required: [true, "Please Enter CEO name"]
    },
    category: {
        type: String,
        required: [true, "Please Enter business name"]
    },
    location: {
        type: String,
        required: [true, "Please Enter business description"]
    },
    revenue: {
        type: String
    },
    strength: {
        type: String,

    },
    year: {
        type: String,

    },
    Description: {
        type: String
    },
})

const business = mongoose.model('business', businessSchema);
module.exports = business;