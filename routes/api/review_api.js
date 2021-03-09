import Router from 'express';
import auth from '../../middleware/auth.js';
import Review from '../../model/review.js';
//import Rating from '../../model/review.js/'
import upload from '../../config/multer.js';
import image from '../../model/image.js';


const router = Router();

router.post('/:shopId', upload.single("images"), async (request, response) => {
    console.log(request.body)
    try{
        const filePath = request.file.path;
        const result = await cloudinary.uploader.upload(filePath, {folder: `EAT-N-GO/Shops/Reviews/${request.body.shopName}`});
        const newImage = new image({
            image: result.secure_url,
            cloudinaryId: result.public_id
        });
        const newReview = new Review({
            title: request.body.title,
            review: request.body.review,
            postId: request.params.shopId,
            images: newImage,
        })
        const review = await newReview.save();
        response.status(200).json(review);
    }catch(error){
        response.status(400).json({msg: error.message})
    }
})

export default router;