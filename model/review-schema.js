const mongooose = require('mongoose')
const Schema = mongooose.Schema;

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
        reference = "User", 
        required: true
    },
    postId: {
        type: mongooose.Schema.Types.ObjectId,
        reference = "Shop",
        required: true
    }
})

const Review = mongooose.model("review", ReviewSchema);