import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const TagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    }
})

const TimeSchema = new Schema({
    from: {
        type: String
    },
    to: {
        type: String
    }
})


const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    links: {
        type: String
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    authorId: {
        // references the user 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    tags: [TagSchema],
    email: {
        type: String
    },
    phone: {
        type: String
    },
    openTimes: [TimeSchema],
    priceRange: [Number]
    
})

const Shop = model('shop', ShopSchema);
export default Shop;
