import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String
    },
    description:{
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

const image = model("image", ImageSchema)
export default image;