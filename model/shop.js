import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const TagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    }
})

const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 300
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
    
})

const Shop = model('shop', ShopSchema);
export default Shop;
