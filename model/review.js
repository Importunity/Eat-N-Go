import { Rating } from '@material-ui/lab';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const RatingSchema = new Schema({
    food: {
        type: Number,
        required: true,
    },
    service: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: [RatingSchema],
    authorId: {
        type: mongooose.Schema.Types.ObjectId, 
        reference: "User", 
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