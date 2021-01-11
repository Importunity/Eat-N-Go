import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const ImageSchema = new Schema({
    image: {
        type: String
    },
    cloudinaryId: {
        type: String
    }
})

const image = model("image", ImageSchema)
export default image;