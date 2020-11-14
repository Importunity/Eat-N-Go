const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    food: [FoodSchema]
})

const Shop = mongoose.model('shop', ShopSchema);
module.exports = Shop;
