import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;
import image from './image.js';

const RatingSchema = new Schema({
    overall: {
        type: Number,
    },
    food: {
        type: Number,
    },
    service: {
        type: Number,
    },
    value: {
        type: Number,
    }
})

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 50,
        min: 10
    },
    review: {
        type: String,
        required: true,
        min: 50,
        max: 300
    },
    rating: RatingSchema,
    authorId: {
        type: mongoose.Schema.Types.ObjectId, 
        reference: "User"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "Shop",
        required: true
    },
    images: image.schema
})


const Review = mongoose.models.review || model('review', ReviewSchema);

export default Review;