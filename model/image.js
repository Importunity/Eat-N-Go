import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const ImageSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    }
})

const image = model("image", ImageSchema)
export default image;