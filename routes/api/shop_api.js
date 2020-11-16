import Router from 'express';
import auth from '../../middleware/auth.js';
import shop from '../../model/shop.js';
import User from '../../model/user.js';

const router = Router();

// retrieving the shops
router.get('/', async (request, response) => {
    try{
        const shops = await shop.find();
        if(!shops){
            throw Error("No shops");
        }
        response.status(200).json(shops);
    }catch(error){
        response.status(400).json({msg: error.message});
    }
})

// create a shop
router.post('/:userId', auth, async (request, response) => {
    const newShop = new Shop({
        name: request.body.name,
        state: request.body.state,
        address: request.body.address,
        authorId: request.params.userId,
        food: request.body.food
    })
})

export default router;