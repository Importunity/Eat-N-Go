import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    authorId: {
        type: mongooose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    postId: {
        type: mongooose.Schema.Types.ObjectId,
        reference: "Shop",
        required: true
    }
})

const Review = model("review", ReviewSchema);

export default Review;