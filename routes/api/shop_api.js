import Router from 'express';
import auth from '../../middleware/auth.js';
import Shop from '../../model/shop.js';
import User from '../../model/user.js';

const router = Router();

// retrieving the shops
router.get('/', async (request, response) => {
    try{
        const shops = await Shop.find();
        //console.log(shops);
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
        description: request.body.description,
        state: request.body.state,
        address: request.body.address,
        authorId: request.params.userId,
        tags: request.body.tags
    })

    try{
        const shop = await newShop.save();
        response.status(200).json(shop);
    }catch(error){
        response.status(400).json({msg: error.message});
    }
})

export default router;